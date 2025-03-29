window.onload = function() {
    window.scrollTo(0, 0); // Garante que a página comece do topo
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = 'rgba(51, 51, 51, 0.3)'; // Começa com 70% de opacidade
    nav.style.transition = 'background-color 0.5s ease'; // Define uma transição suave de 0.5 segundos
};

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    
    let scrollY = window.scrollY; // Quanto o usuário rolou
    
    // Calcula a opacidade que varia de 0.7 a 1 conforme o scroll aumenta até 300px
    let opacity = Math.min(1, 0.3 + (scrollY / 300) * 0.3);

    nav.style.backgroundColor = `rgba(51, 51, 51, ${opacity})`;
});