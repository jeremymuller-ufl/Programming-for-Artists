/***********
 * Uses webcam
 ***********/

let capture;
let mic;

function setup() {
    createCanvas(640, 480);

    capture = createCapture(VIDEO);
    capture.hide();

    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(255);

    image(capture, 0, 0);
    // filter(THRESHOLD);

    let volume = mic.getLevel();

    fill(255);
    let radius = 15 + volume * 1000;
    ellipse(width/2, height/2, radius, radius);
}
