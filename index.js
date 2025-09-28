function UserInput(){
    userInput = document.getElementById("user-input").value
    console.log(userInput)
} 

function RandomComputerInput(){
    computerInput = Math.floor((Math.random()*100)%3)
    console.log(computerInput)
}
function ComputerUserAndComputerInput(){
    if (uerInput == computerInput){
        console.log("Draw")
    } else if (userInput == 0 && computerInput == 2){
        // User: ROCK
        // COMPUTER: SCISSOR
        console.log("You Wins")
    } else if (userInput == 1 && computerInput == 0){
        // User: PAPER
        // COMPUTER: ROCK
        console.log("You Wins")
    } else if (userInput == 2 && computerInput == 1){
        // User: SCISSOR
        // COMPUTER: PAPER
        console.log("You Wins")
    } else {
        console.log("You Lose")
    }
}

function PlayGame(){
    userInput = document.getElementById("user-input").value
    console.log(userInput)

    computerInput = Math.floor((Math.random() *100) % 3)
    console.log(computerInput)

        if (userInput == computerInput){
            console.log("Draw")
                textresult = document.getElementById("result_")
                textresult.innerText = "Draw"
        } else if (userInput == 0 && computerInput == 2){
            // User: ROCK
            // COMPUTER: SCISSOR
            console.log("You wins")
                textresult = document.getElementById("result_")
                textresult.innerText = "You wins"
        } else if (userInput == 1 && computerInput == 0){
            // User: PAPER
            // COMPUTER: ROCK
            console.log("You wins")
                textresult = document.getElementById("result_")
                textresult.innerText = "You wins"
        } else if (userInput == 2 && computerInput == 1){
            // User: SCISSOR
            // COMPUTER: PAPER
            console.log("You wins")
                textresult = document.getElementById("result_")
                textresult.innerText = "You wins"
        } else {
            console.log("You Lose")
                textresult = document.getElementById("result_")
                textresult.innerText = "You Lose"
        }

    textUer = document.getElementById("result_user")
    textUer.innerText = "You : " + userInput

    textCom = document.getElementById("result_Com")
    textCom.innerText = "Computer : " + computerInput

}