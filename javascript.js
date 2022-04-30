//Return the computers choice of rock, scissors or paper
function computerPlay() {
    let options = ["scissors", "paper", "rock"];
    return options[Math.floor(Math.random() * options.length)];
}

const computerSelection = computerPlay();
console.log(computerSelection);