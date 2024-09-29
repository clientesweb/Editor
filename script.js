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
    <title>Sassenach - Tienda Online - Productos Naturales - Cursos - Talleres</title>
    <meta name="description" content="Sassenach - Tu tienda online de productos naturales, cosmética, cursos y talleres.">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://code.jquery.com https://cdnjs.cloudflare.com; style-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;">
</head>
<body>
    <header>
        <div class="top-bar">
            <div class="container">
                <p>Sección para poner ofertas | También sobre envíos.</p>
            </div>
        </div>
        <div class="main-header">
            <div class="container">
                <div class="logo">
                    <a href="/">
                        <picture>
                            <source srcset="img/sassenach.webp" type="image/webp">
                            <source srcset="img/sassenach.png" type="image/png"> 
                            <img src="img/sassenach.png" alt="Sassenach Logo">
                        </picture>
                    </a>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li><a href="#">Cosmética Natural</a></li>
                        <li><a href="#">Productos Naturales</a></li>
                        <li><a href="#">Tintas madre</a></li>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Cocina</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <a href="#" class="search-icon" aria-label="Buscar"><i class="fas fa-search"></i></a>
                    <a href="#" class="account-icon" aria-label="Cuenta"><i class="fas fa-user"></i></a>
                    <a href="#" class="cart-icon" aria-label="Carrito"><i class="fas fa-shopping-cart"></i></a>
                    <button class="mobile-menu-toggle" aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main>
        <section class="hero-slider" aria-label="Featured collections">
            <div class="slides">
                <div class="slide">
                    <img src="img/sassenach.jpg" alt="Productos Naturales" loading="lazy">
                    <div class="slide-content">
                        <h2>Productos Naturales</h2>
                        <p>Descubre nuestra colección de productos naturales</p>
                        <a href="#" class="btn">Comprar Ahora</a>
                    </div>
                </div>
                <div class="slide">
                    <img src="img/sassenach1.jpg" alt="Cosmética Natural" loading="lazy">
                    <div class="slide-content">
                        <h2>Cosmética Natural</h2>
                        <p>Encuentra los mejores productos para tu piel</p>
                        <a href="#" class="btn">Explorar Colección</a>
                    </div>
                </div>
                <div class="slide">
                    <img src="img/sassenach2.jpg" alt="Tintas Madre" loading="lazy">
                    <div class="slide-content">
                        <h2>Tintas Madre</h2>
                        <p>Calidad y belleza garantizadas</p>
                        <a href="#" class="btn">Ver Productos</a>
                    </div>
                </div>
            </div>
            <button class="slider-nav prev" aria-label="Previous slide">&#10094;</button>
            <button class="slider-nav next" aria-label="Next slide">&#10095;</button>
        </section>

        <section class="featured-categories">
            <div class="container">
                <h2>Categorías Destacadas</h2>
                <div class="category-grid">
                    <div class="category-item">
                        <img src="img/productos naturales.jpg" alt="Productos Naturales" loading="lazy">
                        <h3>Productos Naturales</h3>
                        <a href="#" class="btn">Comprar Ahora</a>
                    </div>
                    <div class="category-item">
                        <img src="img/comestica natural.jpg" alt="Cosmética Natural" loading="lazy">
                        <h3>Cosmética Natural</h3>
                        <a href="#" class="btn">Comprar Ahora</a>
                    </div>
                    <div class="category-item">
                        <img src="img/tintas madre.jpg" alt="Tintas Madre" loading="lazy">
                        <h3>Tintas Madre</h3>
                        <a href="#" class="btn">Comprar Ahora</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="featured-products">
            <div class="container">
                <h2>Productos Destacados</h2>
                <div class="product-grid">
                    <article class="product-item">
                        <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/products/JU_Product_1_720x.jpg" alt="Producto Natural 1" loading="lazy">
                        <h3>Producto Natural 1</h3>
                        <p class="price">$19.99</p>
                        <a href="#" class="btn">Añadir al Carrito</a>
                    </article>
                    <article class="product-item">
                        <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/products/JU_Product_2_720x.jpg" alt="Producto Natural 2" loading="lazy">
                        <h3>Producto Natural 2</h3>
                        <p class="price">$24.99</p>
                        <a href="#" class="btn">Añadir al Carrito</a>
                    </article>
                    <article class="product-item">
                        <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/products/JU_Product_3_720x.jpg" alt="Producto Natural 3" loading="lazy">
                        <h3>Producto Natural 3</h3>
                        <p class="price">$29.99</p>
                        <a href="#" class="btn">Añadir al Carrito</a>
                    </article>
                    <article class="product-item">
                        <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/products/JU_Product_4_720x.jpg" alt="Producto Natural 4" loading="lazy">
                        <h3>Producto Natural 4</h3>
                        <p class="price">$34.99</p>
                        <a href="#" class="btn">Añadir al Carrito</a>
                    </article>
                </div>
            </div>
        </section>

        <section class="about-us">
            <div class="container">
                <h2>Sobre Sassenach</h2>
                <p>Sassenach es tu destino para productos naturales de alta calidad. Ofrecemos una amplia selección de productos naturales, cosméticos y tintas madre para todas tus necesidades.</p>
                <a href="#" class="btn">Conoce Más</a>
            </div>
        </section>

        <section class="newsletter">
            <div class="container">
                <h2>Suscríbete a Nuestro Boletín</h2>
                <p>Recibe las últimas noticias y ofertas exclusivas</p>
                <form id="newsletter-form">
                    <input type="email" placeholder="Tu dirección de email" required>
                    <button type="submit" class="btn">Suscribirse</button>
                </form>
                <div id="newsletter-message" class="hidden"></div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h3>Atención al Cliente</h3>
                    <ul>
                        <li><a href="#">Contáctanos</a></li>
                        <li><a href="#">Envíos y Devoluciones</a></li>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Sobre Nosotros</h3>
                    <ul>
                        <li><a href="#">Nuestra Historia</a></li>
                        <li><a href="#">Localizador de Tiendas</a></li>
                        <li><a href="#">Carreras</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Políticas</h3>
                    <ul>
                        <li><a href="#">Términos de Servicio</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                        <li><a href="#">Política de Devoluciones</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Síguenos</h3>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Sassenach. Todos los derechos reservados.</p>
                <img src="img/formas-pago-removebg-preview.png" alt="Métodos de pago aceptados">
                <p>Powered by <a href="https://dualitydomain.com" target="_blank">Duality Domain</a></p>
            </div>
        </div>
    </footer>

    <a href="https://wa.me/1234567890" class="whatsapp-float" target="_blank">
        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
    </a>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
