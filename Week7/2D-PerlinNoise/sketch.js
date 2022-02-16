/***********
* Uses 2D Perlin Noise
* draws a square at every pixel at size 1pix
* (warning, this is slow...see the pixel array version for better performance)
***********/

let incr = 0.01;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);

    let yOff = 0;
    for (let y = 0; y < height; y++) {
        let xOff = 0;
        yOff += incr;

        for (let x = 0; x < width; x++) {
            xOff += incr;
            let c = noise(xOff, yOff) * 255;

            fill(c);
            noStroke();
            rect(x, y, 1, 1);
        }
    }
}
