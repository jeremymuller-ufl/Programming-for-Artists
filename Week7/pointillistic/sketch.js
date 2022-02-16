/***********
* Loads an image
* randomly chooses an x,y to get pixel color
* draws an ellipse of varying size at that pixel location
*
* Use the mouseX to control ellipse size
* Use the mouseY to control ellipse transparency
***********/

let img;
let x = 0;

function preload() {
    img = loadImage("../_img/sanibelflower.jpg");
}

function setup() {
    createCanvas(img.width, img.height);

    // image(img, 0, 0);
    rectMode(CENTER);
}

function draw() {
    for (let i = 0; i < 20; i++) {
        let x = floor(random(width));
        let y = floor(random(height));

        let size = map(mouseX, 0, width, 5, 40);
        let alpha = map(mouseY, 0, height, 5, 255);

        // 0, 1, 2, 3 = r, g, b, a

        let pixColor = img.get(x, y);
        fill(pixColor[0], pixColor[1], pixColor[2], alpha); // <--- use pixel color but give it some alpha
        noStroke();
        ellipse(x, y, size);
        // rect(x, y, size, size); // try it as rectangle instead
    }
}
