let homeScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")

document.getElementById("home-1").addEventListener("click", homeAddOne);
document.getElementById("home-2").addEventListener("click", homeAddTwo);
document.getElementById("home-3").addEventListener("click", homeAddThree);

document.getElementById("guest-1").addEventListener("click", guestAddOne);
document.getElementById("guest-2").addEventListener("click", guestAddTwo);
document.getElementById("guest-3").addEventListener("click", guestAddThree);

document.getElementById("new-game").addEventListener("click", newGame);

function homeAddOne() {
    homeScore++
    homeScoreEl.textContent = homeScore
    showLeader()
}

function homeAddTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    showLeader()
}

function homeAddThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    showLeader()
}

function guestAddOne() {
    guestScore++
    guestScoreEl.textContent = guestScore
    showLeader()
}

function guestAddTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    showLeader()
}

function guestAddThree() {
    guestScore += 3
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