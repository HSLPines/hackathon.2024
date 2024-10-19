
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

