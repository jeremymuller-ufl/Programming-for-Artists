class Particle {
    constructor(xPos) {
        this.id = random(1);
        this.radius = random(5, 15);
        // this.radius = 15;
        this.xPos = xPos;
        this.yPos = random(height);
        this.xVel = random(-2, 2);
        this.yVel = random(-2, 2);
        this.partColor = color(255, 255, 255, 150);
    }

    newId() {
        this.id = random(1);
    }

    display() {
        if (this.id < 0.33) {
            noStroke();
            fill(this.partColor);
            ellipse(this.xPos, this.yPos, this.radius * 2, this.radius * 2);
        } else if (this.id < 0.66) {
            noFill();
            stroke(255);
            strokeWeight(4);
            ellipse(this.xPos, this.yPos, this.radius * 0.5, this.radius * 0.5);
            ellipse(this.xPos, this.yPos, this.radius * 1.75, this.radius * 1.75);
            ellipse(this.xPos, this.yPos, this.radius * 2.5, this.radius * 2.5);
        } else {
            noFill();
            stroke(255);
            strokeWeight(4);
            ellipse(this.xPos, this.yPos, this.radius * 0.5, this.radius * 0.5);
            ellipse(this.xPos, this.yPos, this.radius * 1.75, this.radius * 1.75);
        }

    }

    update() {
        if (this.id < 0.5) {
            this.xPos += this.xVel;
        } else {
            this.yPos += this.yVel;            
        }

    }

    checkEdges() {
        if (this.xPos < 0) {
            this.xPos = 1;
            this.xVel *= -1;
        } else if (this.xPos > width) {
            this.xPos = width - 1;
            this.xVel *= -1;
        }

        if (this.yPos < 0) {
            this.yPos = 1;
            this.yVel *= -1;
        } else if (this.yPos > height) {
            this.yPos = height -1;
            this.yVel *= -1;
        }
    }
}
