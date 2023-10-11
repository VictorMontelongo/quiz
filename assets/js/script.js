// establish global variables

// This should display win lose condition
var score = document.querySelector(".score");

// Start button
var startBtn = document.querySelector(".start-button");
//Retain score
var scoreboard = document.querySelector(".scoreboard");
// Score total
var totalScore = document.querySelector(".total-score");

var isWin = false;

var wordBlank = ""

//timer options
var timerElement = document.querySelector(".timer-text");
var timer;
var timerCount;

// question and answer variables
var quesSelection = document.querySelector(".questions");
var quesIndex = 0;

var scoreCounter = 0;

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
var timer;
//  my time starter using elements from mini project guess game
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    questionRender()
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        endGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}


function endGame() {
  quesSelection.innerHTML = "";
  wordBlank.textContent = "Nice ";
  startBtn.disabled = false;
  displayScore()
}
function displayScore() {
  var scoreboard = document.createElement("p")
  var totalScore = document.createElement("p")
  quesSelection.appendChild(scoreboard)
  quesSelection.appendChild(totalScore)
  scoreboard.textContent = scoreCounter
  totalScore.textContent = "Total Score"
  localStorage.setItem("scoreCount", scoreCounter);
  clearInterval(timer);
}

// function getPoints() {
//   // Gets stored points from client storage, if it exists
//   var storedPoints = localStorage.getItem("scoreCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedPoints === checkAnswer) {
//     scoreboard = storedPoints + 1;
//   }
// //Render win count to page
// score.textContent = scoreboard;




// function checkScore() {

//   if (scoreCounter === score.join("")) {
//     // This value is used in the timer function to test if score condition is met
//     isWin = true;
//   }
// }


// This function should work with function startGame with the Array of questions
function questionRender() {
  if (quesIndex == questions.length) {
    endGame()
    return
  }
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
//how to make the correct choice 
function Answerlistener(btn, answer) {
  console.log(btn.textContent, answer)
  if (btn.textContent === answer) {
    alert("Nice!");
    scoreCounter++
  } else
    alert("Wrong")
  timerCount -= 5;


  // questionRender()
  quesIndex++

}

// function checkAnswer(userAnswer) {
//   if (userAnswer === questions.answer) {
//     alert("Nice!");
//   }
//   else if (userAnswer !== questions.ansoptions); {
//     alert("Wrong");
//     // need to decrease time time if answer incorrect

//   }

// function scoreboard{

// }



startBtn.addEventListener("click", startGame);