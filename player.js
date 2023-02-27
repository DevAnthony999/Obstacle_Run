// classes are bluprint to create many similar objects
// vy determines the vertical speed of the player
// weight will be constantly pulling the player down as it jumps
class Player {
    // Constructor function is used to initialize the properties of the object when it is created using the 'new' keyword.
    constructor() {
        this.x = 200;
        this.y = 200;
        this.vy = 0;
        this.width = 70;
        this.height = 70;
        this.weight = 1.5;
    }

    // update will calculate the position and speed of player for each animation frame
    update() {
        // If the player object is at the bottom of the screen, set its vertical position and speed to 0 so that it doesn't fall off the screen.
        if (this.y > canvas.height - (this.height + 300)) {
            this.y = canvas.height - (this.height + 300);
            this.vy = 0;
        } else {
            // this will make the player fall as it jumps, it acts as the gravity of the game
            // vy then is added to the players vertical position making it move down
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if (userClick) this.jump();
    }
    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    jump() {
        // This will make the player jump by reducing its vertical speed.
        // setTimout is used to prevent the user for double clicking.
        this.vy -= 2.5;
        setTimeout(function () {
            userClick = false;
        }, 300)
    }

}
// new keyword will call the class constructor, create a new blank object and create new properties as defined
const player = new Player();