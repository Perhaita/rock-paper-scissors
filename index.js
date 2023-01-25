const playerSelection = playerChoice();
const computerSelection = computerChoice();
console.log(computerSelection);
console.log(playerSelection);
 
 
 
 function computerChoice() {

    let arr = ["rock","paper", "scissors" ];

      return arr[Math.floor(Math.random() * 3)];
}




 function playerChoice(){
    let playerInput = prompt("Enter you'r choice: ");
    return playerInput;
}


function singleRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection){
        alert("It's a tie!");
    } if(playerSelection == "rock" && computerSelection == "paper") {
        alert("Computer WIN!");
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        alert("Player WIN!");
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        alert("Player WIN!");
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        alert("Computer WIN!")
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        alert("Coomputer WIN!")
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        alert("Player WIN!")
    }

   
}


console.log(singleRound(playerSelection,computerSelection));