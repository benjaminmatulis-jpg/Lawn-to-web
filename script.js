
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
// Mobile menu toggle functionality
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Get form data
        const formData = {
            name: this.name.value,
            email: this.email.value,
            service: this.service.value,
            message: this.message.value
        };
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
// Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4';
        successMessage.innerHTML = '<strong>Thank you!</strong> Your message has been sent. I\'ll get back to you soon.';
        this.parentNode.insertBefore(successMessage, this);
        
        // Reset form
        this.reset();
    });
}

// Scroll reveal animations
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('show');
        }
    }
}

// Initialize reveal on page load
document.addEventListener('DOMContentLoaded', function() {
    revealOnScroll();
});

// Feather icons replacement
feather.replace();