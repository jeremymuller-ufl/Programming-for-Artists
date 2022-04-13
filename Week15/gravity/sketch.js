/***********
 * Demonstrates using gravity and other forces
 * The key is to accumulate all forces in a single frame, 
 * then zero out acceleration and accumulate again for next frame.
 * 
 * This is demonstrated in the applyForce() method
 ***********/

let movers = [];

function setup() {
    createCanvas(600, 400);

    for (let i = 0; i < 50; i++)
        movers[i] = new Mover(random(0), height/4);

}

function draw() {
    background(0);

    for (let i = 0; i < movers.length; i++) {
        const mover = movers[i];
        let gravity = createVector(0, 0.1); // create gravity vector pointing down
        gravity.mult(mover.mass); // gravity force is scale by the mass of an object
        
        let wind = createVector(0.05, 0); // add another force

        mover.applyForce(wind);
        mover.applyForce(gravity);
        mover.update();
        mover.show();
    }


}

