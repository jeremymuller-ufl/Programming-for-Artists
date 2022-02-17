/***********
* Loads an image
* gets rgb from an area of pixels over the image
* draws that to the screen, everything else is drawn black
*
* Move the mouse around to spotlight the image
***********/

let img;

function preload() {
    img = loadImage("../_img/purple_flower.jpg");
}

function setup() {
    createCanvas(img.width, img.height);
}

function draw() {
    loadPixels();
    img.loadPixels();

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let d = dist(x, y, mouseX, mouseY);

            let brightness;
            let index = x + y * width;
            index *= 4;
            let r = img.pixels[index];
            let g = img.pixels[index+1];
            let b = img.pixels[index+2];

            if (d < 25) {
                pixels[index] = r;
                pixels[index+1] = g;
                pixels[index+2] = b;
                pixels[index+3] = 255;
            } else {
                let ratio = 25 / d;
                pixels[index] = r * ratio;
                pixels[index+1] = g * ratio;
                pixels[index+2] = b * ratio;
                pixels[index+3] = 255;
            }
        }
    }
    updatePixels();

}
