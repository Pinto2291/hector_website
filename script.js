const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });
}

navSlide();

// Language Toggle
const langBtn = document.getElementById('lang-btn');
const langElements = document.querySelectorAll('[data-lang]');
const langPlaceholders = document.querySelectorAll('[data-lang-placeholder-en]');

let currentLang = 'en';

langBtn.addEventListener('click', () => {
    if (currentLang === 'en') {
        currentLang = 'es';
        langBtn.textContent = 'EN';
    } else {
        currentLang = 'en';
        langBtn.textContent = 'ES';
    }

    langElements.forEach(el => {
        if (el.dataset.lang === currentLang) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });

    langPlaceholders.forEach(el => {
        el.placeholder = el.dataset[`langPlaceholder${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`];
    });
});


// Project Carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const contactReason = document.getElementById('contactReason').value;
    const message = document.getElementById('message').value;
    const whatsappNumber = '+34604932950';

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=` +
        `Name: ${encodeURIComponent(fullName)}%0A` +
        `Reason for Contact: ${encodeURIComponent(contactReason)}%0A` +
        `Message: ${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
});