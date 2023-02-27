// Empty array to store obstacle objects.
const obstaclesArray = [];
// To determine the frequency of new obstacles to create
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
    update() {
        // If the gamespeed is 5, obstacles will move 5 pixels to the left horizontally 
        // for every frame of animation
        this.x -= gamespeed;
        this.draw();
    }
}

// To create new obstacles in every 120 frame of the game
function movementObstacles() {
    if (frame % divisibleObstacle === 0) {
        obstaclesArray.unshift(new Obstacle);
    }

    // This will call update method which calculate the position of each obstacle.
    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
    // If the array gets longer than 20, this will remove the obstacle on the end of array
    if (obstaclesArray.length > 20) {
        obstaclesArray.pop(obstaclesArray[0]);
    }
    divisibleObstacleSpeed()
}

// This increases the frequency at which new obstacles are created and makes the game harder.
function divisibleObstacleSpeed() {
    if (score >= 500 && score % 500 === 0) {
        divisibleObstacle -= 1;
    }
}
