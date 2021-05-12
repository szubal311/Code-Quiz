const name = localStorage.getItem("name");
const score = localStorage.getItem("score");
const timer = localStorage.getItem("timer")

const nameEl = document.querySelector(".userName");
const pointsEl = document.querySelector(".userPoints");
const timerEl = document.querySelector(".userTimer");

if (name && score) {
    nameEl.textContent = `Nicely Done, ${name}`;
    pointsEl.innerHTML = `Your Score: <span class="points">${score}</span>`;
    timerEl.innerHTML = `Time: <span class ="time">${timer}</span>`;
}