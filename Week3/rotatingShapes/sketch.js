const NUM_OF_SHAPES = 250;

let radius = [];
let xPos = [];
let yPos = [];
let xVel = [];
let yVel = [];
let colors = [];
let angles = [];

function setup() {
    createCanvas(400, 400);

    background(51);

    for (let i = 0; i < NUM_OF_SHAPES; i++) {
        xPos[i] = random(width);
        yPos[i] = random(height);
        radius[i] = random(5, 25);
        radius[i] = random(5, 25);
        colors[i] = color(random(255), random(255), random(255), 200);
        angles[i] = random(TWO_PI);
    }

    rectMode(CENTER);

}

function draw() {
    background(51);

    // noStroke();

    for (let i = 0; i < NUM_OF_SHAPES; i++) {
        // push and pop each shape to change its individual coordinate system
        fill(colors[i]);
        push();
        translate(xPos[i], yPos[i]);
        rotate(angles[i]);
        rect(0, 0, radius[i], radius[i]);

        pop();
    }

    update();

}

function keyPressed() {

    if (key == 'x') {
        for (var i = 0; i < NUM_OF_SHAPES; i++) {
            if (Math.random() < 0.1)
                colors[i] = color(255, 0, 0);
            else
                colors[i] = color(random(255), random(255), random(255), 150);
        }
        return;
    }

    let c;
    if (key == 'w') {
        c = color(255, 150);
    } else if (key == 'r') {
        c = color(255, 0, 0, 150);
    } else if (key == 'g') {
        c = color(0, 255, 0, 150);
    } else if (key == 'b') {
        c = color(0, 0, 255, 150);
    }

    for (var i = 0; i < NUM_OF_SHAPES; i++) {
        colors[i] = c;
    }
}

function mouseClicked() {
    for (var i = 0; i < NUM_OF_SHAPES; i++) {
        colors[i] = color(random(255), random(255), random(255), 150);
        // xVel[i] = random(-1, 1);
        // yVel[i] = random(-1, 1);
    }
}

function update(index) {
    var m = map(mouseY, 0, height, 0.5, 2);

    for (var i = 0; i < NUM_OF_SHAPES; i++) {
        angles[i] += 0.1 * m;
    }
}

function checkEdges() {
    for (var i = 0; i < NUM_OF_SHAPES; i++) {
        if (xPos[i] < 0) {
            xPos[i] = 1;
            xVel[i] *= -1;
        } else if (xPos[i] > width) {
            xPos[i] = width - 1;
            xVel[i] *= -1;
        }

        if (yPos[i] < 0) {
            yPos[i] = 1;
            yVel[i] *= -1;
        } else if (yPos[i] > height) {
            yPos[i] = height -1;
            yVel[i] *= -1;
        }
    }


}
