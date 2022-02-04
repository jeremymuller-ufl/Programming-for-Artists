let tOffset = 0;

function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(51);

    let r = random(-20, 20);

    let n = noise(tOffset);
    let y = map(n, 0, 1, 0, height);

    ellipse(width/2, y, 50, 50);

    tOffset += 0.01;
}
