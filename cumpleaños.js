// Agrega esta sección al final de tu archivo JavaScript

document.addEventListener("DOMContentLoaded", function () {
    // Crea confeti después de que se cargue la página
    createConfetti();
});

function createConfetti() {
    const confettiContainer = document.querySelector('.container');

    // Crea 20 elementos de confeti
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDelay = Math.random() + 's';

        // Agrega el confeti al contenedor
        confettiContainer.appendChild(confetti);
    }
}
