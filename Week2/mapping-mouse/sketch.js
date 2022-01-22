// mouse controls x and y speeds

var xPos = 0;
var yPos = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);

    fill(255, 0, 0);
    noStroke();

    var x = sin(xPos) * 50 + width/2;
    var y = cos(yPos) * 50 + height/2;
    ellipse(x, y, 100, 100);

    var incrementX = map(mouseX, 0, width, 0.05, 0.5);
    var incrementY = map(mouseY, 0, height, 0.05, 0.5);

    xPos += incrementX;
    yPos += incrementY;
}
