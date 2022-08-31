const friends = ["alan", "gowri", "ani", "vaibhav", "shivom"]

// for(let i = 0; i < nice.length; i++){
//     console.log(nice[i])
// }

function calculate(potato){
    console.log(potato())
}

function add () {
    return 1 + 2
}

calculate(add)

// friends.forEach((friend) => console.log(friend))
// console.log(friends.map((friend) => console.log(friend)))
console.log(friends.map((friend, idx) => friend + "goodfriend" ))