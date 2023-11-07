const bird = document.getElementById("birdId");
const pipe = document.getElementById("pipeId");
const ground = document.getElementById("groundId");

let birdY = 250;
let pipeX = 400;
let gravity = 2;
let gameInterval;

function jump(){
    birdY -= 40;
}

function updateGame(){
    birdY += gravity;
    bird.style.top = birdY + "px";
    pipeX -= 5;
    pipe.style.left= pipeX + "px";

    if(
        birdY + bird.offsetHeight > ground.offsetTop || birdY < 0 || 
        (birdY + bird.offsetHeight > pipe.offsetTop && birdY <pipe.offsetHeight+ pipe.offsetTop
             && pipeX + pipe.offsetWidth > 50 && pipeX < 90  )

     ){
         clearInterval(gameInterval);
         alert("game over");

    }


}

document.addEventListener("keydown",jump);

gameInterval = setInterval(updateGame,50);