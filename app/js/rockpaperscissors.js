////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
   switch (playerMove = "rock") {
        case computerMove = "scissors":
            winner = "player";
            break;
        case computerMove = "paper":
            winner = "computer";
            break;
        default;
            winner = "tie";
   }
      switch (playerMove = "paper") {
        case computerMove = "rock":
            winner = "player";
            break;
        case computerMove = "scissors":
            winner = "computer";
            break;
        default;
            winner = "tie";
   }
      switch (playerMove = "scissors") {
        case computerMove = "paper":
            winner = "player";
            break;
        case computerMove = "rock":
            winner = "computer";
            break;
        default:
            winner = "tie";
   }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var tie = 0;
    var playerMove;
    var computerMove;
    var winner;

    while (playerWins < 5 || computerWins < 5) {
        playerMove = getPlayerMove(move);
        computerMove = getComputerMove(move);
        winner = getWinner(playerMove, computerMove);

        if (winner = "player") {
            playerWins++;
        } else if (winner = "computer") {
            computerWins++;
        } else { tie++;
        }

        console.log ("Player chose " + playerMove ", while Computer chose " + computerMove + ".");
        console.log ("The score is currently: Player " + playerWins + ", Computer " + computerWins + ", Tie " + tie + ".");
    }
    return [playerWins, computerWins];
}








