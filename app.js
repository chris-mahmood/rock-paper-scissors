function computerPlay() {
    let x = Math.floor(Math.random() * 3) + 1
    switch (x) {
        case 1:
            return "rock";
        case 2:
            return "paper";

        case 3:
            return "yeet";
    }
}

let playerPlay= () => {
    let choice = prompt("Rock, Paper, or YEET?");
    return choice.toLowerCase(); 

}


const computerSelection = computerPlay()
const playerSelection = playerPlay()

function rockPaperYeet(playerSelection, computerSelection) {
   let result;

    if (playerSelection == computerSelection) {
        result = "TIE!";
    }
    else if (playerSelection == "rock", computerSelection == "yeet") {
         result = "You Win!";
    }
    else if (playerSelection == "rock", computerSelection == "paper") {
         result = "You Lose!";
    }
    else if (playerSelection == "paper", computerSelection == "yeet") {
         result = "You Lose!";
    }
    else if (playerSelection == "paper", computerSelection == "rock") {
         result = "You Win!";
    }
    else if (playerSelection == "yeet", computerSelection == "rock") {
         result = "You Lose!";
    }
    else {        result = "You Win!";}
    
    return result;
    

}

console.log(rockPaperYeet(playerSelection,computerSelection));

/* PSEUDOCODE FOR GAME 

function game()
let win;
let loss;

for i=0; i<5; i++ {
    playerPlay();
    if:
    rockPaperYeet(playerSelection,computerSelection)= "You Win!"
    wincount++
    else if:
    rockPaperYeet(playerSelection,computerSelection)= "You Lose!"
    losscount++
    else:
    tiecount++
switch (tieCount){
    case:
}
}
























*/