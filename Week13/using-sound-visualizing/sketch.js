/***********
 * Demonstrate p5sound
 * Loads sound files
 * displays their waveform and spectrum
 *
 * move the mouse to control panning, reverb, filtering
 ***********/

let lop_filter;
let reverb;

let fft;

let john_cage, laurie, radiohead;

let cageButton, laurieButton, radioheadButton;

function preload() {
    john_cage = loadSound('sounds/cage.mp3');
    laurie = loadSound('sounds/OSuperman.mp3');
    radiohead = loadSound('sounds/Idioteque.mp3');
}

function setup() {
    createCanvas(500, 500);

    fft = new p5.FFT(); // use this to get the audio waveform and spectrum

    radiohead.disconnect();

    lop_filter = new p5.Filter('bandpass');
    lop_filter.res(5);
    radiohead.connect(lop_filter);
    lop_filter.disconnect();

    john_cage.disconnect();
    laurie.disconnect();


    john_cage.setVolume(1.5);
    reverb = new p5.Reverb();
    reverb.process(john_cage, 3, 2);
    reverb.process(laurie, 3, 2);
    reverb.process(lop_filter, 3, 2);

    cageButton = createButton('John Cage');
    cageButton.position(10, 10);
    cageButton.mousePressed(playCage);

    laurieButton = createButton('Laurie Anderson');
    laurieButton.position(10, 30);
    laurieButton.mousePressed(playLaurie);

    radioheadButton = createButton('Radiohead');
    radioheadButton.position(10, 50);
    radioheadButton.mousePressed(playRadiohead);


}

function draw() {
    background(0);

    let panning = map(mouseX, 0, width, -1, 1);
    panning = constrain(panning, -1, 1);
    john_cage.pan(panning);
    laurie.pan(panning);

    reverb.drywet(mouseY / height);

    let filterFreq = map(mouseX, 0, width, 50, 10000);
    lop_filter.freq(filterFreq);

    let spectrum = fft.analyze();
    noStroke();
    fill(0, 255, 0);
    for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, width);
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h);
    }

    let waveform = fft.waveform();
    noFill();
    stroke(255);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, height, 0);

        vertex(x, y);
    }
    endShape();

}

function playCage() {
    if (john_cage.isPlaying())
        john_cage.pause();
    else
        john_cage.play();
}

function playLaurie() {
    if (laurie.isPlaying())
        laurie.pause();
    else
        laurie.play();
}

function playRadiohead() {
    if (radiohead.isPlaying())
        radiohead.pause();
    else
        radiohead.play();
}
