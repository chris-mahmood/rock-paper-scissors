let win = 0;
let loss = 0;
let tie = 0;




function computerPlay() {
    let x = Math.floor(Math.random() * 3) + 1
    switch (x) {
        case 1:
            return "rock";
        case 2:
            return "paper";

        case 3:
            return "scissors";
    }
}

let playerPlay = () => {
    let choice;
    choice = prompt("Rock, Paper, or Scissors?");

    while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        alert("Invalid user entry");
        choice = prompt("Rock, Paper, or Scissors?");

    }

    return choice.toLowerCase();

}

function rockPaperscissors(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection == computerSelection) {
        result = "TIE!";
    }
    else if (playerSelection == "rock", computerSelection == "scissors") {
        result = "You Win!";
    }
    else if (playerSelection == "rock", computerSelection == "paper") {
        result = "You Lose!";
    }
    else if (playerSelection == "paper", computerSelection == "scissors") {
        result = "You Lose!";
    }
    else if (playerSelection == "paper", computerSelection == "rock") {
        result = "You Win!";
    }
    else if (playerSelection == "scissors", computerSelection == "rock") {
        result = "You Lose!";
    }
    else { result = "You Win!"; }

    //output results to main page
    results.textContent = result;
    //output total stats to main page  TODO: Make into own function (resultTotals)
    if (result === "You Win!") {
        ++win;
        totalWins.textContent = (result + ` You have ${win} wins`);
    }
    else if (result === "You Lose!") {
        ++loss;
        totalLosses.textContent = (result + ` You have ${loss} losses`);
    }
    else {
        ++tie;
        totalTies.textContent = (result + ` You have ${tie} ties`);
    }
    //Check For x Wins/Losses/Ties     TODO: Make into own function (winCondition)

    if (win === 7) {
        results.textContent = "BY AZURA BY AZURA BY AZURA, IT'S THE GRAND CHAMPION!";
    }
    else if (loss === 7) {
        results.textContent = "Is this loss...?";
    }
    else if (tie === 7) {
        results.textContent = "It's a tie. Nobody likes ties. press f5 and do it again.";
    }

}


btnRock.addEventListener('click', function () { rockPaperscissors('rock', computerPlay()) });
btnPaper.addEventListener('click', function () { rockPaperscissors('paper', computerPlay()) });
btnScissors.addEventListener('click', function () { rockPaperscissors('scissors', computerPlay()) });

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



















