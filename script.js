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
    css: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

:root {
  --primary-gradient: linear-gradient(135deg, #8B0000, #D3D3D3, #FFFFFF); /* Dark red, soft gray, soft white */
  --secondary-gradient: linear-gradient(135deg, #8B0000, #D3D3D3); /* Dark red to soft gray */
  --accent-color: #8B0000; /* Dark red */
  --text-color: #333333; /* Darker text for better contrast */
  --text-color-dark: #1F2937; /* Kept as is */
  --button-gradient: linear-gradient(to right, #8B0000, #A52A2A, #D3D3D3); /* Dark red to soft gray */
  --background-gradient: linear-gradient(to bottom right, #FFFFFF, #D3D3D3); /* Soft white to soft gray */
}

/* Estilos generales */
body {
    background: var(--background-gradient);
    color: var(--text-color);
    font-family: 'Poppins', Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos para el encabezado */
header {
    background: rgba(211, 211, 211, 0.8); /* Soft gray with transparency */
    backdrop-filter: blur(10px);
    color: var(--text-color);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

header a {
    color: var(--text-color);
    text-decoration: none;
    margin: 0 15px;
    transition: color 0.3s;
}

header a:hover {
    color: var(--accent-color);
}

.logo img {
    max-height: 50px;
    transition: transform 0.3s ease;
}

.logo img:hover {
    transform: scale(1.05);
}

.install-container {
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.install-button {
    background: var(--button-gradient);
    color: #FFFFFF; /* Cambiado a blanco */
    border: none;
    border-radius: 25px;
    padding: 12px 25px;
    font-size: 1em;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.install-button:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.install-button i {
    margin-right: 8px;
}

/* ------- main -------- */
.container {
    background: rgba(211, 211, 211, 0.8); /* Soft gray with transparency */
    backdrop-filter: blur(15px);
    padding: 60px 2%;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.large-container {
    padding: 0 5%;
}

.banner {
    position: relative;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 15px;
}

.carousel {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
}

.carousel-images {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
}

.carousel-images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 100%;
    flex-shrink: 0;
    border-radius: 15px;
    filter: brightness(0.9);
    transition: transform 0.3s ease;
}

.carousel-images img:hover {
    transform: scale(1.05);
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    color: #333;
    font-size: 28px;
    cursor: pointer;
    padding: 12px;
    border-radius: 50%;
    z-index: 10;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.carousel-button:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
}

.carousel-button.prev {
    left: 15px;
}

.carousel-button.next {
    right: 15px;
}

/* Estilos para el footer */
footer {
    background: linear-gradient(135deg, rgba(139, 0, 0, 0.9), rgba(211, 211, 211, 0.9));
    backdrop-filter: blur(12px);
    color: var(--text-color);
    padding: 3rem 1.5rem;
    border-top: 5px solid var(--accent-color);
    position: relative;
    overflow: hidden;
}

footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 60%);
    z-index: 0;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2.5rem;
    position: relative;
    z-index: 1;
}

.footer-section {
    flex: 1;
    min-width: 220px;
    margin-bottom: 1.5rem;
}

.footer-logo {
    max-height: 60px;
    margin-bottom: 1.5rem;
    transition: transform 0.4s ease, filter 0.4s ease;
}

.footer-logo:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 10px var(--accent-color));
}

.social-icons {
    display: flex;
    gap: 1.2rem;
}

.social-icon {
    color: var(--text-color);
    font-size: 1.8rem;
    text-decoration: none;
    transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
    color: var(--accent-color);
    transform: scale(1.2);
}

.map-container {
    width: 100%;
    height: 250px;
    background-color: rgba(200, 200, 200, 0.15);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

.footer-bottom {
    background-color: rgba(0, 0, 0, 0.3);
    color: var(--text-color);
    text-align: center;
    padding: 1.2rem 0;
    font-size: 0.95rem;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    position: relative;
    z-index: 1;
}

.footer-bottom a {
    color: var(--accent-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-bottom a:hover {
    color: var(--text-hover-color);
    text-decoration: underline;
}

/* Animación sutil en hover de los íconos sociales */
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

.social-icon:hover {
    animation: pulse 0.6s infinite;
}

/* Sección de Videos, Playlists, y Shorts */
#videos, #playlists, #shorts-section {
    margin: 50px 0;
    padding: 0 20px;
}

h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: var(--text-color);
}

.playlist-slider {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    scroll-behavior: smooth;
}

.playlist-item {
    flex: 0 0 300px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
}

iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    object-fit: cover;
}

.playlist-slider::-webkit-scrollbar {
    display: none;
}

.playlist-slider {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Estilo para la sección de shorts */
#shorts-section {
    display: flex;
    overflow-x: auto;
    gap: 10px;
    padding: 10px 0;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}

.short-item {
    flex: 0 0 auto;
    width: 300px;
    height: 500px;
    margin-right: 10px;
    scroll-snap-align: start;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
}

.short-item iframe {
    width: 100%;
    height: 100%;
    border: none;
    object-fit: cover;
}

#shorts-section::-webkit-scrollbar {
    display: none;
}

#shorts-section {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Estilo para la sección de patrocinadores */
#sponsors-section {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 150px;
    background: radial-gradient(circle, var(--accent-color) 0%, #D3D3D3 60%, #FFFFFF 100%);
    padding: 10px 0;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.sponsors-slider {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    white-space: nowrap;
    scroll-behavior: smooth;
    height: 100%;
    align-items: center;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}

.sponsor-item {
    flex: 0 0 auto;
    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    scroll-snap-align: start;
    transition: transform 0.3s;
}

.sponsor-item:hover {
    transform: scale(1.05);
}

.sponsor-item img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

#sponsors-section::-webkit-scrollbar {
    display: none;
}

#sponsors-section {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Estilos para el botón de WhatsApp flotante */
.whatsapp-float {
    position: fixed;
    bottom: 70px;
    right: 20px;
    z-index: 1000;
    animation: pulse 2s infinite;
}

.whatsapp-button {
    background-color: #10B981;
    color: #fff;
    border-radius: 50%;
    padding: 15px;
    font-size: 24px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.whatsapp-button:hover {
    background-color: #059669;
    transform: scale(1.1);
}

/* Animación de pulsación del botón */
@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5);
    }
    70% {
        transform: scale(1.1);
        box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    }
}

/* Estilos para el modal de WhatsApp */
.whatsapp-modal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1001;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.whatsapp-modal.show {
    display: block;
    opacity: 1;
}

.whatsapp-modal-content {
    background: #fff;
    color: #333;
    margin: 10% auto;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
    position: relative;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    animation: modalFadeIn 0.5s ease;
}

@keyframes modalFadeIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.whatsapp-close {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
}

.whatsapp-close:hover {
    color: #ff4d4d;
}

.send-btn {
    background-color: #10B981;
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 15px;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.send-btn i {
    font-size: 20px;
}

.send-btn:hover {
    background-color: #059669;
}

/* Estilo para el texto dentro del modal */
.whatsapp-modal h2 {
    color: #10B981;
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.whatsapp-modal p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #555;
}

.whatsapp-modal textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 1rem;
    resize: none;
    outline: none;
    transition: border-color 0.3s ease;
}

.whatsapp-modal textarea:focus {
    border-color: #10B981;
}

.bottom-nav {
    background: rgba(211, 211, 211, 0.8);
    backdrop-filter: blur(10px);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1000;
    border-radius: 20px 20px 0 0;
}

.nav-item {
    text-align: center;
    color: var(--text-color);
    text-decoration: none;
    font-size: 12px;
    transition: color 0.3s, transform 0.3s;
    position: relative;
}

.nav-item i {
    font-size: 24px;
    display: block;
    margin-bottom: 5px;
    color: var(--text-color);
}

.nav-item:hover {
    color: var(--accent-color);
}

.nav-item::after {
    content: '';
    display: block;
    height: 3px;
    width: 100%;
    background-color: var(--accent-color);
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s;
}

.nav-item:hover::after {
    transform: scaleX(1);
}

/* Estilos para la sección de contadores */
.counters-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background: rgba(211, 211, 211, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    flex-wrap: wrap;
}

.counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 30px;
    margin: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.counter:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

.counter-icon {
    font-size: 50px;
    margin-bottom: 15px;
    color: var(--accent-color);
}

.counter-number {
    font-size: 36px;
    font-weight: bold;
    color: var(--text-color);
    margin-bottom: 5px;
}

/* Estilos para las etiquetas */
.counter-label {
    font-size: 14px;
    color: var(--text-color);
}

/* Media Queries para ajustar en pantallas más grandes */
@media (min-width: 600px) {
    .counter {
        width: 200px;
    }
}

@media (min-width: 900px) {
    .counters-container {
        padding: 40px;
    }
    
    .counter {
        width: 220px;
    }
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