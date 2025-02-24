//Computers choice 
function getComputerChoice(num) {
 let randomNum = Math.floor(Math.random() * num);
 let randomStr = randomNum.toString();

 if (randomNum === 0) {
  randomStr = "rock";
 }
 else if (randomNum === 1) {
  randomStr = "paper";
 }
 else if (randomNum === 2) {
  randomStr = "scissor";
 }
 return randomStr;
}

//Players choice 
function getHumanchoice() {
 let userInput = prompt("Please choose from the following: Rock, Paper, Scissor");
 return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
 if (computerChoice === "paper" && humanChoice === "rock") {
  console.log("COMPUTERS CHOICE: ", computerChoice);
  console.log("HUMAN CHOICE: ", humanChoice);
  console.log("YOU LOSE, paper beats rock");
  computerScore++;
 }
 else if (humanChoice === "paper" && computerChoice === "rock") {
  console.log("COMPUTERS CHOICE: ", computerChoice);
  console.log("HUMAN CHOICE: ", humanChoice);
  console.log("YOU WIN, paper beats rock");
  humanScore++;
 }
 else if (computerChoice === "rock" && humanChoice === "scissor") {
  console.log("COMPUTERS CHOICE: ", computerChoice);
  console.log("HUMAN CHOICE: ", humanChoice);
  console.log("YOU LOSE, rock beats scissors");
  computerScore++;
 }
 else if (humanChoice === "rock" && computerChoice === "scissor") {
  console.log("COMPUTERS CHOICE: ", computerChoice);
  console.log("HUMAN CHOICE: ", humanChoice);
  console.log("YOU WIN, rock beats scissors");
  humanScore++;
 }
 else if (computerChoice === "scissor" && humanChoice === "paper") {
  console.log("COMPUTERS CHOICE: ", computerChoice);
  console.log("HUMAN CHOICE: ", humanChoice);
  console.log("YOU LOSE, scissor beats paper");
  computerScore++;
 }
 else if (humanChoice === "scissor" && computerChoice === "paper") {
  console.log("COMPUTERS CHOICE: ", computerChoice);
  console.log("HUMAN CHOICE: ", humanChoice);
  console.log("YOU WIN, scissor beats paper");
  humanScore++;
 }

 console.log("TOTAL SCORE FOR COMPUTER: ", computerScore);
 console.log("TOTAL SCORE FOR HUMAN: ", humanScore);
}
//let humanSelection = getHumanchoice();
//let computerSelection = getComputerChoice(3);

//playRound(humanSelection, computerSelection);

function playGame(num) {
 for (i = 0; i < num; i++) {
  //playRound(humanSelection, computerSelection);
  playRound(getHumanchoice(), getComputerChoice(3));
 }
 if (humanScore > computerScore) {
  console.log("HUMANS WIN");
 }
 else if (humanScore < computerScore) {
  console.log("COMPUTERS WIN");
 }

}
playGame(5);
