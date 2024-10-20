let menuIcon = document.querySelector('#btn-menu');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');

// Função para ativar o link correspondente à página atual
function activateNavLink() {
    // Obtém o caminho da URL e isola o nome do arquivo da página atual
    let currentPage = window.location.pathname.split("/").pop();

    // Se não houver um nome de arquivo, define como 'index.html'
    if (currentPage === '') {
        currentPage = 'index.html';
    }

    // Percorre todos os links do menu de navegação
    navLinks.forEach(link => {
        let href = link.getAttribute('href');

        // Remove a classe 'active' de todos os links
        link.classList.remove('active');

        // Verifica se o link atual corresponde ao arquivo aberto
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// Chama a função ao carregar a página
window.onload = activateNavLink;

// Função para abrir/fechar o menu de navegação ao clicar no ícone
menuIcon.onclick = () => {
    document.getElementById('nav-menu').classList.toggle('active');
};

const nextBtn = document.querySelector('.carousel-control-next');
const prevBtn = document.querySelector('.carousel-control-prev');
const inner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const itemsPerView = 3; // Exibimos 3 itens de cada vez
const totalItems = items.length;

// Função para atualizar o carrossel
function updateCarousel() {
    const itemWidth = items[0].getBoundingClientRect().width;
    inner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Botão "Próximo"
nextBtn.addEventListener('click', function() {
    if (currentIndex + itemsPerView < totalItems) {
        currentIndex += 1;
    } else {
        currentIndex = 0; // Volta ao início quando chega ao fim
    }
    updateCarousel();
});

// Botão "Anterior"
prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex -= 1;
    } else {
        currentIndex = totalItems - itemsPerView; // Vai para o final se estiver no início
    }
    updateCarousel();
});

