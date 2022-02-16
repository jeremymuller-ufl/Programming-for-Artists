/***********
* Uses 2D Perlin Noise
* and the Pixel array so that it loads much faster
*
* Use the mouseX position to change the noise increment
***********/

let incr = 0.01;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);

    incr = map(mouseX, 0, width, 0.009, 0.1);

    loadPixels();

    let yOff = 0;
    for (let y = 0; y < height; y++) {
        let xOff = 0;
        yOff += incr;

        for (let x = 0; x < width; x++) {
            xOff += incr;
            let c = noise(xOff, yOff) * 255;

            // pixels array is laid out in a single row, not a grid
            // so to find the correct array index use this formula: x + y * width
            let index = (x + y * width);

            // pixels in p5js each have 4 array slots (r, g, b, a)
            // to account for each pixel we need to multiply by 4
            index *= 4;

            pixels[index] = c;
            pixels[index+1] = c;
            pixels[index+2] = c;
            pixels[index+3] = 255; // <----- index 3 controls pixel alpha
        }
    }
    updatePixels();
}
