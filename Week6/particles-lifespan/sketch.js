let particles = [];

function setup() {
    createCanvas(400, 400);

    background(51);

}

function draw() {
    background(51);

    if (mouseIsPressed) {
        let p = new Particle(mouseX, mouseY);
        particles.push(p);
    }

    for (let i = 0; i < particles.length; i++) {
        particles[i].display();
        particles[i].update();
        particles[i].checkEdges();
    }

    for (let i = 0; i < particles.length; i++) {
        if (particles[i].lifespan < 0) {
            particles.splice(i, 1);
        }
    }

}

// function keyPressed() {
//
//     if (key == 'x') {
//         for (var i = 0; i < NUM_OF_PARTICLES; i++) {
//             if (Math.random() < 0.1)
//                 circleColors[i] = color(255, 0, 0);
//             else
//                 circleColors[i] = color(random(255), random(255), random(255), 150);
//         }
//         return;
//     }
//
//     let c;
//     if (key == 'w') {
//         c = color(255, 150);
//     } else if (key == 'r') {
//         c = color(255, 0, 0, 150);
//     } else if (key == 'g') {
//         c = color(0, 255, 0, 150);
//     } else if (key == 'b') {
//         c = color(0, 0, 255, 150);
//     }
//
//     for (var i = 0; i < NUM_OF_PARTICLES; i++) {
//         circleColors[i] = c;
//     }
// }
