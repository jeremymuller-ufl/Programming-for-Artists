/***********
* Loads an image
* alternates pixels drawing image color or rearranging r, g, b
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

    let count = 0;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let index = x + y * width;
            index *= 4;
            let r = img.pixels[index];
            let g = img.pixels[index+1];
            let b = img.pixels[index+2];
            let a = img.pixels[index+3];

            if (count % 2 == 0) {
                pixels[index] = r;
                pixels[index+1] = g;
                pixels[index+2] = b;
                pixels[index+3] = a;
            } else {
                pixels[index] = g;
                pixels[index+1] = b;
                pixels[index+2] = r;
                pixels[index+3] = 255;
            }

            count++;
        }
    }
    updatePixels();

}
