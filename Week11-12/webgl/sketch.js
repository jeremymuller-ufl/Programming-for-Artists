/******
* loads a model created in Blender
******/

let dod; // dodecahedron

/***
* In class I loaded the blob.obj that I created in blender. However, it's
* too large of a file for what github will allow me to upload (too many vertices)
* so I made a low res version for github.
***/
let blob; // <- this takes a while to load because of all the vertices and faces

let blob_lowrez; // <- for github

function preload() {
    dod = loadModel('dodecahedron.obj');
    // blob = loadModel('blob.obj'); //

    blob_lowrez = loadModel('blob-lowrez.obj');
}

function setup() {
    createCanvas(600, 400, WEBGL);

}

function draw() {
    background(200);

    // ambientLight(255);
    directionalLight(255, 255, 255, -200, 0, -200);
    // ambientMaterial(0, 255, 0);
    specularMaterial(0, 255, 0);

    // normalMaterial();

    // scale(map(mouseX, 0, width, 50, 200));
    scale(100);

    noStroke();

    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);

    // model(dod); // view the dodecahedron
    model(blob_lowrez);
}