</body>
</html>`,
    css: `/* Estilos generales */
:root {
    --primary-color: #4a4a4a;
    --secondary-color: #f9f9f9;
    --accent-color: #e67e22;
    --text-color: #333;
    --light-text-color: #fff;
    --border-color: #ddd;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Lato', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--secondary-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* Header */
.top-bar {
    background-color: var(--primary-color);
    color: var(--light-text-color);
    padding: 10px 0;
    text-align: center;
    font-size: 0.9rem;
}

.main-header {
    background-color: var(--light-text-color);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.main-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
}

.logo img {
    max-width: 150px;
    height: auto;
}

.main-nav ul {
    display: flex;
    list-style-type: none;
}

.main-nav li {
    margin-left: 20px;
}

.main-nav a {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 600;
    transition: var(--transition);
}

.main-nav a:hover {
    color: var(--accent-color);
}

.header-actions a {
    color: var(--primary-color);
    margin-left: 15px;
    font-size: 1.2rem;
    transition: var(--transition);
}

.header-actions a:hover {
    color: var(--accent-color);
}

.mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

.mobile-menu-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--primary-color);
    margin: 5px 0;
    transition: var(--transition);
}

/* Hero Slider */
.hero-slider {
    position: relative;
    overflow: hidden;
    height: 60vh;
}

.slides {
    display: flex;
    transition: transform 0.5s ease;
    height: 100%;
}

.slide {
    flex: 0 0 100%;
    position: relative;
    height: 100%;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slide-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: var(--light-text-color);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 5px;
}

