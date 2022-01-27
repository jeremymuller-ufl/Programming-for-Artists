let pos;
let vel;

function setup() {
    createCanvas(400, 400);

    pos = createVector(width/2, height/2);

    vel = p5.Vector.random2D();
    vel.mult(4);
}

function draw() {
    background(50);

    noStroke();
    fill("orange");
    ellipse(pos.x, pos.y, 50);

    update();
}

function update() {
    pos.add(vel);

    checkEdges();
}

function checkEdges() {
    if (pos.x <  0 || pos.x > width)
        vel.x *= -1;
    if (pos.y < 0 || pos.y > height)
        vel.y *= -1;
}
