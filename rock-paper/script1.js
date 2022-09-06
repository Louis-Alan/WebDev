let buttons = document.querySelectorAll('button');
let choice = ["rock", "paper", "scissors"]

function game(won)
{
    let per = document.querySelector('#perScore')
    let comp = document.querySelector('#compScore')
    let res = document.querySelector('#Result')

    
    if(comp.innerHTML == 5 || per.innerHTML == 5){
        res.innerHTML = `<h1>GAME OVER </h1>`
    }
    else if(won == 0)
    {
        res.innerHTML = "Draw"
    }
    else if(won == 1)
    {
        per.innerHTML = parseInt(per.innerHTML) +1 
        res.innerHTML = "Player won round"
        if(per.innerHTML == 5){

        }
    }
    else
    {
        comp.innerHTML = parseInt(comp.innerHTML) + 1
        res.innerHTML = "Computer won rounds"
    }
}

getComputerChoice = () => choice[Math.floor(Math.random()*3)];

playRound = (player) => {
    let comp = getComputerChoice()
    if (player == comp){
        console.log("drahhjsdsfhdss")
        game(0)
    }
    else if ( (player == "rock" && comp == "scissors") || (player == 'scissors' && comp == "paper") || (player == "paper" && comp == "rock"))
    {
        game(1);
    }
    else
        game(2);
} 
playerchoice = (ele) => {playRound(ele);}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        playerchoice(btn.id)
    })    
});