
let menuIcon = document.querySelector('#btn-menu');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {  
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    document.getElementById('nav-menu').classList.toggle('active')
};

function toggleDropdown(element) {
    const details = element.querySelector('.timeline-details');
    
    if (details.style.display === "none") {
        details.style.display = "block"; // Mostra os detalhes
        element.style.maxHeight = element.scrollHeight + "px"; // Expande a altura conforme o conteúdo
    } else {
        details.style.display = "none"; // Oculta os detalhes
        element.style.maxHeight = "50px"; // Recolhe o item de volta à altura inicial
    }
}

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

