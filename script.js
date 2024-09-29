const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const pasteButton = document.getElementById('pasteButton');
const tabButtons = document.querySelectorAll('.tab-button');

let currentTab = 'html';
let isPasting = false;

const templates = {
    html: '<h1>Bienvenido a Duality Domain</h1>\n<p>Este es un ejemplo de un editor en vivo para Instagram.</p>\n<button id="changeColor">Cambiar color</button>',
    css: 'body {\n  font-family: Arial, sans-serif;\n  color: #333;\n  padding: 20px;\n  transition: background-color 0.5s;\n}\n\nh1 {\n  color: #007bff;\n}\n\nbutton {\n  background-color: #007bff;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}',
    js: 'document.getElementById("changeColor").addEventListener("click", function() {\n  document.body.style.backgroundColor = getRandomColor();\n});\n\nfunction getRandomColor() {\n  var letters = "0123456789ABCDEF";\n  var color = "#";\n  for (var i = 0; i < 6; i++) {\n    color += letters[Math.floor(Math.random() * 16)];\n  }\n  return color;\n}'
};

let code = {
    html: '',
    css: '',
    js: ''
};

function updatePreview() {
    preview.classList.add('updating');
    const combinedCode = `
        <html>
            <head>
                <style>${code.css}</style>
            </head>
            <body>
                ${code.html}
                <script>${code.js}</script>
            </body>
        </html>
    `;
    setTimeout(() => {
        preview.srcdoc = combinedCode;
        setTimeout(() => {
            preview.classList.remove('updating');
        }, 100);
    }, 300);
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
                editor.scrollTop = editor.scrollHeight;
                i++;
                setTimeout(paste, delay);
                if (i % 10 === 0) {
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
        editor.value = code[currentTab];
    });
});

editor.addEventListener('input', () => {
    code[currentTab] = editor.value;
    updatePreview();
});

updatePreview();