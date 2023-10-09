// establish global variables

// This should display win lose condition
var winLoss = document.querySelector(".win-loss");

// Start button
var startBtn = document.querySelector(".start-button");
//Retain score
var scoreboard = document.querySelector(".scoreboard");
// Score total
var totalScore = document.querySelector(".total-score");
var score = 0;

var isWin = false;

//timer options
var timerElement = document.querySelector(".timer-text");
var timer;
var timerCount;

// question and answer variables
var quesSelection = document.querySelector(".questions");
var quesIndex = 0;
var score = 0;

var questions = [{
  question: "Where is the largest pyramid located in the world",
  ansoptions: ["Mexico", "Eygpt", "Peru", "China"],
  answer: "Mexico",
},
{
  question: " This word “Minne” derives from a word in the Dakota language meaning what? ",
  ansoptions: ["land", "grass", "water", "lake"],
  answer: "water",

},
{
  question: "Lift Bridge, Boom Island, and Canal Park are all Minnesota companies that focus on the production of what?",
  ansoptions: ["lumber", "beer", "corn", "apples"],
  answer: "beer"

},
{
  question: "What was the last name at birth of legendary Minnesota musician Prince? ",
  ansoptions: ["Nelson", "Johnson", "Smith", "Wilson"],
  answer: "Nelson"

}
]



function startGame() {
  isWin = false;
  timerCount = 60;
  // this should prevent the user from pressing the start button while the quiz is in progress  
  startBtn.disabled = true;
  startTimer()

}

//  my time starter using elements from mini project guess game
function startTimer() {
  // Sets timer
  var timer = setInterval(function () {
    questionRender()
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
  startBtn.disabled = false;
}
function winGame() {
  winLoss.textContent = "Nice"
  startBtn.disabled = false;
}
// This function should work with function startGame with the Array of questions
function questionRender() {
  var currentQues = questions[quesIndex];
  // var pTag = document.createElement("p");
  quesSelection.textContent = currentQues.question
  for (var i = 0; i < currentQues.ansoptions.length; i++) {
    var ansoptions = currentQues.ansoptions[i]
    var div = document.createElement("div")
    var btn = document.createElement("button")
    btn.textContent = ansoptions
    btn.answer = quesSelection.answer
    btn.addEventListener("click", function (event) { Answerlistener(event.target, currentQues.answer); }, false)
    div.appendChild(btn)
    quesSelection.appendChild(div)
  }
}
//how to make the correct choice can be made
function Answerlistener(btn, answer) {
  console.log(btn.textContent, answer)
  if (btn.textContent === answer) {
    checkAnswer()
  }
  questionRender()
  quesIndex++
}

function checkAnswer(userAnswer) {
  if (userAnswer === questions.answer)
    score = score + 1;
}




startBtn.addEventListener("click", startGame);