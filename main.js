const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1920;
canvas.height = 1080;

let userClick = false;
let frame = 0;
let score = 0;
let gamespeed = 5;
let backgroundSpeed = 1;
let groundLevel = canvas.height - 300;
let displayScore = document.getElementById('score');
let endDisplay = document.getElementById('end-display');

const buildingsBackground = new Image();
buildingsBackground.src = './assets/buildings3.png';
const BB = {
    x1: 0,
    x2: canvas.width,
    y: canvas.height - 800,
    width: canvas.width,
    height: 500,
}

function handleBuildingsBackground() {
    if (BB.x1 <= -BB.width + backgroundSpeed) BB.x1 = BB.width;
    else BB.x1 -= backgroundSpeed;
    if (BB.x2 <= -BB.width + backgroundSpeed) BB.x2 = BB.width;
    else (BB.x2 -= backgroundSpeed);
    ctx.drawImage(buildingsBackground, BB.x1, BB.y, BB.width, BB.height)
    ctx.drawImage(buildingsBackground, BB.x2, BB.y, BB.width, BB.height)
}

const groundBackground = new Image();
groundBackground.src = './assets/ground3.jpg';
const GB = {
    x1: 0,
    x2: canvas.width,
    y: canvas.height - 300,
    width: canvas.width,
    height: 300,
}

function handleGroundBackground() {
    ctx.drawImage(groundBackground, GB.x1, GB.y, GB.width, GB.height)
    ctx.drawImage(groundBackground, GB.x2, GB.y, GB.width, GB.height)
}

// clearRect is to clear the entire canvass between every frame of animation
// requestanimationframe is a recursion which calls itself repeatedly all over again
// fillRect(position x, position y, width, height)
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    updateGameSpeed();
    handleBuildingsBackground();
    handleGroundBackground()

    // ctx.fillRect(200, groundLevel - 100, 100, 100);
    movementObstacles();
    player.update();
    player.draw();
    hitCollisions();
    showScore();
    if (hitCollisions()) return
    requestAnimationFrame(animate);
    frame++;
    // console.log(gamespeed);
    // console.log(divisibleObstacle);
}

animate();

// (type of event, call back function that runs everytime that particular event occurs)
// Everytime the users click the mouse button
window.addEventListener('mousedown', function (e) {
    userClick = true;
});

// const hitImage = new Image();
// hit.src = 'assets/hit.png';

function hitCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (player.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            player.x + player.width > obstaclesArray[i].x &&
            player.y > canvas.height - 300 - obstaclesArray[i].randomObstacle &&
            player.y + player.height < canvas.height
        ) {
            // ctx.drawImage(hitImage, player.x, player.y, 50, 50);

            ctx.font = '50px Lato';
            ctx.fillStyle = 'white'
            ctx.fillText('Game Over! Your score is ' + displayScore.innerText, canvas.width / 3, canvas.height / 2);
            ctx.clearRect(0, 0,)
            return true;
        }
    }
}

function showScore() {
    Math.ceil(score++);
    displayScore.innerText = score;

}

function updateGameSpeed() {
    if (score >= 200 && score % 200 === 0) {
        gamespeed += 0.2;
    }
}






