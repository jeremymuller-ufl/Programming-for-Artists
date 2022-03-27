/***********
 * This adds displays the number of touches
 * Touches are similar to mouse clicks except that
 * mouse clicks are singular and on mobile devices you can have multiple touches
 ***********/

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(0);

    fill(255);
    textSize(50);
    text(touches.length + " touches", 50, height/2);

    for (let i = 0; i < touches.length; i++) {
        fill(0, 255, 0, 200);
        noStroke();
        ellipse(touches[i].x, touches[i].y, 100, 100);
    }
}
