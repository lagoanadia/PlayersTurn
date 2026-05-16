let button = document.querySelector(".play");
let counter = document.querySelector(".counter");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let h1 = document.querySelector("h1");

let player1Counter = document.createElement("div");
let player2Counter = document.createElement("div");
player1.appendChild(player1Counter);
player2.appendChild(player2Counter);
let counter1 = 0;
let counter2 = 0;
player1Counter.textContent = counter1;
player2Counter.textContent = counter2;

let colors = ["var(--green)","var(--blue)"];
let players = ["Player 2's turn","Player 1's turn"];
let turn = 1;



button.addEventListener("click",()=>{
    turn = (turn+1)%2 ;
    console.log(turn);
    button.style.backgroundColor = colors[turn]
    h1.textContent = players[turn];
    if(turn === 1)
    {
        counter2++;
        player2Counter.textContent = counter2;
    }
    else
    {
        counter1++;
        player1Counter.textContent = counter1;

    }

});