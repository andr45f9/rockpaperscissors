//Player 1 is the user
const player1 = document.getElementById("#player1");
//Player 2 is the computer
const player2 = document.getElementById("#player2");
//Options are all the different choices like rock, paper and scissors
const options = document.querySelectorAll("button");

const lose = document.getElementById("lose");
const win = document.getElementById("win");
const draw = document.getElementById("draw");

let player1Choice;
let player2Choice;
let result;

//Defines random numbers
let ranNum;

document.addEventListener("DOMContentLoaded", generatePlayer2Choices);
console.log("DOM fully loaded");

options.forEach((options) =>
  options.addEventListener("click", (e) => {
    player1Choice = e.target.class;
    ranNum = Math.floor(Math.random() * 3) + 1;

    /*    player1.innerHTML = player1Choice;
   player2.innerHTML = player2Choice; */

    generatePlayer2Choices();
  })
);

function generatePlayer2Choices() {
  console.log("the number stuff");
  if (ranNum == 1) {
    player2Choice = ".rock";
  } else if (ranNum == 2) {
    player2Choice = ".paper";
  } else if (ranNum == 3) {
    player2Choice = ".scissors";
  }

  compareChoices();
}

function compareChoices() {
  console.log("the different scores");
  //It's a tie
  if (player1Choice == player2Choice) {
    result = draw;
    //User is the winner
  } else if (player1Choice == ".scissors" && player2Choice == ".paper") {
    result = win;
  } else if (player1Choice == ".paper" && player2Choice == ".rock") {
    result = win;
  } else if (player1Choice == ".rock" && player2Choice == ".scissors") {
    result = win;
  } else if (player1Choice == ".rock" && player2Choice == ".paper") {
    // Computer is the winner
    result = lose;
  } else if (player1Choice == ".paper" && player2Choice == ".scissors") {
    result = lose;
  } else if (player1Choice == ".scissors" && player2Choice == ".rock") {
    result = lose;
  }
}
