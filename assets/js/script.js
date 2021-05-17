var timeEl = document.querySelector(".time");
var startQuiz = document.getElementById("startBtn");
var startDiv = document.getElementById("startDiv");
var quizDiv = document.getElementById("quizDiv");
var correct = document.getElementById("correct");
var colsingScore = document.getElementById("closingScore");
var highScore = document.getElementById("highScores");
var highScorePage = document.getElementById("highScorePage");
var highScoreList = document.getElementById("highScoreList");
var answerBtn = document.querySelectorAll(".answerBtn");
var submit = document.querySelector(".submitBtn");
var remove = document.querySelector(".removeBtn");
var timerInterval;
var scores = [];
var secondsLeft = 60;

//question objects
var Q1 = {
  qNumber: "Question 1",
  question: "Which of the following is not a JavaScript data type?",
  C1: "number",
  C2: "undifined",
  C3: "boolean",
  C4: "float",
  answer: "C4",
};
var Q2 = {
  qNumber: "Question 2",
  question: "In which HTML element do we put the JavaScript?",
  C1: "head",
  C2: "style",
  C3: "script",
  C4: "meta",
  answer: "C3",
};
var Q3 = {
  qNumber: "Question 3",
  question: "Which keyword is not a Javascript statement?",
  C1: "with",
  C2: "use strict",
  C3: "debugger",
  C4: "if",
  answer: "C2",
};
var Q4 = {
  qNumber: "Question 4",
  question: "What are the Pop Up box types used in Javascript?",
  C1: "prompt",
  C2: "alert",
  C3: "confirm",
  C4: "all of the above",
  answer: "C4",
};
var Q5 = {
  qNumber: "Question 5",
  question: "Which of the following will write the message 'Hello Smarty Pants'?",
  C1: "alertBox('Hello Smarty Pants')",
  C2: "alert(Hello Smarty Pants)",
  C3: "msgAlert('Hello Smarty Pants')",
  C4: "alert('Hello Smarty Pants')",
  answer: "C4",
};

//global var dependant on above objects must be below to function
var questionsArr = [Q1, Q2, Q3, Q4, Q5];
// var secondsLeft = questionsArr.length * 15;
var questionIndex = 0;

//function for timer
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
      endQuiz();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Time's Up!";
}

function hideCorrect() {
  correct.textContent = " ";
}

//on click start button, start time and quiz
function askQuestions() {
  startDiv.classList.add("invisible");
  startDiv.style.display = "none";
  quizDiv.classList.remove("invisible");
  quizDiv.classList.add("visible");
setTime();
showQuiz();
}

//function to display each question in quiz
function showQuiz() {
  document.getElementById("Q").innerHTML = questionsArr[questionIndex].qNumber + ": " + questionsArr[questionIndex].question;
  document.getElementById("C1").innerHTML = questionsArr[questionIndex].C1;
  document.getElementById("C2").innerHTML = questionsArr[questionIndex].C2;
  document.getElementById("C3").innerHTML = questionsArr[questionIndex].C3;
  document.getElementById("C4").innerHTML = questionsArr[questionIndex].C4;
}

//find which button is selected, post if correct, continue questions or end
for (var i = 0; i < answerBtn.length; i++) {
    answerBtn[i].addEventListener("click", options);
}

function options() {
  var btnId = this.getAttribute("id");
  
  isCorrect(btnId);
  questionIndex++;
  
  if (questionIndex <= questionsArr.length - 1) {
    showQuiz();
  }
  else {
    endQuiz();
    
  }
}

//function for if selected button is correct or incorrect answer
function isCorrect(btnId) {

  if (btnId == questionsArr[questionIndex].answer) {
    correct.textContent = "You are Correct!";

  }
  else {
    correct.textContent = "Sorry Wrong Answer";

    if (secondsLeft > 15) {
      secondsLeft = secondsLeft - 15;
    }
    else {
      endQuiz();
    }

  }

  // clear correct/incorrect message after one second
  setTimeout(hideCorrect, 1000);

}



//Close quiz div and see final score (time is up or all questions answered)
function endQuiz() {
  quizDiv.classList.remove("visible");
  quizDiv.classList.add("invisible");
  quizDiv.style.display ="none";
  endScore.classList.remove("invisible");
  endScore.classList.add("visible");
  document.getElementById("finalScore").textContent = secondsLeft;
  clearInterval(timerInterval);
}

//push score and name to local storage
function trackHighScore() {
  var savedScores = JSON.parse(localStorage.getItem("scores"));
  if (savedScores !== null) {
    scores = savedScores;
  }
  scores.push(document.querySelector(".initialsEntered").value);
  localStorage.setItem("scores", JSON.stringify(scores));

}

//Get scores out of local storage & add to ul
function renderScores() {
  var savedScores = JSON.parse(localStorage.getItem("scores"));
  if (savedScores !== null) {
    scores = savedScores;
  }
  for (var i = 0; i < scores.length; i++) {
    scores.sort();
    scores.reverse();
    var score = scores[i];
    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);

    highScoreList.appendChild(li);
  }

}

//View high score list
function highScores() {
  //on submit, log high score to local storage
  trackHighScore();

  //clear area and make high score list visible
  endScore.classList.remove("visible");
  endScore.classList.add("invisible");
  endScore.style.display = "none";
  highScore.classList.remove("invisible");
  highScore.classList.add("visible");

  renderScores();
}

function highScorePage() {
  timeEl.classList.add("invisible");
  startDiv.classList.add("invisible");
  startDiv.style.display = "none";
  quizDiv.classList.remove("visible");
  quizDiv.classList.add("invisible");
  quizDiv.style.display = "none";
  endScore.classList.remove("visible");
  endScore.classList.add("invisible");
  endScore.style.display = "none";
  highScore.classList.remove("invisible");
  highScore.classList.add("invisible");
  renderScores();
}

//Click submit to log and display high scores or high scores link
submit.addEventListener("click", highScores);
highScorePage.addEventListener("click", highScorePage);

//Clear scores button
function clearScore() {
  localStorage.clear();
  highScoreList.innerHTML = "";
}

remove.addEventListener("click", clearScore);


//Start button for quiz
startQuiz.addEventListener("click", askQuestions);