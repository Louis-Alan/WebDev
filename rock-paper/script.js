let choice = ["rock", "paper", "scissors"]
let prin = document.querySelector(".print")

getComputerChoice = () => choice[Math.floor(Math.random()*3)];

function playerSelection()
{
    user = prompt("Rock, Paper or Scissors:").toLowerCase()
    return user
}

function playRound()
{
    let player = playerSelection()
    let comp = getComputerChoice()
    if (player == comp)
        return 0

    if ( (player == "rock" && comp == "scissors") || (player == 'scissors' && comp == "paper") || (player == "paper" && comp == "rock"))
    {
        return 1;
    }
    else
        return 2;
        
}

function game()
{
    let pCount = 0
    let cCount = 0
    for(let i = 0; i < 5; i++)
    {
        let a = playRound()
        if(a == 0)
            console.log("tie")
        else if(a == 1)
        {
            pCount ++
            console.log("player won round")
        }
        else
        {
            cCount++
            console.log("computer won round")
        }
    }

    if(pCount == cCount){
        console.log("tired")
        prin.innerHTML += "tired"
    }
    else if(pCount > cCount){
        console.log("player wonnered")
        prin.innerHTML += "player wonnered"
    }
    else
    {
        console.log("computer wonnered")
        prin.innerHTML += "computer wonnered"
    }
}
game()