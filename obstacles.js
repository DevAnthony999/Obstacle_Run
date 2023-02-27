const obstaclesArray = [];
let divisibleObstacle = 120;

class Obstacle {
    constructor() {
        this.randomObstacle = (Math.random() * canvas.height / 7 + 75);
        this.x = canvas.width;
        this.width = 50;
        this.color = 'black';
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, canvas.height - this.randomObstacle - 300, this.width, this.randomObstacle);

    }
    // update will push obstacles to the left depending on gamespeed.
    update() {
        this.x -= gamespeed;
        this.draw();
    }
}


// to create new obstacles in every 50 frame of the game
function movementObstacles() {
    if (frame % divisibleObstacle === 0) {
        obstaclesArray.unshift(new Obstacle);
    }

    // this will cycle through the entire obstacles array and call update method which calculate the position of each obstacle.
    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 20) {
        obstaclesArray.pop(obstaclesArray[0]);
    }
    divisibleObstacleSpeed()
}

function divisibleObstacleSpeed() {
    if (score >= 500 && score % 500 === 0) {
        divisibleObstacle -= 1;
    }
}
