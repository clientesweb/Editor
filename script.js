const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const pasteButton = document.getElementById('pasteButton');
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

function updatePreview() {
    const combinedCode = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vista Previa</title>
            <style>${code.css}</style>
        </head>
        <body>
            ${code.html}
            <script>${code.js}</script>
        </body>
        </html>
    `;
    preview.srcdoc = combinedCode;  // Actualiza el contenido de la vista previa
}

function simulatePaste(text, delay = 25) {
    return new Promise((resolve) => {
        let i = 0;
        isPasting = true;
        pasteButton.disabled = true;
        pasteButton.textContent = 'Pegando...';

        function paste() {
            if (i < text.length) {
                code[currentTab] += text[i];
                editor.value = code[currentTab];  // Actualiza el valor del editor
                editor.scrollTop = editor.scrollHeight;  // Mantiene el scroll al final
                i++;
                setTimeout(paste, delay);
                if (i % 10 === 0) {
                    updatePreview();  // Actualiza la vista previa cada 10 caracteres
                }
            } else {
                isPasting = false;
                pasteButton.disabled = false;
                pasteButton.textContent = 'Simular pegado';
                updatePreview();  // Actualiza la vista previa al final
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
        editor.value = code[currentTab];  // Actualiza el editor al cambiar de pestaña
        updatePreview();  // Actualiza la vista previa al cambiar de pestaña
    });
});

editor.addEventListener('input', () => {
    code[currentTab] = editor.value;  // Actualiza el código según lo que se escribe
    updatePreview();  // Actualiza la vista previa
});