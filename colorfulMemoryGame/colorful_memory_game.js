// ===============================
// STEP 3: Game Data Initialization
// ===============================

// Base colors (will be duplicated to create pairs)
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];

// Shuffle and prepare cards
let cards = shuffle(colors.concat(colors));

// Store selected cards temporarily
let selectedCards = [];

// Player score
let score = 0;

// Time remaining
let timeLeft = 30;

// Interval controller
let gameInterval;


// ===============================
// STEP 4: DOM Element Selection
// ===============================

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');


// ===============================
// STEP 6: Game Functions
// ===============================

// Generate cards dynamically
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}


// Shuffle function (Fisher-Yates Algorithm)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// Handle card click
function handleCardClick(event) {
    const card = event.target;

    // Ignore invalid clicks
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }

    // Reveal card
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;

    selectedCards.push(card);

    // Check match after selecting two cards
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}


// Check if two selected cards match
function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');

        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';

        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }

    selectedCards = [];
}


// Start Game
function startGame() {
    let timeLeft = 30;

    startbtn.disabled = true;

    score = 0;
    scoreElement.textContent = `Score: ${score}`;

    startGameTimer(timeLeft);

    cards = shuffle(colors.concat(colors));
    selectedCards = [];

    gameContainer.innerHTML = '';

    generateCards();

    gameContainer.addEventListener('click', handleCardClick);
}


// Timer Function
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;

    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}


// ===============================
// Event Listener
// ===============================

startbtn.addEventListener('click', startGame);

