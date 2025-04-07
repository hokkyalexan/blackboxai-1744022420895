// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const navMenu = document.querySelector('nav');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('flex');
            navMenu.classList.toggle('flex-col');
            navMenu.classList.toggle('absolute');
            navMenu.classList.toggle('top-16');
            navMenu.classList.toggle('left-0');
            navMenu.classList.toggle('right-0');
            navMenu.classList.toggle('bg-white');
            navMenu.classList.toggle('p-4');
            navMenu.classList.toggle('shadow-lg');
        });
    }

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate email format
            const email = document.getElementById('email').value;
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Validate phone number if provided
            const phone = document.getElementById('phone').value;
            if (phone && !/^[\d\s\+\-\(\)]{10,}$/.test(phone)) {
                alert('Please enter a valid phone number');
                return;
            }

            // If validation passes, show success message
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});