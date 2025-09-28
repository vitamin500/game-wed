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
        console.log("User wins")
    } else if (userInput == 1 && computerInput == 0){
        // User: PAPER
        // COMPUTER: ROCK
        console.log("user wins")
    } else if (userInput == 2 && computerInput == 1){
        // User: SCISSOR
        // COMPUTER: PAPER
        console.log("user wins")
    } else {
        console.log("Computer wins")
    }
}

function PlayGame(){
    userInput = document.getElementById("user-input").value
    console.log(userInput)

    computerInput = Math.floor((Math.random() *100) % 3)
    console.log(computerInput)

        if (userInput == computerInput){
        console.log("Draw")
    } else if (userInput == 0 && computerInput == 2){
        // User: ROCK
        // COMPUTER: SCISSOR
        console.log("User wins")
    } else if (userInput == 1 && computerInput == 0){
        // User: PAPER
        // COMPUTER: ROCK
        console.log("user wins")
    } else if (userInput == 2 && computerInput == 1){
        // User: SCISSOR
        // COMPUTER: PAPER
        console.log("user wins")
    } else {
        console.log("Computer wins")
    }
}