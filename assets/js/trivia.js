const question = document.getElementById("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const displayScore = document.getElementById("displayScore"); 
const displayQuestion = document.getElementById("displayQuestion");
const buttons = document.getElementById(".buttons");
const displayTime= document.getElementById("displayTime");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

let fininsh = [];
let timer;
let userScore = 0;
let timerinit = 75;
let sequence = 0;
let storeageSaved = localStorage.getItem("User Score");

let questions = [
    {
        question: "Which of the following is not a JavaScript data type?",
        choice1: "number",
        choice2: "undifined",
        choice3: "boolean",
        choice4: "float",
        answer: 4,
    },

    {
        question: "In  which HTML element do we put the JavaScript?",
        choice1: "<head>",
        choice2: "<style>",
        choice3: "<script>",
        choice4: "<meta>",
        answer: 3,
    },

    {
        question: "Which keyword is not a Javascript statement?",
        choice1: "with",
        choice2: "use strict",
        choice3: "debugger",
        choice4: "if",
        answer: 2,
    },

    {
        question: "What are the Pop Up box types used in Javascript?",
        choice1: "prompt",
        choice2: "alert",
        choice3: "confirm",
        choice4: "all of the above",
        answer: "4",
    },

    {
        question: "Which of the following will write the message 'Hello Smarty Pants'?",
        choice1: "alertBox('Hello Smarty Pants')",
        choice2: "alert(Hello Smarty Pants)",
        choice3: "msgAlert('Hello Smarty Pants')",
        choice4: "alert('Hello Smarty Pants')",
        answer: 4,
    },
    {
        question: "",
        correct: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
      },

];

timer = setInterval(timerFunction, 1000);
timerSpan.textContent = timerinit;
displayScore.textContent = userScore;

    

showArray = () => {
    question.textContent = questions[sequence].question;
    answer1.textContent = questions[sequence].choiceA;
    answer2.textContent = questions[sequence].choiceB;
    answer3.textContent = questions[sequence].choiceC;
    answer4.textContent = questions[sequence].choiceD;
    displayScore.textContent = userScore;

    if (sequence === 5 || timerinit === 0) {
        stashScore();
        finishGame();
    }
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.textContent === questions[sequence].correct) {
            correctAnswer();
        } else incorrectAnswer();
    });
});

correctAnswer = () => {
    sequence++;
    userScore +- 20;
    showArray();
}

incorrectAnswer = () => {
    sequence++;
    timerinit -= 20;
    showArray();
}

timerFunction = () => {
    timerinit --;
    timerSpan.textContent = timerinit;
    if (timerinit <= 0) {
        stashScore();
        clearInterval(timer);
    }
}

finishGame = () => {
    clearInterval(timer);
    location.replace("highscores.html");
}

stashScore = () => {
    let scoreText = "User Score";
    localStorage.setItem("userscore", userScore)



}
