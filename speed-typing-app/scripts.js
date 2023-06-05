const wordElem = document.getElementById('word');
const textElem = document.getElementById('text');
const scoreElem = document.getElementById('score');
const timeElem = document.getElementById('time');

const btnLevelElem = document.getElementById('level-btn');
const settingsElem = document.getElementById('settings');
const lvlForm = document.getElementById('level-form');
const lvlElem = document.getElementById('level');
const gameoverElem = document.getElementById('gameover-container');

const words = ["display", "practice", "english", "list", "dictionary", "game", "performance"];

let randomWord;
let score = 0;
// easy => 15, medium => 10, hard => 5
let time = 15;

const getRndWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}

const displayWord = () => {
    randomWord = getRndWord();
    wordElem.innerHTML = randomWord;
}
displayWord();