// game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessLeft = 3;

// UI vars
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;

// play again
game.addEventListener("mousedown", function (e) {
  if (e.target.classList.contains("play-again")) {
    window.location.reload();
  }
  e.preventDefault();
});

guessBtn.addEventListener("click", function (e) {
  let guess = parseInt(guessInput.value);
  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }
  // check if correct
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    guessLeft -= 1;
    if (guessLeft === 0) {
      gameOver(
        false,
        `Game Over, you lost. the correct answer was ${winningNum}`,
        "red"
      );
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(`${guess} is not correct, ${guessLeft} guesses left`, "red");
    }
  }

  e.preventDefault();
});

function setMessage(msg, clr) {
  message.textContent = msg;
  message.style.color = clr;
}
function gameOver(won, msg) {
  let color;
  color = won === true ? "green" : "red";
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg, color);

  // play again
  guessBtn.value = "Play Again";
  guessBtn.className += " play-again";
}
