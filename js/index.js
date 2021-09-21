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

function hideRollBtn() {
    resetBtn.style.display = "block";
    rollBtn.style.display = "none";
}

// Add Event Listener's

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random()* 6) + 1;

    if(player1Turn) {
        player1 += randomNumber;
        player1Scoreboard.textContent = player1;
        player1Dice.textContent = randomNumber;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 Turn"
    } else {
        player2 += randomNumber;
        player2Scoreboard.textContent = player2;
        player2Dice.textContent = randomNumber;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 1 Turn"
    }

    if(player1 >= 20) {
        message.textContent = "Player 1 has won!";
        hideRollBtn() 
    } else if(player2 >= 20) {
        message.textContent = "Player 2 has won!";
        hideRollBtn() 
    }

    if(player1Turn) {
        player1Turn = false;
    } else {
        player1Turn = true;
    }
});

function reset() {
    message.textContent = "Player 1 Turn";
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    player1 = 0;
    player2 = 0;
    player1Turn = true;
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");

}

resetBtn.addEventListener("click", function() {
    reset()
})