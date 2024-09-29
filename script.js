const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const pasteButton = document.getElementById('pasteButton');
const tabButtons = document.querySelectorAll('.tab-button');

let currentTab = 'html';
let isPasting = false;

// Rutas de los archivos externos
const templatePaths = {
    html: 'template.html',
    css: 'template.css',
    js: 'template.js'
};

let code = {
    html: '',
    css: '',
    js: ''
};

// Función para cargar el contenido de los archivos externos
async function loadTemplate(tab) {
    try {
        const response = await fetch(templatePaths[tab]);
        const text = await response.text();
        return text;
    } catch (error) {
        console.error(`Error cargando el archivo ${tab}:`, error);
        return ''; // Retorna un string vacío si hay un error
    }
}

function updatePreview() {
    const combinedCode = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                ${code.css}
            </style>
        </head>
        <body>
            ${code.html}
            <script>
                ${code.js}
            <\/script>
        </body>
        </html>
    `;

    // Actualizar la vista previa sin titileo
    const currentPreview = preview.srcdoc;
    if (currentPreview !== combinedCode) {
        preview.srcdoc = combinedCode;  // Solo actualiza si el contenido ha cambiado
    }
}

// Función para simular el pegado de código de archivos externos
async function simulatePasteFromFile(tab, delay = 5) {
    const templateContent = await loadTemplate(tab); // Carga el contenido del archivo externo
    return simulatePaste(templateContent, delay);
}

function simulatePaste(text, delay = 5) {
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
        simulatePasteFromFile(currentTab);  // Usa la función que carga desde archivos externos
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