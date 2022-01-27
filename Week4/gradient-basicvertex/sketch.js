let pos = [];

function setup() {
    createCanvas(400, 400);

    for (let i = 0; i < 10; i++) {
        pos[i] = p5.Vector.random2D();
        pos[i].mult(20);
    }
}

function draw() {
    // background(50);
    drawBG();

    push();
    translate(10, height/2);
    // scale(2);

    // fill("orange");
    // noStroke();
    stroke("orange");
    strokeWeight(3);
    noFill();

    beginShape();
    for (let x = 0; x < 8; x++) {
        vertex(x * 50, random(-10, 10));
    }
    endShape();


    pop();




}

function drawBG() {
    let startColor = color("purple");
    let endColor = color("blue");

    for (let y = 0; y <= height; y++) {
        let c = lerpColor(startColor, endColor, y / height);

        stroke(c);
        line(0, y, width, y);
    }
}
