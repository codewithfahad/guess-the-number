'use strict';
const messageLabel = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const highScoreLabel = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const guess = document.querySelector('.guess');
const numLabel = document.querySelector('.number');

let score = 20;
let highscore = 0;

let randomNum = Math.trunc(Math.random() * 20) + 1;
btnCheck.addEventListener('click', function () {
  let userGuess = Number(guess.value);
  if (!userGuess) {
    messageLabel.textContent = '⛔ No Number';
  } else if (userGuess === randomNum) {
    messageLabel.textContent = '🎉 Correct Number';
    document.body.style.backgroundColor = '#60b347';
    numLabel.style.width = '30rem';
    numLabel.textContent = userGuess;
    userGuess = '';

    if (score > highscore) {
      highscore = score;
      highScoreLabel.textContent = highscore;
    }
  } else if (userGuess !== randomNum) {
    if (score > 1) {
      decreaseScore();
      messageLabel.textContent =
        userGuess > randomNum ? '📈 Too High' : '📉 Too Low';
    } else {
      gameOver();
    }
  }
});

function decreaseScore() {
  score--;
  scoreLabel.textContent = score;
}

function gameOver() {
  messageLabel.textContent = '❌ Game Over';
  document.body.style.backgroundColor = 'red';
  scoreLabel.textContent = 0;
  guess.value = '';
}

btnAgain.addEventListener('click', function () {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreLabel.textContent = score;
  messageLabel.textContent = 'Start Guessing...';
  guess.value = '';
  numLabel.textContent = '?';
  numLabel.style.width = '15rem';
  document.body.style.backgroundColor = '#222';
});
