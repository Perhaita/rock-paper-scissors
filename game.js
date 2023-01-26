let playerScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];

while (playerScore < 5 && computerScore < 5) {
    // Get player choice
    let playerChoice = prompt("Rock, paper, or scissors?");
    playerChoice = playerChoice.toLowerCase();

    // Get computer choice
    let computerChoice = Math.floor(Math.random() * 3);
    computerChoice = choices[computerChoice];

    // Compare choices and determine winner
    if (playerChoice === computerChoice) {
        console.log("Tie!");
    } else if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            playerScore++;
        } else {
            console.log("You lose. Paper beats rock.");
            computerScore++;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock.");
            playerScore++;
        } else {
            console.log("You lose. Scissors beats paper.");
            computerScore++;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats paper.");
            playerScore++;
        } else {
            console.log("You lose. Rock beats scissors.");
            computerScore++;
        }
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
    }
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
}

if (playerScore > computerScore) {
    console.log("You won!");
} else if (playerScore < computerScore) {
    console.log("You lost!");
} else {
    console.log("It's a tie!");
}



