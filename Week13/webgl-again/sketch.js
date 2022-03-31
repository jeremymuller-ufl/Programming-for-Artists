/******
* loads a texture onto 3d shapes
* creates a scene of a small solar system
******/

let earth_day, earth_clouds;
let mars;
let venus;
let milkway;
let alienPlanet;

function preload() {
    // textures from here: https://www.solarsystemscope.com/textures/
    earth_day = loadImage('textures/8k_earth_daymap.jpg');
    earth_cloud = loadImage('textures/8k_earth_clouds.jpg');
    mars = loadImage('textures/8k_mars.jpg');
    venus = loadImage('textures/4k_venus_atmosphere.jpg');
    milkway = loadImage('textures/8k_stars_milky_way.jpg');
    alienPlanet= loadImage('textures/4k_eris_fictional.jpg');

}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    noFill();
    noStroke();
}

function draw() {
    background(0);

    orbitControl(1.5, 1.5, 0.01);


    texture(milkway);
    sphere(5000);

    directionalLight(255, 255, 255, 500, 0, 0);

    // ambientLight(255);
    // push();
    // translate(0, 0, -5000);
    // texture(milkway);
    // // fill(0, 255, 0);
    // plane(width * 10, height * 10);
    // pop();

    push();
    translate(-900, 0, 0);
    rotateY(frameCount * -0.0005);
    texture(alienPlanet);
    sphere(150);
    pop();


    // earth
    push();
    rotateY(frameCount * 0.001);
    texture(earth_day);
    sphere(100);
    pop();

    // mars
    push();
    translate(-200, 0, 0);
    rotateY(frameCount * 0.006);
    texture(mars);
    sphere(96);
    pop();

    // venus
    push();
    translate(200, 0, 0);
    rotateY(frameCount * 0.007);
    texture(venus);
    sphere(94);
    pop();
}
