let cellSize = 50;

function setup() {
    createCanvas(400, 600);

    background(0);

    angleMode(DEGREES);
    // rectMode(CENTER);



    // for (let y = 0; y < height; y += cellSize) {
    //     for (let x = 0; x < width; x += cellSize) {
    //         push();
    //         translate(x, y);
    //
    //         rotate(random(-y, y) * 0.1);
    //         rect(0, 0, cellSize, cellSize);
    //
    //         pop();
    //     }
    // }
}

function draw() {
    background(0);
    randomSeed(100000);
    stroke(255);
    strokeWeight(2);
    noFill();


    var m = map(mouseX, 0, width, 0, 0.5);


    for (let y = 0; y < height; y += cellSize) {
        for (let x = 0; x < width; x += cellSize) {
            push();
            translate(x, y);

            rotate(random(-y, y) * m);
            rect(0, 0, cellSize, cellSize);

            pop();
        }
    }
}
