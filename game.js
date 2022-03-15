const gameActions = ["Rock", "Paper", "Scissor"];
const startContainer = document.querySelector('#startContainer');
const startBut = document.querySelector('#startBut');
const playContainer = document.querySelector('#playContainer');
const restartBut = document.querySelector('#restartBut');


startBut.addEventListener('click', () => {
    startContainer.style.animation = "remove 0.5s";
    setTimeout(() => {
        startContainer.style.display = "none";
        startContainer.style.animation = "";
        playContainer.style.display = "flex";

    }, 500)
});

restartBut.addEventListener('click', () => {
    playContainer.style.animation = "remove 0.5s";
    setTimeout(() => {
        playContainer.style.display = "none";
        playContainer.style.animation = "";
        startContainer.style.display = "flex";

    }, 500)
});


/*
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return "Tie";
    }else if (gameActions.indexOf(playerSelection) === -1 || !playerSelection || (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "rock")){
        return "Computer";
    }else {
        return "Player";
    }
}

function computerPlay() {
    return gameActions[generateRandomNum()]
}

function generateRandomNum() {
    return Math.floor(Math.random() *  3);
}

function game(tries=1, playerScore=0, computerScore=0){
    if (tries < 6){
        let play = playRound(prompt(`Round ${tries} \n\nWhat's your action? Rock, Paper or Scissor?`), computerPlay())
        if (play === "Player"){
            game(++tries, ++playerScore, computerScore)
        }else if (play === "Computer"){
            game(++tries, playerScore, ++computerScore)
        }else { //For Ties
            game(++tries, playerScore, computerScore)
        }
    }else{
        console.log("5 Rounds played!")
        playerScore > computerScore ? console.log("Player won! Score: ", playerScore) : playerScore < computerScore ? console.log("Computer Won! Score: "+computerScore) : console.log("It was a tie!")
    }
}

game()

*/