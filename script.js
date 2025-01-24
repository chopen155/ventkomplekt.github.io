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
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post('https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT', data);
            
            if (response.status === 200) {
                alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
                form.reset();
            }
        } catch (error) {
            console.error('Ошибка отправки формы:', error);
            alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
        }
    });
});