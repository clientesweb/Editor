const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const pasteButton = document.getElementById('pasteButton');
const tabButtons = document.querySelectorAll('.tab-button');

let currentTab = 'html';
let isPasting = false;

const templates = {
    html: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Venus Films</title>
  <meta name="title" content="VenusFilmes" />
  <meta name="description" content="Venusfilmes distribuidor de peliculas." />
  <link rel="shortcut icon" href="./assets/images/tv movie.png" type="image/svg+xml" />
  <link rel="stylesheet" href="./assets/css/style.css" />
  <script src="./assets/js/global.js" defer></script>
  <script src="./assets/js/index.js" type="module"></script>
</head>

<body>
  <!-- Header -->
  <header class="header">
    <a href="./index.html" class="logo">
      <img src="./assets/images/VF_LOGOHORIZONTAL_WEBB (1).png" width="140" height="32" alt="Tvflix home" />
    </a>

    <div class="search-box" search-box>
      <div class="search-wrapper" search-wrapper>
        <input type="text" name="search" placeholder="Busca alguna película..." class="search-field"
          aria-label="search movies" autocomplete="off" search-field />

        <img src="./assets/images/search.png" width="24" height="24" alt="search" class="leading-icon" />
      </div>

      <button class="search-btn" search-toggler>
        <img src="./assets/images/close.png" width="24" height="24" alt="close search box" />
      </button>
    </div>

    <button class="search-btn" search-toggler menu-close>
      <img src="./assets/images/search.png" width="24" height="24" alt="open search box" />
    </button>

    <button class="menu-btn" menu-btn menu-toggler>
      <img src="./assets/images/menu.png" class="menu" width="24" height="24" alt="open menu" />
      <img src="./assets/images/menu-close.png" width="24" height="24" alt="close menu" class="close" />
    </button>
  </header>

  <main>
    <!-- Sidebar -->
    <nav class="sidebar" sidebar></nav>

    <div class="overlay" overlay menu-toggler></div>

    <article class="container" page-content></article>

  </main>

</body>

</html>`,
    css: `#content {
    text-align: center;
    margin-top: 50px;
}
button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
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
    // Añadir clase de carga para transición suave
    preview.classList.add('loading');

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

    // Actualiza el contenido de la vista previa
    preview.srcdoc = combinedCode;

    // Espera a que se cargue el contenido y luego aplica la transición suave
    preview.onload = function() {
        setTimeout(() => {
            preview.classList.remove('loading');  // Elimina la clase de carga después de la transición
        }, 300); // Tiempo opcional para simular la carga
    };
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