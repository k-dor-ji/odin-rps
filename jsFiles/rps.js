let hScore = 0, cScore = 0;

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

const playRound = function(hChoice, cChoice) {
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

const playGame = function(rounds){
    

    for(let i = 0; i < rounds;i++){
        let human = getHumanChoice()
        let computer = getComputerChoice()
        playRound(human, computer)

    }
    if(hScore > cScore){
        return "You won!"
    }else{
        return "You lost!"
    }
}

console.log(playGame(5));