/***********
 * Uses webcam
 * displays the video on the canvas
 ***********/

let capture;

function setup() {
    createCanvas(640, 480);

    capture = createCapture(VIDEO);
    capture.hide(); // hide video so it doesn't create another DOM element

}

function draw() {
    background(255);

    image(capture, 0, 0);
    filter(THRESHOLD); // filter effect on  the video

}
