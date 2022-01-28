let pos = [];
let radius = 10;
let originalRadius = radius;

function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(50);

    noStroke();
    fill("orange");

    if (keyIsPressed && key == 'r') {
        console.log("pressed!");
        radius += 0.1;
    }

    for (let i = 0; i < pos.length; i++) {
        ellipse(pos[i].x, pos[i].y, radius);
    }

}

function mouseClicked() {
    let v = createVector(mouseX, mouseY);
    pos.push(v);
}

function keyPressed() {
    if (key == 'd') {
        pos.pop();
        radius = originalRadius;
    }
}
