let buttons = document.querySelectorAll('button');
let choice = ["rock", "paper", "scissors"]

function game(won)
{
    let per = querySelector('#perScore')
    let comp = querySelector('#compScore')
    let res = querySelector('#Result')

    if(per.innerHTML == 5){

    }
    if(comp.innerHTML == 5){
        
    }

    if(won == 0)
    {
        res.innerHTML = "Draw"
    }
    else if(won == 1)
    {
        res.innerHTML = "Player won round"
    }
    else
    {
        res.innerHTML = "Computer won rounds"
    }
}

getComputerChoice = () => choice[Math.floor(Math.random()*3)];

playRound = (player) => {
    let comp = getComputerChoice()
    if (player == comp)
        game(0)

    if ( (player == "rock" && comp == "scissors") || (player == 'scissors' && comp == "paper") || (player == "paper" && comp == "rock"))
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