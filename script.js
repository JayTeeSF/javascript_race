const speedDash = document.querySelector(".speedDash");
const scoreDash = document.querySelector(".scoreDash");
const lifeDash = document.querySelector(".lifeDash");

const container = document.getElementById("container");
const btnStart = document.querySelector(".btnStart");

btnStart.addEventListener('click',startGame);


let animationGame = requestAnimationFrame(playGame);

let gamePlay = false;

let keys = {
    ArrowUp:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false
}

function playGame() {
    if (gamePlay) {
      console.log("Game in play...");
    }
    animationGame = requestAnimationFrame(playGame);        
}

function startGame() {
    gamePlay=true;
}

