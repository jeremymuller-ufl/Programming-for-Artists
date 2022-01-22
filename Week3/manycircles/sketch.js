const NUM_OF_CIRCLES = 500;

let radius = [];
let xPos = [];
let yPos = [];
let xVel = [];
let yVel = [];
let circleColors = [];

function setup() {
    createCanvas(400, 400);

    background(51);

    for (var i = 0; i < NUM_OF_CIRCLES; i++) {
        radius[i] = random(5, 15);
        xPos[i] = random(width);
        yPos[i] = random(height);
        xVel[i] = random(-1, 1);
        yVel[i] = random(-1, 1);
        circleColors[i] = color(random(255), random(255), random(255), 150);
    }
}

function draw() {
    background(51);

    var m = map(mouseX, 0, width, 0.5, 2);

    for (var i = 0; i < NUM_OF_CIRCLES; i++) {
        noStroke();

        fill(circleColors[i]);

        ellipse(xPos[i], yPos[i], radius[i] * m, radius[i] * m);

        update(i);
    }

    checkEdges();

}

function keyPressed() {

    if (key == 'x') {
        for (var i = 0; i < NUM_OF_CIRCLES; i++) {
            if (Math.random() < 0.1)
                circleColors[i] = color(255, 0, 0);
            else
                circleColors[i] = color(random(255), random(255), random(255), 150);
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

    for (var i = 0; i < NUM_OF_CIRCLES; i++) {
        circleColors[i] = c;
    }
}

function mouseClicked() {
    for (var i = 0; i < NUM_OF_CIRCLES; i++) {
        circleColors[i] = color(random(255), random(255), random(255), 150);
        // xVel[i] = random(-1, 1);
        // yVel[i] = random(-1, 1);
    }
}



function update(index) {
    var m = map(mouseY, 0, height, 0.5, 2);

    xPos[index] += xVel[index] * m;
    yPos[index] += yVel[index] * m;
}

function checkEdges() {
    for (var i = 0; i < NUM_OF_CIRCLES; i++) {
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
