document.getElementById('colorButton').addEventListener('click', function() {
    const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);  // Gera uma cor aleatória
    document.body.style.backgroundColor = newColor;  // Muda a cor de fundo
});

// Código para adicionar evento no Google Calendar
document.getElementById('addEventButton').addEventListener('click', function() {
    const title = 'Meu Evento';
    const startTime = new Date('2023-10-01T10:00:00'); // data e hora de início
    const endTime = new Date('2023-10-01T11:00:00'); // data e hora de fim
    const description = 'Descrição do meu evento';
    const location = 'Localização do evento';

    const eventUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatDate(startTime)}/${formatDate(endTime)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

    window.open(eventUrl, '_blank');
});

function formatDate(date) {
    return date.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 15);
}
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        alert('Você clicou em um ícone de rede social!');
    });
});
// script.js

document.getElementById('animateButton').addEventListener('click', function() {
    this.classList.toggle('animate'); // Alterna a classe 'animate' ao clicar no botão
});
// Seleciona todas as fotos da galeria
const fotos = document.querySelectorAll('.foto');

// Adiciona um evento de clique a cada foto
fotos.forEach(foto => {
    foto.addEventListener('click', () => {
        // Verifica a classe atual da imagem e alterna a rotação
        if (foto.classList.contains('rotacionada')) {
            foto.classList.remove('rotacionada');
        } else {
            foto.classList.add('rotacionada');
        }
    });
});

// Adiciona a classe .rotacionada ao CSS para definir o efeito de rotação
const style = document.createElement('style');
style.innerHTML = `
  .rotacionada {
      transform: rotate(180deg);
  }
`;
document.head.appendChild(style);
document.querySelector('.custom-button').onclick = function() {
    document.getElementById('audioPlayer').pause();
    document.getElementById('audioPlayer').currentTime = 0;
}