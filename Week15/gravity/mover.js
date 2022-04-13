class Mover {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.mass = random(5, 20);

    }

    show() {
        fill(0, 255, 0, 200);
        noStroke();
        ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        this.checkEdges();
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    checkEdges() {
        if (this.position.x > width) {
            this.position.x = width;
            this.velocity.x *= -1;
        } else if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x *= -1;
        }

        if (this.position.y > height) {
            this.position.y = height;
            this.velocity.y *= -1;
        } else if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y *= -1;
        }
    }
}