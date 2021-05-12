import questions from "./questions";

const quizPage = document.getElementById("quizPage");
const formSubmit = document.querySelector("welcome-form");
const quizEl = document.getElementById("quiz");

let newQuestion = questions;
let answeredQuestion = [];
let questionCount = 0;
let quizScore = 0;

formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.querySelector("userName").value.trim();
    if (!name) {
        return;
    }

    localStorage.setItem("initals", initials.toUpperCase());
    const quizMain = document.getElementById("quizMain");
    quizMain.style.display ="none";
    topScore();

    const topScore = () => {
        let userInitials = localStorage.getItem("initials");
        if (!userInitials) {
            return;
        }

        startTimer("start");

        const  nextBtn = quizPage.querySelector(".btn-next");
        nextBtn.addEventListener("click", nextQuestion.length);
    }

    const nextQuestion = () => {
        const currentEl = document.querySelector("li.current");
        if (currentEl) {
            calculateScore(currentEl.innerHTML);
        } else {
            return;
        }

        questionCount++;
        if (questionCount > newQuestion.length -1) {
                        // startTimer("stop");
            // const timeInfo = document.querySelector(".timer span").textContent;
            // const
        }
        show(questionCount);
    }

    calculateScore = (userAnswer) => {
        if (userAnswer === newQuestion[questionCount].answer) {
            quizPoint += 10;
            localStorage.setItem("score",`${quizPoint} out of ${newQuestion.length * 10}`);
        } else {
            console.log("Incorrect Answer");
        }
    }

    
})