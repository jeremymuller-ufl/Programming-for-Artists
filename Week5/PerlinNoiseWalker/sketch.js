let x, y;

let tx, ty;

function setup() {
    createCanvas(400, 400);

    tx = 0;
    ty = 10000;
}

function draw() {
    background(51);
    fill("orange");

    x = map(noise(tx), 0, 1, 0, width);
    y = map(noise(ty), 0, 1, 0, height);

    ellipse(x, y, 50, 50);

    tx += 0.01;
    ty += 0.01;
}
