let radius = 100;
let count = 0;
let colors = [];

function setup() {
    createCanvas(400, 400);

    background(0);

    angleMode(DEGREES);

    for (let i = 0; i < 4; i++) {
        colors[i] = color(random(255), random(255), random(255), 128);
    }
}

function draw() {
    background(0);


    for (let i = 0; i < 10; i++) {
        let spacing = map(i, 0, 9, 30, 90);
        let c = getColor(i);
        drawShape(i * 20 + 100, height/2, spacing, c);
    }

}

function getColor(index) {
    // let rIndex = floor(random(colors.length));
    return colors[index % colors.length];
}

function drawShape(centerX, centerY, spacing, color, rotation) {
    stroke(255);
    strokeWeight(3);

    fill(color, 100);

    push();
    translate(centerX, centerY);
    rotate(rotation);

    let i = 0;

    beginShape();
    for (let a = 0; a < 360; a += spacing) {
        let rad;
        if (i % 2 == 0)
            rad = radius;
        else
            rad = radius/2;
        let x = sin(a) * rad;
        let y = cos(a) * rad;
        vertex(x, y);

        i++;
    }
    endShape(CLOSE);
    pop();
}
