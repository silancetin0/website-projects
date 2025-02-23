const navToggleButton = document.querySelector('#menu-toggle');
const navLinksContainer = document.querySelector('nav ul');

navToggleButton.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

const contentSections = document.querySelectorAll('section');

const revealContentSection = (section) => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight) {
        section.classList.add('visible');
    }
};

let scrollTimeoutId;
window.addEventListener('scroll', () => {
    if (scrollTimeoutId) {
        cancelAnimationFrame(scrollTimeoutId);
    }
    scrollTimeoutId = requestAnimationFrame(() => {
        contentSections.forEach(revealContentSection);
    });
});

const galleryImages = document.querySelectorAll('.gallery-container img');
let currentSlideIndex = 0;

const displaySlide = (index) => {
    galleryImages.forEach((image, i) => {
        image.style.display = (i === index) ? 'block' : 'none';
    });
};

setInterval(() => {
    currentSlideIndex++;
    if (currentSlideIndex >= galleryImages.length) {
        currentSlideIndex = 0;
    }
    displaySlide(currentSlideIndex);
}, 3000);

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = document.querySelector('#name').value;
    const userEmail = document.querySelector('#email').value;
    const userMessage = document.querySelector('#message').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        alert('E-posta adresiniz geçerli değil. Lütfen kontrol edin!');
        return;
    }

    if (userName && userEmail && userMessage) {
        alert(`Başarıyla gönderildi! 😊\nAd: ${userName}\nE-posta: ${userEmail}\nMesaj: ${userMessage}`);
        contactForm.reset();
    } else {
        alert('Eksik alan var. Lütfen tüm bilgilerinizi kontrol edin ve tekrar deneyin!');
    }
});