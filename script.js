document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animação de entrada (Fade-in) para os cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        // Estado inicial oculto e um pouco para baixo
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        // Animação em cascata com base no index do elemento
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * (index + 1)); 
    });

    // 2. Interação para os links do menu (Feedback ao clicar)
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault(); // Evita que a página recarregue
            alert(`Você clicou no menu: ${link.textContent}. Esta página será construída em breve!`);
        });
    });
});