// Genera un número aleatorio entre 1 y 90
function getRandomNumber() {
    return Math.floor(Math.random() * 90) + 1;
}

// Crea un cartón de bingo con 15 números aleatorios
function createBingoCard() {
    const card = [];
    while (card.length < 15) {
        const num = getRandomNumber();
        if (!card.includes(num)) {
            card.push(num);
        }
    }
    return card;
}

// Crea los cartones y el bombo
function setupGame() {
    const bingoBoard = document.querySelector('.bingo-board');
    for (let i = 0; i < 5; i++) {
        const card = createBingoCard();
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('bingo-card');
        card.forEach(num => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = num;
            cardContainer.appendChild(cell);
        });
        bingoBoard.appendChild(cardContainer);
    }
}

// Inicializa el juego al cargar la página
window.addEventListener('load', setupGame);
