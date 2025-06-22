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
 return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function displayOutput(message) {
 document.body.innerHTML += message + "<br>";
}

function playRound(humanChoice, computerChoice) {
 displayOutput("COMPUTER'S CHOICE: " + computerChoice);
 displayOutput("HUMAN'S CHOICE: " + humanChoice);

 if (computerChoice === "paper" && humanChoice === "rock") {
  displayOutput("YOU LOSE, paper beats rock");
  computerScore++;
 } else if (humanChoice === "paper" && computerChoice === "rock") {
  displayOutput("YOU WIN, paper beats rock");
  humanScore++;
 } else if (computerChoice === "rock" && humanChoice === "scissor") {
  displayOutput("YOU LOSE, rock beats scissors");
  computerScore++;
 } else if (humanChoice === "rock" && computerChoice === "scissor") {
  displayOutput("YOU WIN, rock beats scissors");
  humanScore++;
 } else if (computerChoice === "scissor" && humanChoice === "paper") {
  displayOutput("YOU LOSE, scissor beats paper");
  computerScore++;
 } else if (humanChoice === "scissor" && computerChoice === "paper") {
  displayOutput("YOU WIN, scissor beats paper");
  humanScore++;
 } else {
  displayOutput("IT'S A TIE!");
 }
 displayOutput("TOTAL SCORE FOR COMPUTER: " + computerScore);
 displayOutput("TOTAL SCORE FOR HUMAN: " + humanScore);
 displayOutput("<hr>");
}

function playGame(num) {
 for (i = 0; i < num; i++) {
  //playRound(humanSelection, computerSelection);
  playRound(getHumanchoice(), getComputerChoice(3));
 }
 if (humanScore > computerScore) {
  displayOutput("<strong>HUMANS WIN!</strong>");
  // console.log("HUMANS WIN");
 }
 else if (humanScore < computerScore) {
  displayOutput("<strong>COMPUTERS WIN!</strong>");
  // console.log("COMPUTERS WIN");
 }
 else {
  displayOutput("<strong>IT'S A DRAW")
 }

}
playGame(5);
