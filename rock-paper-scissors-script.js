function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    console.log('Random Num: ' + randomNum);
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

function game(choice) {
    const h1 = document.querySelector('h1');
    let computerSelection = getComputerChoice();
    let outcome = play(choice, computerSelection);
    console.log('choice: ' + choice + ' CompChoice: ' + computerSelection)
    switch(outcome) {
        case 'win':
            h1.innerHTML = `You win! ${choice} beats ${computerSelection}.`;
            return 1;
        case 'lose': 
            h1.innerHTML = `You lose! ${computerSelection} beats ${choice}.`;
            return -1;
        case 'tie':
            h1.innerHTML = `You tie! You both selected ${computerSelection}.`;
            return 0;

    }
}

function container(choice) {
    let outcome;
    const p = document.querySelector('.score');

    outcome = game(choice);
    console.log('outcome: ' + outcome)

    if(outcome === 1) playerScore++;
    else if(outcome === -1) compScore++;

    console.log('playerScore: ' + playerScore);
    console.log('compScore: ' + compScore);

    console.log('p' + p);
    p.innerHTML = `${playerScore}, ${compScore}`;

}

let playerScore = 0;
let compScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')

rock.addEventListener('click', () => container('Rock'));
scissors.addEventListener('click', () => container('Scissors'));
paper.addEventListener('click', () => container('Paper'));

// function game() {

//     const rock = document.querySelector('#rock');
//     const paper = document.querySelector('#paper');
//     const scissors = document.querySelector('#scissors')

//     let computerSelection = getComputerChoice();

//     rock.addEventListener('click', () => {
//         play('rock', computerSelection);
//     });
//     scissors.addEventListener('click', () => {
//         play('scissors', computerSelection);
//     });
//     paper.addEventListener('click', () => {
//         play('paper', computerSelection);
//     });
// }

// game();


