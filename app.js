let win = 0;
let loss = 0;
let tie = 0;


let computerPlay = () => { //Computer's Choice
    let x = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    switch (x) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

let resultTotals = (result) => { //Increments results 
    if (result === "You Win!") {
        ++win;
        totalWins.textContent = (` You have ${win} wins`);
    }
    else if (result === "You Lose!") {
        ++loss;
        totalLosses.textContent = (` You have ${loss} losses`);
    }
    else {
        ++tie;
        totalTies.textContent = (` You have ${tie} ties`);
    }

}




let fadeOut= () =>{

    document.getElementById("content").style.filter = "grayscale(1)";
    }

let winCondition = () => { //Checks for win conditions and prints the applicable message/image. TODO: Add images, play again btn with refresh. 
    if (win === 7) {
        results.textContent = "BY AZURA BY AZURA BY AZURA, IT'S THE GRAND CHAMPION!";
        fadeOut();
        }
    
    else if (loss === 7) {
        results.textContent = "Is this loss...?";
        fadeOut();
   
    }
    else if (tie === 7) {
        results.textContent = "It's a tie. Nobody likes ties. Have another go at it?";
    fadeOut();
    }
    else { return; } // if none of the game-ending conditions are met, exits  function here
    showReset();
}

let showReset = () => {
    document.getElementById("btnRock").style.display = "none";
    document.getElementById("btnPaper").style.display = "none";
    document.getElementById("btnScissors").style.display = "none";
    document.getElementById("btnReset").style.display = "block";
}

let togStats = () => {
    let stats = document.getElementById("stats");
    if (stats.style.display === "none" || stats.style.display == '') {
        stats.style.display = "block";
    } else {
        stats.style.display = "none";
    }

}

//Buttons for each player option, stat toggle, and reset button for end of game.
btnStats.addEventListener('click', function () { togStats() });
btnRock.addEventListener('click', function () { rockPaperscissors('rock', computerPlay()) });
btnPaper.addEventListener('click', function () { rockPaperscissors('paper', computerPlay()) });
btnScissors.addEventListener('click', function () { rockPaperscissors('scissors', computerPlay()) });
btnReset.addEventListener('click', function () { location.reload(); })



function rockPaperscissors(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == computerSelection) {
        result = "TIE!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You Win!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You Lose!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "You Lose!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You Win!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You Lose!";
    }
    else { result = "You Win!"; }

    //output results to main page
    results.textContent = result;
    //output total stats to main page  
    resultTotals(result);
    //Check For x Wins/Losses/Ties    
    winCondition();

}






//Old function for prompting player to manually type choice. 
/*let playerPlay = () => {
    let choice;
    choice = prompt("Rock, Paper, or Scissors?");

    while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        alert("Invalid user entry");
        choice = prompt("Rock, Paper, or Scissors?");

    }

    return choice.toLowerCase();

}
//Old function for original implementation in console.log
/*function game() {


    for (i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        let result = rockPaperscissors(playerSelection, computerSelection);
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
*/



















