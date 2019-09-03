var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var userChoice;
var compChoice;
var userDisplay = document.getElementById("user-choice-img");
var compDisplay = document.getElementById("comp-choice-img");
var shootButton = document.getElementById("shoot");
var choices = [ "rock", "paper", "scissors" ];

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

function result() {
  switch(userChoice) {
    case compChoice:
      alert("tie");
      break;
    case "rock":
      if (compChoice === "scissors") {
        alert("you win");
      } else {
        alert("you lose");
      }
      break;
    case "paper":
        if (compChoice === "rock") {
          alert("you win");
        } else {
          alert("you lose");
        }
      break;
    case "scissors":
        if (compChoice === "paper") {
          alert("you win");
        } else {
          alert("you lose");
        }
      break;
    default:
      alert("something went wrong");
  }
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


// get comp choice
// display those choices to the browser
// decide who wins