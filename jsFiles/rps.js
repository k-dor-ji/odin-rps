let hScore = 0, cScore = 0;
let winScore = 5;
const winCon ={
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

const getComputerChoice = function(){
    let min = 0
    let max = 2
    let choice = Math.floor(Math.random()* (max - min + 1) + min)

    switch(choice){
        case 0: return "Rock"
        case 1: return "Paper"
        case 2: return "Scissors"
    }

}

const getHumanChoice = function(){
    let choice = prompt("Please enter your choice: ")
    return choice
}

const playRound = function( hChoice, cChoice) {
    hC = hChoice.toLowerCase()
    cC = cChoice.toLowerCase()
    
    if(hC===cC){
        return "It's a draw"
    }else if(winCon[hC] ===cC){
        hScore+= 1
        return hChoice + " beats " + cChoice + "!"
    }else{
        cScore+= 1
        return "You lost this round."
    }
}
const end = () => {
    if(hScore === winScore || cScore === winScore){
        alert("Game Over!");
        const winner = hScore == winScore ? "Human" : "Computer"
        results.textContent = winner + " " + "wins!";
    }
}

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const results = document.createElement("h2");

results.textContent = ("Results: " + hScore + " " + cScore)
rockButton.textContent="Rock";
scissorsButton.textContent="Scissors";
paperButton.textContent="Paper";

const container = document.querySelector("#main");

rockButton.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
    results.textContent = ("Results: " + hScore + " " + cScore)
    end();

})
scissorsButton.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
    results.textContent = ("Results: " + hScore + " " + cScore)
    end();

})
paperButton.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
    results.textContent = ("Results: " + hScore + " " + cScore)
    end();

})


container.appendChild(rockButton);
container.appendChild(scissorsButton);
container.appendChild(paperButton);
container.appendChild(results)