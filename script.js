const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const pasteButton = document.getElementById('pasteButton');
const tabButtons = document.querySelectorAll('.tab-button');

let currentTab = 'html';
let isPasting = false;

const templates = {
    html: '<!DOCTYPE html>
<html>

<head>
  <!-- Basic -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!-- Mobile Metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <!-- Site Metas -->
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />

  <title>Victor Claps</title>

  <!-- slider stylesheet -->
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />

  <!-- bootstrap core css -->
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  <!-- fonts awesome style -->
  <link href="css/font-awesome.min.css" rel="stylesheet" />
  <!-- fonts style -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet" />
  <!-- Custom styles for this template -->
  <link href="css/style.css" rel="stylesheet" />
  <!-- responsive style -->
  <link href="css/responsive.css" rel="stylesheet" />
</head>

<body>
  <div class="hero_area">
    <!-- header section strats -->
    <header class="header_section">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <div class="custom_menu-btn">
          <button onclick="openNav()">
            <span class="s-1"> </span>
            <span class="s-2"> </span>
            <span class="s-3"> </span>
          </button>
        </div>
        <div id="myNav" class="overlay">
          <div class="menu_btn-style ">
            <button onclick="closeNav()">
              <span class="s-1"> </span>
              <span class="s-2"> </span>
              <span class="s-3"> </span>
            </button>
          </div>
          <div class="overlay-content">
            <a class="active" href="index.html">
              Home
            </a>
            <a class="" href="about.html">
              About
            </a>
            <a class="" href="portfolio.html">
              Portfolio
            </a>
            <a class="" href="team.html">
              Event
            </a>
             <a class="" href="team.html">
              Service
          </div>
        </div>
        <a class="navbar-brand" href="index.html">
          <span>
            Victor Claps
          </span>
        </a>
        <a href="" class="call_btn">
          Call Us Now
        </a>
      </nav>
    </header>
    <!-- end header section -->
    <!-- slider section -->
    <section class="slider_section position-relative">
      <div class="container-fluid">
        <div class="row">
          <div class="detail-box col-lg-4 col-md-5">
            <div id="" class="carousel slide slider_text_carousel" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="detail_content">
                    <div>
                      <h1>
                        Victor Claps <br>
                        Studio
                      </h1>
                      <a href="" class="">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="detail_content">
                    <div>
                      <h1>
                        Victor Claps <br>
                        Studio
                      </h1>
                      <a href="" class="">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="detail_content">
                    <div>
                      <h1>
                        Photography <br>
                        Studio
                      </h1>
                      <a href="" class="">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="img-box col-lg-8 col-md-7">
            <div id="" class="carousel slide slider_image_carousel carousel-fade" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="images/slider-img.jpeg" alt="" />
                </div>
                <div class="carousel-item">
                  <img src="images/slider-img2.jpeg" alt="" />
                </div>
                <div class="carousel-item">
                  <img src="images/slider-img3.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div class="carousel_btn-box">
              <a class="slider_btn_prev" href="" role="button" data-slide="prev">
                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a class="slider_btn_next" href="" role="button" data-slide="next">
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- end slider section -->
  </div>

  <!-- about section -->

  <section class="about_section ">
    <div class="container-fluid">
      <div class="row">
        <div class="img-box col-lg-8 col-md-7">
          <img src="images/about-img.jpeg" alt="" />
        </div>
        <div class="detail-box detail_box_common col-lg-4 col-md-5 text_center">
          <div class="heading_container heading_center">
            <h2>
              About Us
            </h2>
          </div>
          <p> I'm a passionate automotive photographer based in Atlanta, where I bring cars to life through my lens. My work is all about capturing the essence, power, and design of each vehicle, whether it is a sleek sports car, a custom build, or a vintage classic. With a deep love for both cars and photography, I combine technical precision with a creative eye to deliver striking visuals that showcase every detail.
          </p>
          <a href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- end about section -->


  <!-- portfolio section -->
<section class="portfolio_section layout_padding">
  <div class="container">
    <div class="heading_container heading_center">
      <h2>Portfolio</h2>
    </div>
    <div class="portfolio_container">
      <div class="portfolio_item">
        <img src="images/p1.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p2.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p3.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p4.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p5.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p6.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p7.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p8.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p9.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p10.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p11.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p12.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p13.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p14.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p15.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p16.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p17.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p18.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p19.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="portfolio_item">
        <img src="images/p20.jpeg" alt="">
        <div class="btn-box">
          <a href="#" class="btn-1">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="text_center">
      <a href="#" class="read_btn">See More</a>
    </div>
  </div>
</section>
<!-- end portfolio section -->


  

  <!-- contact section -->

  <section class="contact_section ">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 map_container">
          <div class="map">
            <div id="googleMap"></div>
          </div>
        </div>
        <div class="col-md-4 detail-box detail_box_common">
          <div>
            <div class="heading_container">
              <h2>
                Get In Touch
              </h2>
            </div>
            <div class="info_contact">
              <div class="contact_link_box">
                <a href="">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>
                    Location
                  </span>
                </a>
                <a href="">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>
                    Call +01 1234567890
                  </span>
                </a>
                <a href="">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>
                    demo@gmail.com
                  </span>
                </a>
              </div>
              <div class="info_social">
                <a href="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end contact section -->

  <!-- footer section -->
  <footer class="footer_section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-6">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved. Design
            by
            <a href="https://dualitydomain.github.io/Dualitydomain/index.html">Duality Domain</a>
          </p>
        </div>
        <div class="col-xl-6">
          <div class="link_box">
            <a class="" href="index.html">
              Home
            </a>
            <a class="" href="about.html">
              About
            </a>
            <a class="" href="portfolio.html">
              Portfolio
            </a>
            <a class="" href="team.html">
              Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- footer section -->

  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/bootstrap.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
  </script>
  <script src="js/custom.js"></script>
  <!-- Google Map -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap">
  </script>
  <!-- End Google Map -->

</body>

</html>
',
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