// establish global variables

// This should display win lose cons
var winLoss = document.querySelector(".win-loss");

// Start button
var startBtn = document.querySelector(".start-button");
//Retain score
var scoreboard = document.querySelector(".scoreboard");
// Score total
var totalScore = document.querySelector(".total-score");
// Answer Options
var ansBtn = document.querySelector(".answer-options");

var isWin = false;

//timer options
var timerElement = document.querySelector(".timer-text");
var timer;
var timerCount;

// question and answer variables... at first I atttempted to make a querselector but I tried a group array instead
var quesSelection = document.querySelector("#question");
var optionSelection = document.querySelector("#options");
var questions = [{
  question: "Where is the largest pyramid located in the world",
  options: ["Mexico", "Eygpts", "Peru", "China"],
  answer: "Mexico",
},
{
  question: " This word “Minne” derives from a word in the Dakota language meaning what? ",
  options: ["land", "grass", "water", "lake"],
  answer: "water",

},
{
  question: "Lift Bridge, Boom Island, and Canal Park are all Minnesota companies that focus on the production of what?",
  options: ["lumber", "beer", "corn", "apples"],
  answer: "beer"

},
{
  question: "What was the last name at birth of legendary Minnesota musician Prince? ",
  options: ["Nelson", "Johnson", "Smith", "Wilson"],
  answer: "Nelson"

}
]



function startGame() {
  isWin = false;
  timerCount = 5;
  // this should prevent the user from pressing the start button while the quiz is in progress  
  startBtn.disabled = true;
  startTimer()
}

//  my time starter using elements from mini project guess game
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

function loseGame() {
  winLoss.textContent = "GAME OVER";
  startButton.disabled = false;

}
function wingame() {
  winLoss.textContent = "Nice"
  startBtn.disabled = false;
}










startBtn.addEventListener("click", startGame);