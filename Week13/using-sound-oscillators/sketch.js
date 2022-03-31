/***********
 * Demonstrate p5sound
 * Click the mouse to play sound
 * Up/down mouse position controls oscillator pitch
 * left/right mouse position controls filter pitch
 ***********/

let osc;
let lop_filter;
let reverb;

function setup() {
    createCanvas(500, 500);

    osc = new p5.Oscillator('sawtooth');
    lop_filter = new p5.Filter('lowpass');

    osc.disconnect();
    osc.connect(lop_filter);
    lop_filter.disconnect();

    reverb = new p5.Reverb();
    reverb.process(lop_filter, 3, 2);
}

function draw() {
    background(0);

    reverb.drywet(0.5);

    let f = map(mouseY, 0, height, 1000, 50);
    osc.freq(f);

    let filterFreq = map(mouseX, 0, width, 50, 10000);
    lop_filter.freq(filterFreq);

    fill(255);
    textSize(24);
    text("Osc frequency: " + f.toFixed(2) + " hz", 10, 30);
    text("Filter frequency: " + filterFreq.toFixed(2) + " hz", 10, 60);
}

function mousePressed() {
    osc.start();
    osc.freq(440);
    osc.amp(0.5, 0.01);
}

function mouseReleased() {
    osc.amp(0, 0.5);
}
