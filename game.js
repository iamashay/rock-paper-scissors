const gameActions = ["rock", "paper", "scissors"];
const startContainer = document.querySelector('#startContainer');
const startBut = document.querySelector('#startBut');
const playContainer = document.querySelector('#playContainer');
const restartBut = document.querySelector('#restartBut');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScoreCard = document.querySelector('#playerScoreCard');
const compScoreCard = document.querySelector('#compScoreCard');
const playerMoveCard = document.querySelector('#playerMoveCard');
const compMoveCard = document.querySelector('#compMoveCard');
const roundCard = document.querySelector('#roundCard');
const gameUpdate = document.querySelector('#gameUpdate');
const choiceCard = document.querySelector('#choiceCard');

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
    defaultGame();
    setTimeout(() => {
        playContainer.style.display = "none";
        playContainer.style.animation = "";
        startContainer.style.display = "flex";

    }, 500)
});

function playRound(playerSelection, compSelection) {

    playerSelection = playerSelection.toLowerCase();
    compSelection = compSelection.toLowerCase();

    if (playerSelection === compSelection){
        return "Tie";
    }else if (gameActions.indexOf(playerSelection) === -1 || !playerSelection || (playerSelection === "rock" && compSelection === "paper") || (playerSelection === "paper" && compSelection === "scissor") || (playerSelection === "scissor" && compSelection === "rock")){
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

function defaultGame() {
    roundCard.innerText = 0;
    compMoveCard.src = `./resources/question.png`;
    playerMoveCard.src = `./resources/question.png`;
    playerScoreCard.innerText = 0;
    compScoreCard.innerText = 0;
    gameUpdate.innerText = ""
    rock.style.pointerEvents = '';
    paper.style.pointerEvents = '';
    scissors.style.pointerEvents = '';
    choiceCard.style.display = "flex";


}

function blockGame() {

    rock.style.pointerEvents = 'none';
    paper.style.pointerEvents = 'none';
    scissors.style.pointerEvents = 'none';
    choiceCard.style.animation = "remove 0.5s";
    setTimeout(() => {
        choiceCard.style.display = "none";
        choiceCard.style.animation = "";
    }, 500)

}

function checkWinner() {
    if (parseInt(playerScoreCard.innerText) > parseInt(compScoreCard.innerText)){
        return ["Player", parseInt(playerScoreCard.innerText) - parseInt(compScoreCard.innerText)];
    }else if (parseInt(playerScoreCard.innerText) < parseInt(compScoreCard.innerText)){
        return ["Computer", parseInt(compScoreCard.innerText) - parseInt(playerScoreCard.innerText)];
    }else {
        return ['Tie'];

    }
}

function game(playerSelection) {
    //console.log(playerSelection);
    playerSelection = playerSelection.target.id;

    roundCard.innerText = parseInt(roundCard.innerText) + 1;
    let compSelection = computerPlay();
    compMoveCard.src = `./resources/${compSelection}.jpg`;
    playerMoveCard.src = `./resources/${playerSelection}.jpg`;

    let result = playRound(playerSelection, compSelection)

    if (result === "Player"){
        playerScoreCard.innerText = parseInt(playerScoreCard.innerText) + 1;
        gameUpdate.innerText = "Player won!";
    }else if (result === "Computer"){
        compScoreCard.innerText = parseInt(compScoreCard.innerText) + 1;
        gameUpdate.innerText = "Computer won!";

    }else { //For Ties
        //no change in scoreCard?
        gameUpdate.innerText = "It's a TIE!";

    }
    if (parseInt(roundCard.innerText) === 5) {
        let whoWon = checkWinner();
        whoWon[0] !== 'Tie' ? 
            gameUpdate.innerText = `Game Over! ${whoWon[0]} won by ${whoWon[1]} points!` :
            gameUpdate.innerText = `Game Over! It's a tie :(`;

        blockGame();
    }
}


rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

/*
game()



If action is selected:
    Update Selection Box for player
    Randomly choose Computer action and update selection
    Compare player and computer selection:
        Update score for the winner
        count Round if > 5:
            alert('Computer won by ${comp} - ${player} points')

*/
