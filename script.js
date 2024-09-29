const templates = {
    html: 'template.html',
    css: 'template.css',
    js: 'template.js'
};

let editor;
let currentTab = 'html';
let code = { html: '', css: '', js: '' };
let isPasting = false;

const tabButtons = document.querySelectorAll('.tab');
const pasteButton = document.getElementById('pasteButton');
const loadButton = document.getElementById('loadButton');
const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

function initEditor() {
    editor = CodeMirror(document.getElementById('editor'), {
        mode: 'htmlmixed',
        theme: 'monokai',
        lineNumbers: true,
        autofocus: true
    });

    editor.on('change', () => {
        code[currentTab] = editor.getValue();
        updatePreview();
    });
}

function setEditorMode(mode) {
    editor.setOption('mode', mode);
}

function updatePreview() {
    const combinedCode = code.html
        .replace('/* Aquí irá el CSS */', code.css)
        .replace('// Aquí irá el JavaScript', code.js);
    preview.srcdoc = combinedCode;
    preview.classList.add('show');
}

async function fetchTemplate(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error('Error fetching template:', error);
        return '';
    }
}

async function simulatePaste(templateUrl, duration = 30000) {
    isPasting = true;
    pasteButton.disabled = true;
    pasteButton.textContent = 'Pegando...';

    const text = await fetchTemplate(templateUrl);
    const chunkSize = Math.ceil(text.length / (duration / 100));
    for (let i = 0; i < text.length; i += chunkSize) {
        const chunk = text.slice(i, i + chunkSize);
        code[currentTab] += chunk;
        editor.setValue(code[currentTab]);
        editor.setCursor(editor.lineCount(), 0);
        updatePreview();
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    isPasting = false;
    pasteButton.disabled = false;
    pasteButton.textContent = 'Simular pegado';
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentTab = button.dataset.tab;
        setEditorMode(currentTab === 'html' ? 'htmlmixed' : currentTab);
        editor.setValue(code[currentTab]);
    });
});

pasteButton.addEventListener('click', () => {
    if (!isPasting) {
        simulatePaste(templates[currentTab]);
    }
});

loadButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            if (file.name.endsWith('.html')) {
                code.html = content;
                if (currentTab === 'html') editor.setValue(content);
            } else if (file.name.endsWith('.css')) {
                code.css = content;
                if (currentTab === 'css') editor.setValue(content);
            } else if (file.name.endsWith('.js')) {
                code.js = content;
                if (currentTab === 'js') editor.setValue(content);
            }
            updatePreview();
        };
        reader.readAsText(file);
    }
});

initEditor();