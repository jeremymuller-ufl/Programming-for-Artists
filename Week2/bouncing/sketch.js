var radius = 20;
var xPos, yPos;
var xDir, yDir;

function setup() {
    createCanvas(200, 200);

    background(51);

    xPos = width/2;
    yPos = height/2;

    xDir = random(-2, 2);
    yDir = random(-2, 2);
}

function draw() {
    background(51);
    fill(255, 0, 0);
    ellipse(xPos, yPos, radius, radius);

    update();
    checkEdges();
}

function update() {
    xPos += xDir;
    yPos += yDir;
}

function checkEdges () {
    // check x edges
    if (xPos < 0) {
        xPos = 1;
        xDir *= -1;
    } else if (xPos > width) {
        xPos = width - 1;
        xDir *= -1;
    }
    // check y edges
    if (yPos < 0) {
        yPos = 1;
        yDir *= -1;
    } else if (yPos > height) {
        yPos = height - 1;
        yDir *= -1;
    }
}
