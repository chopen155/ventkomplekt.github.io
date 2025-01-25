document.addEventListener('DOMContentLoaded', () => {
    const cartoonBuilderBanner = document.getElementById('cartoon-builder-banner');

    setTimeout(() => {
        cartoonBuilderBanner.classList.add('show');
    }, 10000); // 10 seconds

    // Optional: Add close functionality
    cartoonBuilderBanner.addEventListener('click', (event) => {
        if (event.target.classList.contains('close-banner')) {
            cartoonBuilderBanner.classList.remove('show');
        }
    });
});