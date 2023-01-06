let playerSelection;//declare an empty computerselection variable
let playerscore = 0; // set playerscore to zero
let computerscore = 0; //set computerscore to zero
let computerSelection; //declare an empty computerselection variable
let winner = ""; // declare an blank winner
const computer = ["rock", "paper", "scissor"]//an array for choices
let roundmax = 5;
const allchoices = document.querySelectorAll('button');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerchoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('results');
const resultDisplay2 = document.getElementById('results2');

    allchoices.forEach(allchoices => {
        allchoices.addEventListener('click', (e) => {
            playerSelection = e.target.id;
            playerChoiceDisplay.innerHTML = "Player selects " + playerSelection;
            getComputerChoice();
            playRound(playerSelection, computerSelection);
            if (playerscore >= roundmax || computerscore >= roundmax){
                gameResult();
                return alert("Game over");
            }
        })
    })

//function for getting computer choice
function getComputerChoice(){
   computerSelection = computer[Math.floor(Math.random()*3)];//should return a random value between 0-2
    computerchoiceDisplay.innerHTML = "computer selects " + computerSelection;
}

//function for one round of the game
function playRound(playerSelection,computerSelection){
    //if and else if statments for scenarios
    if(playerSelection === "rock" && computerSelection === "paper"){
        computerscore += 1; //increment computer score by one
        resultDisplay.innerHTML  = "Player score " + playerscore;
        resultDisplay2.innerHTML = "computer score " + computerscore;
        
    }
    else if(playerSelection === "rock" && computerSelection === "scissor"){
        playerscore += 1; //increment player score by one
        resultDisplay.innerHTML  = "player score " + playerscore;
        resultDisplay2.innerHTML  = "computer score " + computerscore;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerscore += 1; //increment computer score by one
        resultDisplay.innerHTML  = "Player score " + playerscore;
        resultDisplay2.innerHTML  = "computer score " + computerscore;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerscore += 1; //increment computer score by one
        resultDisplay.innerHTML  = "Player score " + playerscore;
        resultDisplay2.innerHTML  = "computer score " + computerscore;
        
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        playerscore += 1; //increment computer score by one
        resultDisplay.innerHTML  = "Player score " + playerscore;
        resultDisplay2.innerHTML  = "computer score " + computerscore;
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
        computerscore += 1; //increment computer score by one
        resultDisplay.innerHTML  = "Player score " + playerscore;
        resultDisplay2.innerHTML  = "computer score " + computerscore;
        
    }
}

//function for game with return value of winner
function gameResult(){
    // declare and set round variable to 1 so player knows what round it is
        if (playerscore > computerscore){
            winner = "player"; // sets winner to player
            console.log("Player wins")
        }
        else if (playerscore < computerscore ){
            winner = "computer"; // sets winner to computer
            console.log("computer wins");
        }
        else {
            winner = "draw" // sets winner to draw if score is even
            console.log("Game is a tie");
        }
}