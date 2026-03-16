function getComputerChoice() {
    num = Math.random()
    if (num <= 0.33) {
        return "rock"
    } else if (num <= 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(hc, cc) {
    hc = hc.toLowerCase()
    if (hc === cc) {
        resultsP.textContent = `You tied, you chose ${hc} computer chose ${cc}`
    } else if(hc === "rock" && cc === "scissors") {
        resultsP.textContent = `You won, you chose ${hc} computer chose ${cc}`
        humanScore++
    } else if(hc === "paper" && cc === "rock") {
        resultsP.textContent = `You won, you chose ${hc} computer chose ${cc}`
        humanScore++
    } else if(hc === "scissors" && cc === "paper") {
        resultsP.textContent = `You won, you chose ${hc} computer chose ${cc}`
        humanScore++
    } else {
        resultsP.textContent = `You lost, you chose ${hc} computer chose ${cc}`
         computerscore++
    }
    console.log("Human score: " + humanScore + ", Computer Score: " + computerscore)
    score.textContent = humanScore + " - " + computerscore

    if (humanScore >= 5) {
        overlayText.textContent = "YOU WIN 🎉";
        overlay.classList.remove("hidden");
        overlay.classList.add("show");
    } else if (computerscore >= 5) {
        overlayText.textContent = "YOU LOSE 💻";
        overlay.classList.remove("hidden");
        overlay.classList.add("show");
    }
}

function reset() {
    score.textContent = "0 - 0"
    resultsP.textContent = "Press a button to start!"
    humanScore = 0
    computerscore = 0
}

let humanScore = 0
let computerscore = 0
    
const rockB = document.getElementById("rock")
const paperB = document.getElementById("paper")
const scissorsB = document.getElementById("scissors")

const resultsP = document.getElementById("results")
const score = document.getElementById("score")
const restart = document.getElementById("restart")

const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlay-text");

function playGame() {
    rockB.addEventListener("click", function() {
        playRound("rock", getComputerChoice())
    })

    paperB.addEventListener("click", function() {
        playRound("paper", getComputerChoice())
    })

    scissorsB.addEventListener("click", function() {
        playRound("scissors", getComputerChoice())
    })

    restart.addEventListener("click", function() {
        reset()
        overlay.classList.add("hidden")
        overlay.classList.remove("show")
    })


}

playGame()

