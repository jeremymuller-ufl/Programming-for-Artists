let colors = [];

function setup() {
    createCanvas(400, 400);

    background(0);

    colors[0] = color("orange");
    colors[1] = color("blue");
    colors[2] = color("red");
    colors[3] = color("green");

    noStroke();
    let previousIndex = 4;
    for (let x = 0; x < width; x += 10) {
        let currentIndex = floor(random(4));
        while (previousIndex == currentIndex) {
            currentIndex = floor(random(4));
        }
        previousIndex = currentIndex;

        fill(colors[currentIndex]);
        rect(x, 0, 10, height);
    }
}
