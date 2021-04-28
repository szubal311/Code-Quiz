const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const procressBarFull = document.querySelector("#procressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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
    }

]
const score_points = 100;
const max_questions = 5;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > max_questions) {
        localStorage.setItem("mostRecentScore", score);

        return window.location.assign("trivia-end.html");
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${max_questions}`
    progressBarFull.style.width = `${(questionCounter / max_questions) * 100}%`

    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex];
    //questionEl.textContent = questions[questionCounter].question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;

}

choices.forEach(choice => {
    choice.addEventListener("click", function (e) {
            if (!acceptingAnswers)
                return;


            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];

            let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            if (classToApply === "correct") {
                incrementScore(score_points);

            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();

            }, 1000);
        });

});

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()








