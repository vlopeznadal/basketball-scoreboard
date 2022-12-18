let homeScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")

document.addEventListener("click", function(e){
    if (e.target.id === "home-1"){
        homeIncreaseScore(1)
    } else if (e.target.id === "home-2"){
        homeIncreaseScore(2)
    } else if (e.target.id === "home-3"){
        homeIncreaseScore(3)
    } else if (e.target.id === "guest-1") {
        guestIncreaseScore(1)
    } else if (e.target.id === "guest-2") {
        guestIncreaseScore(2)
    } else if (e.target.id === "guest-3") {
        guestIncreaseScore(3)
    } else if (e.target.id === "new-game") {
        newGame()
    }
})

function homeIncreaseScore(score) {
    homeScore += score
    homeScoreEl.textContent = homeScore
    showLeader()
}

function guestIncreaseScore(score) {
    guestScore+= score
    guestScoreEl.textContent = guestScore
    showLeader()
}

function newGame() {
    homeScore = 0
    homeScoreEl.textContent = "0";
    guestScore = 0
    guestScoreEl.textContent = "0";
    showLeader()
}

function showLeader() {
    if (homeScore == 0 && guestScore == 0) {
        document.getElementById("leader").textContent = ""
    } else if (homeScore == guestScore) {
        document.getElementById("leader").textContent = "Tie"
        document.getElementById("leader").style.color = "#fff";
    } else if (homeScore > guestScore) {
        document.getElementById("leader").textContent = "Home"
        document.getElementById("leader").style.color = "#E11D48";
    } else {
        document.getElementById("leader").textContent = "Guest"
        document.getElementById("leader").style.color = "#D97706";
    }
}