document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("header, section, div.container > section, .secao-titulo");

    // Mapeia os elementos que possuem ID correspondente aos links do menu
    const trackedSections = Array.from(sections).filter(section => section.id);

    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;

        // 1. Efeito visual no Menu ao rolar a página
        if (scrollPosition > 50) {
            nav.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
            nav.style.backgroundColor = "#144517"; // Tom mais escuro ao rolar
            nav.style.padding = "0.7rem 0"; // Reduz sutilmente a altura
        } else {
            nav.style.boxShadow = "none";
            nav.style.backgroundColor = "#1b5e20"; // Cor original
            nav.style.padding = "1rem 0";
        }

        // 2. ScrollSpy: Ativa o link do menu correspondente à seção atual na tela
        let currentSectionId = "";
        
        trackedSections.forEach((section) => {
            const sectionTop = section.offsetTop - 160; // Desconto da altura do menu fixo
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Remove e adiciona a classe .active no link correto
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
});
