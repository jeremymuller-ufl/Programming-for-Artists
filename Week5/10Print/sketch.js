/*
    This sketch draws variation on 10Print
    by Jeremy Muller
    75% chance of drawing lines (forward slash/back slash)
    25% chance of drawing ellipse
*/

let x = 0;
let y = 0;
let spacing = 20;


function setup() {
    createCanvas(400, 400);

    background(0);
}

function draw() {
    stroke(255);
    strokeWeight(2);

    if (random(1) < 0.75) {
        if (random(1) < 0.5) {
            line(x, y, x + spacing, y + spacing);
        } else {
            line(x, y+spacing, x+spacing, y);
        }
    } else {
        if (random(1) < 0.5) {
            noFill();
        } else {
            fill(255);
            ellipse(x, y, spacing / 2);

        }
        // ellipse(x, y, spacing / 2);
    }


    x += spacing;
    if (x > width) {
        y += spacing;
        x = 0;
    }
}
