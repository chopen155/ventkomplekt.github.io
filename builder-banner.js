document.addEventListener('DOMContentLoaded', () => {
    const cartoonBuilderBanner = document.getElementById('cartoon-builder-banner');
    const builderCharacter = document.querySelector('.builder-character');
    const builderMessage = document.querySelector('.builder-message p');
    const builderSvg = document.querySelector('.builder-svg');
    
    // Talking animation
    const messages = [
        "Привет! Нужна консультация?",
        "Давай обсудим ваш проект!",
        "У меня есть классные предложения!",
        "Климат-контроль? Это ко мне!",
        "Готов помочь решить ваши задачи!"
    ];

    let currentMessageIndex = 0;

    function animateTalking() {
        const mouth = document.querySelector('.mouth');
        mouth.classList.toggle('talking');
    }

    function changeMessage() {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        builderMessage.textContent = messages[currentMessageIndex];
        
        // Animate talking
        animateTalking();
        setTimeout(() => {
            const mouth = document.querySelector('.mouth');
            mouth.classList.remove('talking');
        }, 1000);
    }

    // Wave and body movement animation
    function waveAndMove() {
        const leftArm = document.querySelector('.left-arm');
        const body = document.querySelector('.builder-body');
        
        // Subtle body sway
        body.classList.toggle('sway');
        
        // Natural arm wave
        leftArm.classList.toggle('wave');
    }

    // Animate character entrance
    setTimeout(() => {
        cartoonBuilderBanner.classList.add('show');
        
        // Start wave and body movement cycles
        waveAndMove();
        setInterval(waveAndMove, 3000);
        
        setInterval(changeMessage, 5000);
    }, 10000); // 10 seconds

    // Optional: Add close functionality
    cartoonBuilderBanner.addEventListener('click', (event) => {
        if (event.target.classList.contains('close-banner')) {
            cartoonBuilderBanner.classList.remove('show');
        }
    });
});