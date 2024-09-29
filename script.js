const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const pasteButton = document.getElementById('pasteButton');
const loadButton = document.getElementById('loadButton');
const fileInput = document.getElementById('fileInput');
const tabButtons = document.querySelectorAll('.tab-button');

let currentTab = 'html';
let isPasting = false;

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

let code = {
    html: '',
    css: '',
    js: ''
};

function updateEditor() {
    const highlightedCode = Prism.highlight(code[currentTab], Prism.languages[currentTab], currentTab);
    editor.innerHTML = highlightedCode;
}

function updatePreview() {
    preview.classList.add('updating');
    const combinedCode = code.html.replace('/* Aquí irá el CSS */', code.css).replace('// Aquí irá el JavaScript', code.js);
    setTimeout(() => {
        preview.srcdoc = combinedCode;
        setTimeout(() => {
            preview.classList.remove('updating');
        }, 100);
    }, 300);
}

function simulatePaste(text, duration = 50) {
    return new Promise((resolve) => {
        let i = 0;
        isPasting = true;
        pasteButton.disabled = true;
        pasteButton.textContent = 'Pegando...';

        const chunkSize = Math.ceil(text.length / (duration / 100)); // Dividir el texto en chunks para pegar en 1.5 minutos

        function paste() {
            if (i < text.length) {
                const chunk = text.slice(i, i + chunkSize);
                code[currentTab] += chunk;
                updateEditor();
                i += chunkSize;
                setTimeout(paste, 100);
                updatePreview();
            } else {
                isPasting = false;
                pasteButton.disabled = false;
                pasteButton.textContent = 'Simular pegado';
                updatePreview();
                resolve();
            }
        }

        paste();
    });
}

pasteButton.addEventListener('click', () => {
    if (!isPasting) {
        simulatePaste(templates[currentTab]);
    }
});

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentTab = button.dataset.tab;
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        updateEditor();
    });
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
            } else if (file.name.endsWith('.css')) {
                code.css = content;
            } else if (file.name.endsWith('.js')) {
                code.js = content;
            }
            updateEditor();
            updatePreview();
        };
        reader.readAsText(file);
    }
});

updateEditor();
updatePreview();