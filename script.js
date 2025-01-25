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

    // Form submission handling
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formsubmit.co/ajax/el/segino', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
                form.reset();
            } else {
                throw new Error('Ошибка отправки формы');
            }
        } catch (error) {
            console.error('Ошибка отправки формы:', error);
            alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
        }
    });

    // Consultation Modal Functionality
    const consultationButton = document.querySelector('.cta-button');
    const consultationModal = document.getElementById('consultation-modal');
    const closeModalButton = document.querySelector('.close-modal');
    const consultationForm = document.getElementById('consultation-form');

    // Open modal
    consultationButton.addEventListener('click', (e) => {
        e.preventDefault();
        consultationModal.style.display = 'block';
    });

    // Close modal when clicking on close button
    closeModalButton.addEventListener('click', () => {
        consultationModal.style.display = 'none';
    });

    // Close modal when clicking outside of modal
    consultationModal.addEventListener('click', (e) => {
        if (e.target === consultationModal) {
            consultationModal.style.display = 'none';
        }
    });

    // Form submission for consultation
    consultationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(consultationForm);

        try {
            const response = await fetch('https://formsubmit.co/ajax/el/segino', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                alert('Заявка на консультацию успешно отправлена! Мы свяжемся с вами в ближайшее время.');
                consultationForm.reset();
                consultationModal.style.display = 'none';
            } else {
                throw new Error('Ошибка отправки формы');
            }
        } catch (error) {
            console.error('Ошибка отправки формы:', error);
            alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
        }
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