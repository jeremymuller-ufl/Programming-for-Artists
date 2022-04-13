/**************
 * Demonstrates animation based on easing functions
 * https://easings.net/
 * 
 * Change slider to vary the speed
 ***************/

let loc1, loc2, loc3, loc4, loc5;
let spacing;

let sliderSpeed;

function setup() {
    createCanvas(600, 400);

    spacing = height / 6;

    loc1 = createVector(20, spacing);
    loc2 = createVector(20, spacing * 2);
    loc3 = createVector(20, spacing * 3);
    loc4 = createVector(20, spacing * 4);
    loc5 = createVector(20, spacing * 5);

    colorMode(HSB, 255);

    sliderSpeed = createSlider(60, 600, 200);

}

function draw() {
    background(51);

    let deltaX = (frameCount % sliderSpeed.value()) / sliderSpeed.value(); // getting time and keeping it between 0 and 1


    // ease out quart
    fill(255);
    textSize(18);
    text('ease out quart', 10, spacing - 30);
    fill(75, 255, 255);
    loc1.x = map(easeOutQuart(deltaX), 0, 1, 20, width - 20);
    ellipse(loc1.x, loc1.y, 30, 30);

    // ease in & out quint
    fill(255);
    textSize(18);
    text('ease in & out quint', 10, spacing * 2 - 30);
    fill(150, 255, 255);
    loc2.x = map(easeInOutQuint(deltaX), 0, 1, 20, width - 20);
    ellipse(loc2.x, loc2.y, 30, 30);

    // ease in & out back
    fill(255);
    textSize(18);
    text('ease in & out back', 10, spacing * 3 - 30);
    fill(200, 255, 255);
    loc3.x = map(easeInOutBack(deltaX), 0, 1, 20, width - 20);
    ellipse(loc3.x, loc3.y, 30, 30);

    // ease out bounce
    fill(255);
    textSize(18);
    text('ease out bounce', 10, spacing * 4 - 30);
    fill(245, 255, 255);
    loc4.x = map(easeOutBounce(deltaX), 0, 1, 20, width - 20);
    ellipse(loc4.x, loc4.y, 30, 30);

    // ease in & out elastic
    fill(255);
    textSize(18);
    text('ease in & out elastic', 10, spacing * 5 - 30);
    fill(128, 255, 255);
    loc5.x = map(easeInOutElastic(deltaX), 0, 1, 20, width - 20);
    ellipse(loc5.x, loc5.y, 30, 30);
}

function easeOutQuart(x) {
    return 1 - pow(1 - x, 4);
}

function easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
}

function easeInOutBack(x) {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;

    return x < 0.5
        ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

function easeOutBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
}

function easeInOutElastic(x) {
    const c5 = (2 * Math.PI) / 4.5;

    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5
                ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
                : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
}