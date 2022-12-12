
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
        case 0:
            return 'Rock';
        case 1: 
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function play(playerSelection, computerSelection) {
    let outcome = '';
    if(/rock/i.test(playerSelection)) {
        switch(computerSelection) {
            case 'Rock':
                outcome = 'tie';
                break;
            case 'Paper':
                outcome = 'lose';
                break;
            case 'Scissors':
                outcome = 'win';
                break;
        }
    } else if(/paper/i.test(playerSelection)) {
        switch(computerSelection) {
            case 'Rock':
                outcome = 'win';
                break;
            case 'Paper':
                outcome = 'tie';
                break;
            case 'Scissors':
                outcome = 'lose';
                break;
        }
    } else if(/Scissors/i.test(playerSelection)) {
        switch(computerSelection) {
            case 'Rock':
                outcome = 'lose';
                break;
            case 'Paper':
                outcome = 'win';
                break;
            case 'Scissors':
                outcome = 'tie';
                break;
        }
    } else {
        alert('That is not a valid selection.');
        return;
    } 
    return outcome;
}

function game() {
    let playerWins = 0;
    let compWins = 0;
    confirm('Lets play a game. Rock, Paper, Scissors. Best of five.');
    for(let i = 0; i < 20; i++) {
        let choice = prompt("What do you want to choose? Type Rock, Paper, Scissors.");
        let computerSelection = getComputerChoice();
        let outcome = play(choice, computerSelection);
        switch(outcome) {
            case 'win':
                alert(`You win! ${choice} beats ${computerSelection}.`);
                playerWins++;
                break;
            case 'lose': 
                alert(`You lose! ${computerSelection} beats ${choice}.`);
                compWins++;
                break;
            case 'tie':
                alert(`You tie! You both selected ${computerSelection}.`);
        }
        confirm(`The score is currently ${playerWins} to ${compWins}.`);
        if(playerWins >= 3 || compWins >= 3)
            break;
    }
    if(playerWins > compWins) {
        alert("Wow! You beat the computer");
    } else alert("You got beat by the computer :(");
}

game();