const choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
}

function getHumanChoice() {
    let choice = prompt("Rock,Paper,Scissor", "");
    if (choice.toLowerCase() === choices[0] ||    
        choice.toLowerCase() === choices[1] ||
        choice.toLowerCase() === choices[2] 
    ) {
        return choice.toLocaleLowerCase();
    }

    else alert("Invalid choice.")

}

function playRound(x, y) {

    if (x === y) return;
    else if (x === "rock" && y === "scissor") return humanScore += 1;
    
    else if (x === "scissor" && y === "paper") return humanScore += 1;
    
    else if (x === "paper" && y === "rock") return humanScore += 1;
    
    else return computerScore += 1;
    
}

function overallWinner(hS, cS) {

    if (hS == cS) {alert("Draw!")}

    else if (cS > hS) {alert("Computer wins!")}

    else alert("Human wins!")
}

function playGame() {
    
    for (let i = 0; i < 6; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        overallWinner(humanScore, computerScore)
    }
}

