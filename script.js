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

function getHumanChoice() {
    return prompt("Enter Rock, Paper, or Scissors")
}





function playGame() {
    let humanScore = 0
    let computerscore = 0

    function playRound() {
        let hc = getHumanChoice()
        let cc = getComputerChoice()

        hc = hc.toLowerCase()
        if (hc === cc) {
        } else if(hc === "rock" && cc === "scissors") {
            humanScore++
        } else if(hc === "paper" && cc === "rock") {
            humanScore++
        } else if(hc === "scissors" && cc === "paper") {
            humanScore++
        } else {
            computerscore++
        }
        console.log("Human score: " + humanScore + ", Computer Score: " + computerscore)
    }
    for (i = 0; i <= 5; i++) {
        playRound()
    }
}

playGame()