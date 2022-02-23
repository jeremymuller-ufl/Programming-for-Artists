/***********
* Explains how to display and concatenate strings using text()
* click to see the counter go up
* type to see your text on the screen
***********/

let txt = 'Hello!';
let scores = 'Auburn: ' + 62 + ', Florida: ' + 63;

let clicked = 0;

function setup() {
    createCanvas(600, 400);

}

function draw() {
    background(0);

    textSize(32);
    textAlign(LEFT, TOP);

    fill(255);

    text(txt, 10, 10, width, height);

    fill('orange');
    textAlign(LEFT, CENTER);
    text(scores, 10, height/2);

    textAlign(RIGHT, BOTTOM);
    text('number of clicks: ' + clicked, width, height);

}

function keyTyped() {
    txt += key;
}

function keyPressed() {
    if (keyCode == BACKSPACE || keyCode == DELETE) {
        txt = txt.slice(0, -1);
    }
}

function mouseClicked() {
    clicked++;
}
