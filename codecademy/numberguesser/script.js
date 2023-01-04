let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate secret target number for each round
function generateTarget() {
    return Math.floor(Math.random() * 10)
}

// Determine which guess is closest to target number
function compareGuesses(humanGuess, computerGuess, targetNumber) {
    let humanDifference = Math.abs(humanGuess - targetNumber);
    let computerDifference = Math.abs(computerGuess - targetNumber);
    return humanDifference <= computerDifference;
}

// Increments score after each round
function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

// Increments round after each round
const advanceRound = () => currentRoundNumber += 1;