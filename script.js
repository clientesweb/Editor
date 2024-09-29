const templates = {
    html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página Web</title>
    <style>
        /* Aquí irá el CSS */
    </style>
</head>
<body>
    <header>
        <h1>Bienvenido a Mi Página Web</h1>
    </header>
    <main>
        <p>Este es un ejemplo de una página web simple.</p>
        <button id="changeColor">Cambiar color</button>
    </main>
    <script>
        // Aquí irá el JavaScript
    </script>
</body>
</html>`,
    css: `body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 1rem;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}`,
    js: `document.getElementById("changeColor").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}`
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

async function simulatePaste(text, duration = 30000) {
    isPasting = true;
    pasteButton.disabled = true;
    pasteButton.textContent = 'Pegando...';

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