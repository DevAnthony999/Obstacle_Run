let player = document.getElementById('player');
let obstacle = document.querySelector('.obstacles');
let displayScore = document.getElementById('score');
let buildingsBackground = document.getElementById('game-background');
let groundMovement = document.getElementById('ground-background');
let score = 0;

function jump() {
    if (player.classList != 'animate') {
        player.classList.add('animate')
    }

    setTimeout(function () {
        player.classList.remove('animate')
    }, 500)
}

let lose = setInterval(function () {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
    let playerWidth = parseInt(window.getComputedStyle(player).getPropertyValue('width'));
    let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));

    console.log(playerBottom);

    if (obstacleLeft < 100 && obstacleLeft > 0 && playerBottom >= 241) {
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none';
        player.style.animation = 'none';
        player.style.display = 'none';
        buildingsBackground.style.animation = 'none';
        groundMovement.style.animation = 'none';
        displayScore.style.display = 'none'
        alert('Game over! Your score is ' + score);
    }
}, 10);

function showScore() {
    score++;
    displayScore.innerText = score;
}

setInterval(showScore, 100);