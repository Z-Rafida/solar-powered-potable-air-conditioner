
document.addEventListener('DOMContentLoaded', function() {
   
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
   
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
       
        // Animate hamburger bars
        const bars = document.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'translateY(8px) rotate(45deg)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
   
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
           
            // Reset hamburger bars
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
   
    // Active navigation highlighting on scroll
    function highlightNavOnScroll() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-menu a');
       
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
           
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
    }
    highlightNavOnScroll();
   
    // Navbar appearance change on scroll
    function changeNavbarOnScroll() {
        const navbar = document.querySelector('.navbar');
       
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.8rem 0';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '1rem 0';
                navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    changeNavbarOnScroll();
   
   
    // Form Validation and Submission
    const inquiryForm = document.getElementById('inquiry-form');
   
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
           
            // Basic client-side validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const inquiryType = document.getElementById('inquiry-type').value;
           
            if (name.trim() === '' || email.trim() === '' || message.trim() === '' || inquiryType === '') {
                alert('Please fill out all required fields.');
                return;
            }
           
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
           
            // If validation passes, show success message
            // In a real application, this would send the form data to a server
            const formContainer = inquiryForm.parentElement;
            formContainer.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
            `;
        });
    }
   
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
           
            const targetId = this.getAttribute('href');
           
            // Skip for empty links
            if (targetId === '#') return;
           
            const targetElement = document.querySelector(targetId);
           
            if (targetElement) {
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
               
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
   
    // Image gallery hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
   
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.caption').style.transform = 'translateY(0)';
        });
       
        item.addEventListener('mouseleave', () => {
            item.querySelector('.caption').style.transform = 'translateY(100%)';
        });
    });
   
    // Add animation for product cards on scroll
    function animateOnScroll() {
        const productCards = document.querySelectorAll('.product-card');
       
        // Check if IntersectionObserver is supported
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
           
            productCards.forEach(card => {
                // Initial hidden state
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            productCards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }
    }
   
    if (document.querySelector('.products-grid')) {
        animateOnScroll();
    }
});