.slide-content h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.slide-content p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: var(--light-text-color);
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    transition: var(--transition);
}

.slider-nav:hover {
    background: rgba(0, 0, 0, 0.8);
}

.slider-nav.prev {
    left: 10px;
}

.slider-nav.next {
    right: 10px;
}

/* Featured Categories */
.featured-categories {
    padding: 50px 0;
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.category-item {
    text-align: center;
    transition: var(--transition);
}

.category-item:hover {
    transform: translateY(-5px);
}

.category-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
}

.category-item h3 {
    margin-bottom: 10px;
}

/* Featured Products */
.featured-products {
    background-color: var(--secondary-color);
    padding: 50px 0;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
}

.product-item {
    background-color: var(--light-text-color);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: var(--transition);
}

.product-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.product-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.product-item h3 {
    padding: 15px;
    font-size: 1.1rem;
}

.product-item .price {
    padding: 0 15px 15px;
    font-weight: bold;
    color: var(--accent-color);
}

/* About Us */
.about-us {
    padding: 50px 0;
    background-color: var(--primary-color);
    color: var(--light-text-color);
    text-align: center;
}

.about-us h2 {
    margin-bottom: 20px;
}

.about-us p {
    max-width: 800px;
    margin: 0 auto 30px;
}

/* Newsletter */
.newsletter {
    background-color: var(--secondary-color);
    padding: 50px 0;
    text-align: center;
}

.newsletter h2 {
    margin-bottom: 20px;
}

.newsletter p {
    margin-bottom: 30px;
}

#newsletter-form {
    display: flex;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
}

#newsletter-form input[type="email"] {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 5px 0 0 5px;
}

#newsletter-form button {
    padding: 10px 20px;
    background-color: var(--accent-color);
    color: var(--light-text-color);
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: var(--transition);
}

#newsletter-form button:hover {
    background-color: darken(var(--accent-color), 10%);
}

/* Footer */
footer {
    background-color: var(--primary-color);
    color: var(--light-text-color);
    padding: 50px 0 20px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
}

.footer-column h3 {
    margin-bottom: 20px;
    font-size: 1.2rem;
}

.footer-column ul {
    list-style-type: none;
}

.footer-column ul li {
    margin-bottom: 10px;
}

.footer-column ul li a {
    color: var(--light-text-color);
    text-decoration: none;
    transition: var(--transition);
}

.footer-column ul li a:hover {
    color: var(--accent-color);
}

.social-links a {
    color: var(--light-text-color);
    font-size: 1.5rem;
    margin-right: 15px;
    transition: var(--transition);
}

.social-links a:hover {
    color: var(--accent-color);
}

.footer-bottom {
    margin-top: 30px;
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
}

.footer-bottom img {
    max-width: 200px;
    margin: 10px 0;
}

/* WhatsApp Float */
.whatsapp-float {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    transition: var(--transition);
}

.whatsapp-float:hover {
    transform: scale(1.1);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--accent-color);
    color: var(--light-text-color);
    text-decoration: none;
    border-radius: 5px;
    transition: var(--transition);
}

.btn:hover {
    background-color: darken(var(--accent-color), 10%);
}

/* Responsive Design */
@media (max-width: 768px) {
    .main-nav {
        display: none;
    }

    .main-nav.active {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--light-text-color);
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .main-nav ul {
        flex-direction: column;
    }

    .main-nav li {
        margin: 0;
        text-align: center;
    }

    .main-nav a {
        display: block;
        padding: 10px;
    }

    .mobile-menu-toggle {
        display: block;
    }

    .hero-slider {
        height: 40vh;
    }

    .slide-content h2 {
        font-size: 1.8rem;
    }

    .slide-content p {
        font-size: 1rem;
    }

    #newsletter-form {
        flex-direction: column;
    }

    #newsletter-form input[type="email"],
    #newsletter-form button {
        width: 100%;
        border-radius: 5px;
        margin-bottom: 10px;
    }
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    animation: fadeIn 0.5s ease-in;
}

@keyframes slideInFromBottom {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.slide-in {
    animation: slideInFromBottom 0.5s ease-out;
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
