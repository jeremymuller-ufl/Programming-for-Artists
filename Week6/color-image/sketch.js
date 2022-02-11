let img;
let x = 0;

function preload() {
    img = loadImage("purple_flower.jpg");
}

function setup() {
    createCanvas(800, 400);



    for (let y = 0; y < height; y++) {
        let c = img.get(random(img.width), y);
        fill(c);
        noStroke();
        rect(0, y, width, 1);
    }

    // image(img, 0, 0, 400, 200);
}
