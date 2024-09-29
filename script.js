const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const pasteButton = document.getElementById('pasteButton');
const tabButtons = document.querySelectorAll('.tab-button');

let currentTab = 'html';
let isPasting = false;

const templates = {
    html: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cafe Club Tv</title>
    <meta name="description" content="Descubre lo mejor en entretenimiento y servicios en línea con Cafe Club Tv.">
    <link rel="icon" href="images/Icon512x512.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#ffffff">
    <!-- Open Graph tags -->
    <meta property="og:title" content="Cafe Club Tv">
    <meta property="og:description" content="Descubre lo mejor en entretenimiento y servicios en línea con Cafe Club Tv.">
    <meta property="og:image" content="https://tudominio.com/og-image.jpg">
    <meta property="og:url" content="https://tudominio.com">
</head>
<body>
    <header>
    <div class="logo">
        <img src="images/logi.svg" alt="Logo de Cafe Club Tv">
    </div>
    <div class="install-container">
        <button id="install-button" class="install-button" style="display: none;">
            <i class="fas fa-download"></i> Instalar CafeClubTV App
        </button>
    </div>
</header>
    
    <main class="background-container">
        <div class="main-container">
            <section class="banner">
                <div class="carousel">
                    <div class="carousel-images">
                        <img src="image1.jpg" alt="Imagen destacada 1" loading="lazy">
                        <img src="image2 (1).jpg" alt="Imagen destacada 2" loading="lazy">
                        <img src="image3.jpg" alt="Imagen destacada 3" loading="lazy">
                        <img src="image4.jpg" alt="Imagen destacada 4" loading="lazy">
                        <img src="image5.jpg" alt="Imagen destacada 5" loading="lazy">
                        <img src="image6.jpg" alt="Imagen destacada 6" loading="lazy">
                    </div>
                    <button class="carousel-button prev" aria-label="Imagen anterior">&#10094;</button>
                    <button class="carousel-button next" aria-label="Imagen siguiente">&#10095;</button>
                </div>
            </section>

           <section id="playlists">
    <div class="playlist-slider" id="playlist-slider">
        <!-- Los videos se cargarán aquí dinámicamente -->
    </div>
    <div id="youtube-live-chat" style="display: none;">
        <!-- El chat de YouTube se cargará aquí si hay un video en vivo -->
    </div>
</section>

            <section id="shorts-section">
                <!-- Los Shorts se cargarán aquí dinámicamente -->
            </section>
         
            <section id="sponsors-section">
                <div class="sponsors-slider">
                    <div class="sponsor-item"><img src="images/logo1.png" alt="Logo del patrocinador 1" loading="lazy"></div>
                    <div class="sponsor-item"><img src="images/logo2.png" alt="Logo del patrocinador 2" loading="lazy"></div>
                    <div class="sponsor-item"><img src="images/logo3.png" alt="Logo del patrocinador 3" loading="lazy"></div>
                    <div class="sponsor-item"><img src="images/logo4.png" alt="Logo del patrocinador 4" loading="lazy"></div>
                </div>
            </section>
        </div>
    </main>

<!-- Sección de Contadores -->
<div class="counters-container">
    <div class="counter">
        <i class="fas fa-eye counter-icon"></i>
        <div class="counter-number" data-type="visitas">4870</div>
        <div class="counter-label">Visitas</div>
    </div>
    <div class="counter">
        <i class="fas fa-download counter-icon"></i>
        <div class="counter-number" data-type="descargas">110</div>
        <div class="counter-label">Descargas</div>
    </div>
    <div class="counter">
        <i class="fas fa-comments counter-icon"></i>
        <div class="counter-number" data-type="interacciones">2340</div>
        <div class="counter-label">Interacciones</div>
    </div>
</div>

    <footer>
    <div class="footer-content">
        <div class="footer-section about">
            <img src="images/logi.svg" alt="Logo de Cafe Club Tv" class="footer-logo">
            <p>Estamos comprometidos con ofrecerte la mejor experiencia en entretenimiento y servicios en línea.</p>
        </div>
        <div class="footer-section socials">
            <h3>Conéctate con Nosotros</h3>
            <div class="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener" class="social-icon" aria-label="Síguenos en Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener" class="social-icon" aria-label="Síguenos en Twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/cafeclubtv?igsh=MWoweXVncDAybWczOA==" target="_blank" rel="noopener" class="social-icon" aria-label="Síguenos en Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://youtube.com/@cafeclubtv?si=CU6eFZyXOhqATtbR" target="_blank" rel="noopener" class="social-icon" aria-label="Suscríbete a nuestro canal de YouTube"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
        <div class="footer-section map">
            <h3>Encuéntranos</h3>
            <div class="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.877027213511!2d-80.12933468429243!3d25.95361138391963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acefaf2880f9%3A0xd11aa38e4d4d73f0!2sMystic%20Pointe%20Dr%2C%20Aventura%2C%20FL%2033180%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1694503364387!5m2!1ses!2sar"
                    width="100%" 
                    height="300" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Ubicación de Cafe Club Tv">
                </iframe>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>Powered by <a href="https://dualitydomain.github.io/Dualitydomain/" target="_blank" rel="noopener">Duality Domain</a> | &copy; 2024 Todos los derechos reservados.</p>
    </div>
</footer>

    <div class="whatsapp-float">
        <a href="javascript:void(0);" id="whatsappBtn" class="whatsapp-button" aria-label="Chatea con CaféClubTV en WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>

    <div id="whatsappModal" class="whatsapp-modal">
        <div class="whatsapp-modal-content">
            <button class="whatsapp-close" aria-label="Cerrar modal">&times;</button>
            <h2>Chatea con CaféClubTV en WhatsApp</h2>
            <p>Escribe tu mensaje:</p>
            <textarea id="whatsappMessage" placeholder="Escribe tu mensaje aquí..." rows="4" style="width: 100%;"></textarea>
            <button id="sendMessageBtn" class="send-btn">Enviar mensaje</button>
        </div>
    </div>

    <nav class="bottom-nav">
        <a href="#playlists" class="nav-item"><i class="fas fa-home"></i><span>Inicio</span></a>
        <a href="#features" class="nav-item"><i class="fas fa-calendar-alt"></i><span>Eventos</span></a>
        <a href="#shorts-section" class="nav-item"><i class="fas fa-tags"></i><span>Ofertas</span></a>
        <a href="#sponsors-section" class="nav-item"><i class="fas fa-star"></i><span>Patrocinadores</span></a>
        <a href="#cta" class="nav-item"><i class="fas fa-envelope"></i><span>Contacto</span></a>
    </nav>

    <script src="script.js"></script>
    <script src="service-worker.js"></script>
    <script>
        // Código para la instalación de la PWA
        let deferredPrompt;
        const installButton = document.getElementById('install-button');

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            installButton.style.display = 'block';
        });

        installButton.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                }
                deferredPrompt = null;
            }
            installButton.style.display = 'none';
        });
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
        </head>
        <body>
            ${code.html}
            <style>
                ${code.css}
            </style>
            <script>
                ${code.js}
            <\/script>
        </body>
        </html>
    `;
    
    // Actualiza el contenido de la vista previa
    preview.srcdoc = combinedCode;

    // Espera a que se cargue el contenido y desplaza hacia abajo
    preview.onload = function() {
        preview.contentWindow.scrollTo(0, preview.contentWindow.document.body.scrollHeight);
    };
}

function simulatePaste(text, delay = 15) {
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