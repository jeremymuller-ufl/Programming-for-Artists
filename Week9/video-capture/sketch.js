/***********
 * Uses webcam
 * draws an ellipse at some of the pixels based on the color
 ***********/

let capture;

function setup() {
    createCanvas(640, 480);

    capture = createCapture(VIDEO);
    capture.hide(); // hide video so it doesn't create another DOM element

}

function draw() {
    background(255);

    capture.loadPixels();

    let count = 0;

    let stepSize = 20;

    for (let y = 0; y <= height; y += stepSize) {
        for (let x = 0; x <= width; x += stepSize) {
            let index = (x + y * width) * 4;
            let r = capture.pixels[index];
            let g = capture.pixels[index+1];
            let b = capture.pixels[index+2];
            let a = capture.pixels[index+3];

            noStroke();
            let c = color(r, g, b, 200);
            fill(c);
            let radius = map(b, 0, 255, stepSize * 1.1, 1);
            ellipse(x, y, radius, radius);
            // rect(x, y, radius, radius);

        }
    }

    capture.updatePixels();

}
