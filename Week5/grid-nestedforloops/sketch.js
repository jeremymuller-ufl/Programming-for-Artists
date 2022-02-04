let cellSize = 10;


function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(50);

    noStroke();
    fill("orange");
    // noFill();
    // stroke("orange");


    for (let y = 0; y <= height / cellSize; y++) {
        for (let x = 0; x <= width / cellSize; x++) {
            ellipse(x * cellSize, y * cellSize, cellSize * 0.75);
        }
    }


    // for (let y = 0; y <= height; y += 20) {
    //     for (let x = 0; x <= width; x += 20) {
    //         rect(x, y, 20, 20);
    //         // ellipse(x, y, 10);
    //     }
    // }


}
