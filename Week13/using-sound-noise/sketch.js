/***********
 * Demonstrate p5sound
 * Click the mouse to play sound
 * left/right mouse position controls filter pitch
 ***********/

let noise;
let bp_filter;
let reverb;

function setup() {
    createCanvas(500, 500);

    noise = new p5.Noise('white');

    bp_filter = new p5.Filter('bandpass');
    noise.disconnect();
    noise.connect(bp_filter);
    bp_filter.disconnect();

    bp_filter.res(10);

    reverb = new p5.Reverb();
    reverb.process(bp_filter, 3, 2);
}

function draw() {
    background(0);

    reverb.drywet(0.5);

    let filterFreq = map(mouseX, 0, width, 50, 10000);
    bp_filter.freq(filterFreq);

    fill(255);
    textSize(24);
    text("Filter frequency: " + filterFreq.toFixed(2) + " hz", 10, 30);
}

function mousePressed() {
    noise.start();
    noise.amp(0.75, 0.01);
}

function mouseReleased() {
    noise.amp(0, 0.5);
}
