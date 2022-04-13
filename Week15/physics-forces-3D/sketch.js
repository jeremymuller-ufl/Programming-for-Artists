/**************
 * Demonstrates the use of multiple attractors and particles in 3D
 * This is the same as the other physics-forces example but in 3D using the 'z' component of the vector
 * 
 * Controls:
 * Mouse click/drag to change the view of the scene
 * Spacebar will place attractor where mouse position currently is (with random z position)
 **************/

let positions = [];
let velocities = [];

let attractors = [];


function setup() {
    createCanvas(600, 400, WEBGL); // using WEBGL for 3D here

    // Because of WEBGL, the origin point is now in the center of the canvas
    for (let i = 0; i < 20; i++) {
        // positions[i] = createVector(random(-width / 2, width / 2), random(-height / 2, height / 2), random());
        positions[i] = p5.Vector.random3D(); // creates a random 3d unit vector (length/magnitude of 1)
        positions[i].mult(random(200));
        velocities[i] = createVector();
    }

    let a = p5.Vector.random3D();
    a.mult(200);
    attractors.push(a); // start with one randomly placed attractor

    background(0);
}

function draw() {
    background(0);
    noStroke();

    orbitControl(); // click and drag to look around the scene

    showAttractors();

    // Get a vector pointing to the target by Vector subtraction:
    // direction = target - position

    for (let i = 0; i < positions.length; i++) {
        const pos = positions[i];

        let accSum = createVector(); // create a variable to accumulate all the forces in the canvas
        for (let j = 0; j < attractors.length; j++) {
            const attractor = attractors[j];
            let acc = p5.Vector.sub(attractor, pos);
            acc.normalize(); // normalize will put vector as a unit vector (length/magnitude of 1)
            acc.mult(0.2); // scale the acceleration down a bit
            accSum.add(acc);
        }

        velocities[i].add(accSum);
        velocities[i].limit(5); // limit velocity so it doesn't keep speeding up
        pos.add(velocities[i]);

        fill(0, 255, 0, 210);
        push();
        translate(pos.x, pos.y, pos.z);
        sphere(20);
        pop();

        // ellipse has no 3D component so I'm using translate() and sphere() instead
        // ellipse(pos.x, pos.y, 20, 20); 
    }

    // checkEdges(); // comment out if you don't want particles bouncing off walls
}

function showAttractors() {
    for (let i = 0; i < attractors.length; i++) {
        const a = attractors[i];
        fill(100, 190, 255);
        push();
        translate(a.x, a.y, a.z);
        sphere(20);
        pop();
        // ellipse has no 3D component so I'm using translate() and sphere() instead
        // ellipse(a.x, a.y, 20, 20);
    }
}

function keyPressed() {
    if (key == ' ') { // add attractor when space bar is pressed
        attractors.push(createVector(mouseX - width / 2, mouseY - height / 2, random(-200, 200)));
    }
}

function checkEdges() {
    for (let i = 0; i < positions.length; i++) {
        const position = positions[i];
        const velocity = velocities[i];
        if (position.x < 0 || position.x > width)
            velocity.x *= -1;

        if (position.y < 0 || position.y > height)
            velocity.y *= -1;

    }

}