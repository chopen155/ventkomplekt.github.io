document.addEventListener('DOMContentLoaded', () => {
    // Particle.js configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, out_mode: 'out' }
        }
    });

    const services = document.querySelectorAll('.service');
    
    services.forEach(service => {
        service.addEventListener('mouseenter', () => {
            service.style.transform = 'scale(1.05)';
            service.style.transition = 'transform 0.3s ease';
        });
        
        service.addEventListener('mouseleave', () => {
            service.style.transform = 'scale(1)';
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});