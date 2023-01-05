let playerSelection;//declare an empty computerselection variable
let playerscore = 0; // set playerscore to zero
let computerscore = 0; //set computerscore to zero
let computerSelection; //declare an empty computerselection variable
let winner = ""; // declare an blank winner
const choice = ["rock", "paper", "scissor"]//an array for choices

const allchoices = document.querySelectorAll('button');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerchoiceDisplay = document.getElementsByID('computer-choice');
const resultDisplay = document.getElementsByID('results');

allchoices.forEach(choice => choice.addEventListener('click', (e) =>{
    playerSelection = e.target.id;
    playerChoiceDisplay.innerHTML = playerSelection;
    getComputerChoice();
    playRound();
}))

//function for getting computer choice
function getComputerChoice(){
    return choice[Math.floor(Math.random()*3)];//should return a random value between 0-2
}

//function for one round of the game
function playRound(playerSelection,computerSelection,round){
    //if and else if statments for scenarios
    if(playerSelection === "rock" && computerSelection === "paper"){
        computerscore += 1; //increment computer score by one
        console.log("You lose " + computerSelection +" beats " + playerSelection);
    }
    else if(playerSelection === "rock" && computerSelection === "scissor"){
        playerscore += 1; //increment player score by one
        console.log("You win "+ playerSelection + " beats " + computerSelection);
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerscore += 1; //increment computer score by one
        console.log("You win "+ playerSelection + " beats " + computerSelection);
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerscore += 1; //increment computer score by one
        console.log("You lose " + computerSelection +" beats " + playerSelection);
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        playerscore += 1; //increment computer score by one
        console.log("You win "+ playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
        computerscore += 1; //increment computer score by one
        console.log("You lose " + computerSelection +" beats " + playerSelection);
    }
    else {
        console.log("draw"); // draw if both selections are the same
    }
}

//function for game with return value of winner
function game(){
    let round = 1;
    // declare and set round variable to 1 so player knows what round it is
    if (playerscore > computerscore){
        winner = "player"; // sets winner to player
    }
    else if (playerscore < computerscore ){
        winner = "computer"; // sets winner to computer
    }
    else {
        winner = "draw" // sets winner to draw if score is even
    }
    console.log("playerscore: " + playerscore); // prints out player score
    console.log("computerscore: " + computerscore); // prints out computer score
    return winner; // returns the winner from the function
}