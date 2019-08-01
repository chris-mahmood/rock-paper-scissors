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

let playerPlay = () => {
    let choice;
    choice = prompt("Rock, Paper, or YEET?");
    
    while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "yeet") {
        alert ("Invalid user entry");
        choice = prompt("Rock, Paper, or YEET?");

    }
        
    return choice.toLowerCase();

}

function rockPaperYeet(playerSelection, computerSelection) {
    let result = "";

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
    else { result = "You Win!"; }

    return result;


}

function game() {
    let win = 0;
    let loss = 0;
    let tie = 0;

    for (i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        let result = rockPaperYeet(playerSelection, computerSelection);
        if (result === "You Win!") {
            ++win;
            console.log(result + ` You have ${win} wins`);
        }
        else if (result === "You Lose!") {
            ++loss;
            console.log(result + ` You have ${loss} losses`);
        }
        else {
            ++tie;
            console.log(result + ` You have ${tie} ties`);
        }
    }
    console.log("Game over!");
    console.log("Your final score is...");
    console.log(`${win} wins, ${loss} losses, and ${tie} ties.`);

    if(win>loss && win>tie){
        console.log("BY AZURA BY AZURA BY AZURA, IT'S THE GRAND CHAMPION!");
    }
    else if(loss>win &&loss>tie){
        console.log("Is this loss...?");
    }
    else{
        console.log("It's a tie. Nobody likes ties. f5 and do it again.");
    }
}

console.log("Welcome to Rock,paper,YEET!");
console.log("This basic console version is the same game as Rock, Paper, Scissors, with yeet replacing scissors.");
console.log("type 'game()' to get started!");





















