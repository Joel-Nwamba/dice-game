let player1 = 0;
let player2 = 0;
let player1Turn = true;

// get all DOM
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

// Add Event Listener's

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random()* 6) + 1;

    if(player1Turn) {
        player1Dice.textContent = randomNumber;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 Turn"
    } else {
        player2Dice.textContent = randomNumber;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 1 Turn"
    }
    if(player1Turn) {
        player1Turn = false;
    } else {
        player1Turn = true;
    }
})