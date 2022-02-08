class RotatingShape {
    constructor() {
        this.xPos = random(width);
        this.yPos = random(height);
        this.w = random(5, 25);
        this.h = random(5, 25);
        this.color = color(random(255), random(255), random(255), 200);
        this.angle = random(TWO_PI);
    }

    display() {
        rectMode(CENTER);
        // push and pop each shape to change its individual coordinate system

        push();
        fill(this.color);
        translate(this.xPos, this.yPos);
        rotate(this.angle);
        rect(0, 0, this.w, this.h);
        pop();
    }

    update() {
        this.angle += 0.1;
    }
}
