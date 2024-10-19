
// Falso login
const loginForm = document.getElementById('login');
const welcomeMessage = document.getElementById('welcome-message');
const loginContainer = document.getElementById('login-form');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de autenticação
    if (username === 'admin' && password === '1234') {
        loginContainer.style.display = 'none';
        welcomeMessage.style.display = 'block';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

// Troca de abas
const tabLinks = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.content');

tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const tab = link.getAttribute('data-tab');

        contents.forEach(content => {
            content.classList.remove('active');
        });

        document.getElementById(tab).classList.add('active');

        // Carregar mapa na aba de Pontos de Descanso
        if (tab === 'rest-points') {
            initMap();
        }
    });
});

// Função para inicializar o mapa
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -23.55052, lng: -46.633308 }, // Localização de São Paulo como exemplo
        zoom: 12
    });

    // Marcador de exemplo
    new google.maps.Marker({
        position: { lat: -23.55052, lng: -46.633308 },
        map: map,
        title: 'Ponto de Descanso Exemplo'
    });
}
