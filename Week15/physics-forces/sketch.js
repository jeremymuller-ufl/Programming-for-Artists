/**************
 * Demonstrates the use of multiple attractors and particles
 **************/

let positions = [];
let velocities = [];

let attractors = [];


function setup() {
    createCanvas(600, 400);

    for (let i = 0; i < 10; i++) {
        positions[i] = createVector(random(width), random(height));
        velocities[i] = createVector();
    }
    background(0);
}

function draw() {
    background(0);
    noStroke();

    fill(255);
    text('click to add attractors', 10, 20);

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

        fill(0, 255, 0, 190);
        ellipse(pos.x, pos.y, 20, 20);
    }

    checkEdges(); // comment out if you don't want particles bouncing off walls
}

function showAttractors() {
    for (let i = 0; i < attractors.length; i++) {
        const a = attractors[i];
        fill(100, 190, 255);
        ellipse(a.x, a.y, 20, 20);
        
    }
}

function mousePressed() {
    attractors.push(createVector(mouseX, mouseY));
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