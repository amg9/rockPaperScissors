var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var userChoice;
var compChoice;
var userDisplay = document.getElementById("user-choice-img");
var compDisplay = document.getElementById("comp-choice-img");
var shootButton = document.getElementById("shoot");
var choices = [ "rock", "paper", "scissors" ];
var userWin = document.getElementById("user-win");
var compWin = document.getElementById("comp-win");
var userLose = document.getElementById("user-lose");
var compLose = document.getElementById("comp-lose");
var tie = document.getElementById("tie");
var winBox = document.getElementById("win-box");
var wins = 0;
var loseBox = document.getElementById("lose-box");
var loses = 0;
var tieBox = document.getElementById("tie-box");
var ties = 0;
var plays = 0;
var resetButton = document.getElementById("reset");


function chooseRock() {
  userChoice = this.id;
  userDisplay.src = "https://static.thenounproject.com/png/477918-200.png";
}

rock.addEventListener("click", chooseRock)

function choosePaper() {
  userChoice = this.id;
  userDisplay.src = "https://icon-library.net/images/rock-paper-scissors-icon/rock-paper-scissors-icon-23.jpg";
}

paper.addEventListener("click", choosePaper)

function chooseScissors() {
  userChoice = this.id;
  userDisplay.src = "https://i-love-png.com/images/477919-200.png";
}

scissors.addEventListener("click", chooseScissors)

function makeCompChoice() {
  compChoice = choices[Math.floor(Math.random() * choices.length)];
  switch(compChoice) {
    case "rock":
      compDisplay.src = "https://static.thenounproject.com/png/477918-200.png";
      break;
    case "paper":
      compDisplay.src = "https://icon-library.net/images/rock-paper-scissors-icon/rock-paper-scissors-icon-23.jpg";
      break;
    case "scissors":
      compDisplay.src = "https://i-love-png.com/images/477919-200.png";
      break;
    default:
      alert("something went wrong");
  }
}

function hideWin() {
  userWin.classList.add("hidden");
  compLose.classList.add("hidden");
}

function win() {
  wins += 1;
  compLose.classList.remove("hidden");
  userWin.classList.remove("hidden");
  setTimeout(hideWin, 2000);
}

function hideLose() {
  userLose.classList.add("hidden");
  compWin.classList.add("hidden");
}

function lose() {
  loses += 1;
  compWin.classList.remove("hidden");
  userLose.classList.remove("hidden");
  setTimeout(hideLose, 2000);
}

function hideTie() {
  tie.classList.add("hidden");
}

function result() {
  plays++;
  switch(userChoice) {
    case compChoice:
      ties += 1;
      tie.classList.remove("hidden");
      setTimeout(hideTie, 2000);
      break;
    case "rock":
      if (compChoice === "scissors") {
        win();
      } else {
        lose();
      }
      break;
    case "paper":
        if (compChoice === "rock") {
          win();
        } else {
          lose();
        }
      break;
    case "scissors":
        if (compChoice === "paper") {
          win();   
        } else {
          lose();
        }
      break;
    default:
      alert("something went wrong");
  }
  winBox.innerHTML = wins + ` (${Math.trunc((wins/plays)*100)}%)`;
  loseBox.innerHTML = loses + ` (${Math.trunc((loses/plays)*100)}%)`;
  tieBox.innerHTML = ties + ` (${Math.trunc((ties/plays)*100)}%)`;
}

function shoot() {
  if (userChoice != undefined) {
    makeCompChoice();
    setTimeout(result, 1000)
  } else {
    alert("Please make a choice")
  }
}

shootButton.addEventListener("click", shoot)

function reset() {
  wins = 0;
  loses = 0;
  ties = 0;
  plays = 0;

  winBox.innerHTML = wins + ` (0%)`;
  loseBox.innerHTML = loses + ` (0%)`;
  tieBox.innerHTML = ties + ` (0%)`;

  userChoice = undefined

  userDisplay.src = "https://cdn0.iconfinder.com/data/icons/handdrawn-ui-elements/512/Question_Mark-512.png";
  compDisplay.src = "https://cdn0.iconfinder.com/data/icons/handdrawn-ui-elements/512/Question_Mark-512.png";
}

resetButton.addEventListener("click", reset)