class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velX = random(-1, 1);
        this.velY = random(-1, 1);
        this.radius = 10;
        this.color = color(random(255), random(255), random(255), 200);
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }

    update() {
        this.x += this.velX;
        this.y += this.velY;

        this.checkBoundaries();
    }

    checkBoundaries() {
        if (this.x < 0 || this.x > width)
            this.velX *= -1;
        if (this.y < 0 || this.y > height)
            this.velY *= -1;
    }

    resizeRadius(radius) {
        this.radius = radius;
    }

    randomizeColor() {
        this.color = color(random(255), random(255), random(255), 200);
    }

}
