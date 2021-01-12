const userinitials = document.querySelector("#userinitials")
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = localStorage.querySelector("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

userinitials.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !userinitials.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: userinitials.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem("highScores", JSON.stringify(highScores))

    window.location.assign("/")

}