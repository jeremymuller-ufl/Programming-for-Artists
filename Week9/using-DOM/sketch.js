/***********
 * This adds DOM elements to control particles
 * slider controls radius
 * button randomize color
 ***********/

const numOfParticles = 200;
let particles = [];

let radiusSlider;
let buttonBG;


function setup() {
    createCanvas(640, 480);

    radiusSlider = createSlider(5, 50, 10);

    buttonBG = createButton('randomize');
    buttonBG.mousePressed(randomColor);

    for (let i = 0; i < numOfParticles; i++) {
        particles[i] = new Particle(random(width), random(height));
    }

}

function draw() {
    background(0);

    let m = radiusSlider.value();

    for (let i = 0; i < numOfParticles; i++) {
        particles[i].display();
        particles[i].update();

        particles[i].resizeRadius(m);
    }

}

function randomColor() {
    for (let i = 0; i < numOfParticles; i++) {
        particles[i].randomizeColor();
    }
}
