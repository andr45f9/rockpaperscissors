//Player 1 is the user
const player1 = document.getElementById("player1");
//Player 2 is the computer
const player2 = document.getElementById("player2");
//Options are all the different choices like rock, paper and scissors
const options = document.querySelectorAll("button");

const lose = document.getElementById("lose");

const win = document.getElementById("win");
const draw = document.getElementById("draw");

let player1Choice;
let player2Choice;
let result;

document.addEventListener("DOMContentLoaded", generatePlayer2Choices);

//forEach loop which should make it possible to push the different buttons and change the handsign
options.forEach((options) =>
  options.addEventListener("click", (e) => {
    player1.classList.add("shake");
    player2.classList.add("shake");

    setTimeout(() => {
      player1.classList.remove("shake");
      player2.classList.remove("shake");
    }, 800);

    player1Choice = e.target.className;
    setYourHand(player1Choice);

    generatePlayer2Choices();
    setPcHand(player2Choice);

    setTimeout(() => {
      compareChoices(player1Choice, player2Choice);
    }, 800);

    draw.classList.add("hidden");
    win.classList.add("hidden");
    lose.classList.add("hidden");
  })
);

function setYourHand(selectedHand) {
  switch (selectedHand) {
    case "paper":
      player1.classList.remove("rock");
      player1.classList.remove("scissors");
      player1.classList.add("paper");
      break;
    case "scissors":
      player1.classList.remove("rock");
      player1.classList.remove("paper");
      player1.classList.add("scissors");
      break;
    default:
      player1.classList.remove("scissors");
      player1.classList.remove("paper");
      player1.classList.add("rock");
  }
}
//The computer players "random" picking
function generatePlayer2Choices() {
  console.log("the number stuff");
  if (ranNum == 1) {
    player2Choice = ".rock";
  } else if (ranNum == 2) {
    player2Choice = ".paper";
  } else if (ranNum == 3) {
    player2Choice = ".scissors";
  }
}

function setPcHand(selectedHand) {
  switch (selectedHand) {
    case "paper":
      player2.classList.remove("rock");
      player2.classList.remove("scissors");
      player2.classList.add("paper");
      break;
    case "scissors":
      player2.classList.remove("rock");
      player2.classList.remove("paper");
      player2.classList.add("scissors");
      break;
    default:
      player2.classList.remove("scissors");
      player2.classList.remove("paper");
      player2.classList.add("rock");
  }
}

function generatePlayer2Choices() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    player2Choice = "rock";
  } else if (randomNumber === 2) {
    player2Choice = "paper";
  } else if (randomNumber === 3) {
    player2Choice = "scissors";
  }
  return player2Choice;
}

function compareChoices(player1Choice, player2Choice) {
  console.log("player1Choice: ", player1Choice);
  console.log("player2Choice: ", player2Choice);
}
//All the different outcomes of the game
function compareChoices() {
  console.log("the different scores");
  //It's a tie
  if (player1Choice === player2Choice) {
    result = draw;
    result.classList.remove("hidden");
    console.log("it's a draw!");

    //User is the winner
  } else if (player1Choice === "scissors" && player2Choice === "paper") {
    result = win;
    result.classList.remove("hidden");
    console.log("Player 1 wins!");
  } else if (player1Choice === "paper" && player2Choice === "rock") {
    result = win;
    result.classList.remove("hidden");
    console.log("Player 1 wins!");
  } else if (player1Choice === "rock" && player2Choice === "scissors") {
    result = win;
    result.classList.remove("hidden");
    console.log("Player 1 wins!");
  } else if (player1Choice === "rock" && player2Choice === "paper") {
    // Computer is the winner
    result = lose;
    result.classList.remove("hidden");
    console.log("Player 2 wins!");
  } else if (player1Choice === "paper" && player2Choice === "scissors") {
    result = lose;
    result.classList.remove("hidden");
    console.log("Player 2 wins!");
  } else if (player1Choice === "scissors" && player2Choice === "rock") {
    result = lose;
    result.classList.remove("hidden");
    console.log("Player 2 wins!");
  }
}

compareChoices(player1Choice, player2Choice);
