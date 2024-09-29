const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const pasteButton = document.getElementById('pasteButton');
const tabButtons = document.querySelectorAll('.tab-button');

let currentTab = 'html';
let isPasting = false;

// Plantillas de ejemplo para cada tipo de código
const templates = {
    html: `<div>
                <h1>Hola, Mundo!</h1>
                <p>Este es un ejemplo de contenido HTML.</p>
            </div>`,
    css: `body {
                background-color: #f0f0f0;
                font-family: Arial, sans-serif;
            }
            h1 {
                color: #333;
            }`,
    js: `console.log("Hola, Mundo! Este es un mensaje desde JavaScript.");`
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
        <style>${code.css}</style>
        <title>Vista Previa</title>
    </head>
    <body>
        ${code.html}
        <script>${code.js}</script>
    </body>
    </html>`;
    
    preview.srcdoc = combinedCode;
}

function simulatePaste(text, delay = 50) {
    return new Promise((resolve) => {
        let i = 0;
        isPasting = true;
        pasteButton.disabled = true;
        pasteButton.textContent = 'Pegando...';

        function paste() {
            if (i < text.length) {
                code[currentTab] += text[i];
                editor.value = code[currentTab];
                editor.scrollTop = editor.scrollHeight; // Desplazamiento automático
                i++;
                setTimeout(paste, delay);
                if (i % 10 === 0) { // Actualiza la vista previa cada 10 caracteres
                    updatePreview();
                }
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
        editor.value = code[currentTab]; // Carga el código correspondiente al tab seleccionado
    });
});

editor.addEventListener('input', () => {
    code[currentTab] = editor.value;
    updatePreview(); // Actualiza la vista previa al escribir
});

// Cargar la plantilla HTML por defecto al iniciar
code.html = templates.html;
code.css = templates.css;
code.js = templates.js;
editor.value = code[currentTab]; // Cargar el valor del editor
updatePreview(); // Actualiza la vista previa al cargar la página