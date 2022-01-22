let x;
let y;

var counter = 0;


function setup() {
    createCanvas(400, 400);

    background(51);

    stroke(255, 150);
    strokeWeight(2);

    x = width/2 - 25;
    y = height/2;

    colorMode(HSL, 255);
}

function draw() {
    // background(51);
    var alpha = map(x, 0, width, 255, 0);
    stroke(255, alpha);
    point(x, y);

    x = x + random(-1, 1);
    y = y + random(-1, 1);

    checkEdges();

    counter++;

    if (counter > 300) {
        noLoop();
    }
}

function mouseClicked() {
    counter = 0;
    loop();

    var startX = x;
    var startY = y;
    x = x + random(-75, 75);
    y = y + random(-75, 75);

    // randomize the color of line
    var hue = map(y, 0, height, 100, 200);
    stroke(hue, 255, 128, alpha);
    line(startX, startY, x, y);
}

function checkEdges () {
    // check x edges
    if (x < 0) {
        x = width;
    } else if (x > width) {
        x = 0;
    }
    // check y edges
    if (y < 0) {
        y = height;
    } else if (y > height) {
        y = 0;
    }
}
