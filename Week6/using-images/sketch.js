let img;

function preload() {
    img = loadImage("beach_sunrise.jpg");

}

function setup() {
    createCanvas(800, 800);

    tint(0, 0, 255);
    image(img, 0, 0, 400, 400);
    tint(255, 0, 0);
    // noTint();
    image(img, 400, 0, 400, 400);
}

function draw() {

}
