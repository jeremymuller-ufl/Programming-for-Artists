/***********
 * Demonstrate p5sound
 * Creates a monosynth
 * click on the piano keys to play the synth
 ***********/

let synth;
let lop_filter;
let reverb;

let piano;
let select;

function setup() {
    createCanvas(800, 500);

    synth = new p5.MonoSynth();
    synth.oscillator.setType("sine");

    synth.setADSR(0.01, 0.01, 1.0, 0.01);

    lop_filter = new p5.Filter('lowpass');

    reverb = new p5.Reverb();
    reverb.process(lop_filter, 3, 2);

    piano = new Nexus.Piano('#keyboard', {
        'size': [800, 250],
        'mode': 'button', // 'button', 'toggle', or 'impulse'
        'lowNote': 41,
        'highNote': 72
    });

    piano.on('change', playSynth);

    select = new Nexus.Select('#wavetype', {
        'size': [100, 30],
        'options': ['sine', 'triangle', 'square', 'sawtooth']
    });

    select.on('change', function(v) {
        synth.oscillator.setType(v.value);
    });
}

function draw() {
    // background(0);

    reverb.drywet(0.5);

    let f = map(mouseY, 0, height, 1000, 50);

    let filterFreq = map(mouseX, 0, width, 50, 10000);
    lop_filter.freq(filterFreq);


}

function playSynth(v) {
    if (v.state) {
        let freq = midiToFreq(v.note); // gotta convert to frequency first
        synth.triggerAttack(freq);
    } else {
        synth.triggerRelease();
    }
}
