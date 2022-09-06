const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

let para1 = document.createElement('p');
para1.textContent = "Hey I'm red!";
para1.style.color = "red";
container.appendChild(para1);

container.innerHTML += `<h3 style = "color: blue">I'm a blue h3</h3>`

let div2 = document.createElement('div');
div2.style.cssText = "border: 2px solid black; background-color: hotpink";

div2.innerHTML += `<h1>I'm in a div</h1>
    <p> ME TOO!</p>`;
container.appendChild(div2);

// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("HIHIHI");

let btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     alert("Function alert");
// })

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

let buttons = document.querySelectorAll('#potato button');

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});