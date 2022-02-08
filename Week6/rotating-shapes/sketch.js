const NUM_OF_SHAPES = 250;

let rectShapes = [];

function setup() {
    createCanvas(400, 400);

    background(51);

    for (let i = 0; i < NUM_OF_SHAPES; i++) {
        rectShapes[i] = new RotatingShape();
    }

}

function draw() {
    background(51);

    for (let i = 0; i < NUM_OF_SHAPES; i++) {
        rectShapes[i].display();
        rectShapes[i].update();
    }
}

function mouseClicked() {
    for (var i = 0; i < NUM_OF_SHAPES; i++) {
        rectShapes[i].color = color(random(255), random(255), random(255), 150);
    }
}
