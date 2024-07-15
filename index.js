let homeScoreElement = document.getElementById("homeScore");
let awayScoreElement = document.getElementById("guestScore");

let homeScore = 0;
let awayScore = 0;

function homeAddPoints1() {
    homeScore += 1;
    homeScoreElement.textContent = formatScore(homeScore);
}

function homeAddPoints2() {
    homeScore += 2;
    homeScoreElement.textContent = formatScore(homeScore);
}

function homeAddPoints3() {
    homeScore += 3;
    homeScoreElement.textContent = formatScore(homeScore);
}

function awayAddPoints1() {
    awayScore += 1;
    awayScoreElement.textContent = formatScore(awayScore);
}

function awayAddPoints2() {
    awayScore += 2;
    awayScoreElement.textContent = formatScore(awayScore);
}

function awayAddPoints3() {
    awayScore += 3;
    awayScoreElement.textContent = formatScore(awayScore);
}

function resetScores() {
    homeScore = 0;
    awayScore = 0;
    homeScoreElement.textContent = formatScore(homeScore);
    awayScoreElement.textContent = formatScore(awayScore);
}

// Helper function to format the score
function formatScore(score) {
    return score.toString().padStart(2, '0');
}
