const question = document.querySelector("#question");
const choices = array.from(document.querySelector("#.choice.text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const procressBarFull = document.querySelector("#procressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestion = []

let questions = [
    {
        question: "Which of the following is not a JavaScript data type?"
        choice1: "Number",
        choice2: "Undifined"
        choice3: "Boolean"
        choice4: "Float"
        answer: "Float"
    }

]