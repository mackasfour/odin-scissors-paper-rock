let playerWins = 0;
let computerWins = 0;

//Return the computers choice of rock, scissors or paper
function computerPlay() {
    let options = ["scissors", "paper", "rock"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection , computerSelection ) {
    //insert into html element computerPick with what the computer has selected
    document.getElementById('computerPick').innerHTML = "The Computer has selected "+ computerSelection;

    if((playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
            //Insert player victory to result element
            document.getElementById('roundResult').innerHTML = "Player Wins the Round!";
            playerWins++;

            //Insert player wins to player score element
            document.getElementById('playerScore').innerHTML = "Your score: " + playerWins;

            //check total wins
            if(checkTotalWins(playerWins)) {
                document.getElementById('overallResult').innerHTML = "Player Wins the Game!";
            }
        } else if (playerSelection == computerSelection) {
            document.getElementById('roundResult').innerHTML = "It's a Draw!";
        } else {
            //Insert computer victory to result element
            document.getElementById('roundResult').innerHTML = "Computer Wins the Round!";
            computerWins++;

            //Insert player wins to player score element
            document.getElementById('computerScore').innerHTML = "Computer's score: " + computerWins;

            //check total wins
            if(checkTotalWins(computerWins)) {
                document.getElementById('overallResult').innerHTML = "Computer Wins the Game!";
            }
        }
}

function checkTotalWins(wins) {
    if(wins == 3) {
        
        let buttonCount = document.getElementsByClassName("images");
        for(let i = 0; i < buttonCount.length; i++) {
            buttonCount[i].disabled = true;
        }

        document.getElementById("playAgainButton").removeAttribute("hidden");
        return true;
    }
}