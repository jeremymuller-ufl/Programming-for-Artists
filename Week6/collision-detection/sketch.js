let circleX, circleY;
let radius = 50;
let mouseRadius = 25;

function setup() {
    createCanvas(400, 400);

    background(51);

    circleX = width/2;
    circleY= height/2;
}

function draw() {
    background(200);

    fill(0, 0, 255, 170);
    ellipse(mouseX, mouseY, mouseRadius * 2);

    let d = dist(circleX, circleY, mouseX, mouseY); // get distance between the two points
    if (d < radius + mouseRadius) // check if circles are colliding
        fill(255, 0, 0, 170);
    else
        fill(0, 255, 0, 170);

    ellipse(circleX, circleY, radius * 2);

}
