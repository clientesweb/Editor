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
    <title>Login - Vendedor</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="css/login-styles.css"> <!-- Asegúrate de usar el CSS actualizado -->
</head>
<body>
    <div class="login-container">
        <header>
            <img src="logo (9).png" alt="Logo" class="logo">
            <h1>Vendedor</h1>
        </header>
        <div class="login-form">
            <h2>Iniciar Sesión</h2>
            <label for="usuario"><i class="fa-solid fa-user"></i> Usuario:</label>
            <input type="text" id="usuario" placeholder="Usuario" required aria-label="Usuario">
            <label for="contrasena"><i class="fa-solid fa-lock"></i> Contraseña:</label>
            <input type="password" id="contrasena" placeholder="Contraseña" required aria-label="Contraseña">
            <button id="iniciar-sesion">Login</button>
            <p id="mensaje-error" class="error-message"></p>
            <p><a href="#">¿Olvidaste tu contraseña?</a></p>
        </div>
    </div>
    <footer>
        <p>Powered by Duality Domain</p>
    </footer>
    <script src="js/login.js"></script>
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
    preview.classList.add('updating');
    const combinedCode = code.html.replace('/* Aquí irá el CSS */', code.css).replace('// Aquí irá el JavaScript', code.js);
    setTimeout(() => {
        preview.srcdoc = combinedCode;
        setTimeout(() => {
            preview.classList.remove('updating');
        }, 100);
    }, 300);
}

function simulatePaste(text, delay = 20) {
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