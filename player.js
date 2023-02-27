
// vy determines the velocity of player
class Player {
    constructor() {
        this.x = 200;
        this.y = 200;
        this.vy = 0;
        this.width = 70;
        this.height = 70;
        this.weight = 1.5;
        this.jumping = false;
    }

    // vy will increase by weight, y (player position) will increase by vy
    // this runs like a loop,
    update() {
        // if statement so that the player will not fall of frame
        if (this.y > canvas.height - (this.height + 300)) {
            this.y = canvas.height - (this.height + 300);
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        // set limitations when jumping 
        if (this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.vy = 0;
        }
        if (userClick) this.jump();
    }
    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    jump() {
        this.vy -= 2.5;
        setTimeout(function () {
            userClick = false;
        }, 300)
    }

}
// new keyword will call the class constructor, create a new blank object and create new properties as defined
const player = new Player();