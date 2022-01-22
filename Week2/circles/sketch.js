var circleRadius = 60;
var circleOffset = 200;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);

  noStroke();
  fill(255, 0, 0);

  var increment = TWO_PI / 20;
  for (var i = 0; i < TWO_PI; i += increment) {
    var x = cos(i) * circleRadius + circleOffset;
    var y = sin(i) * circleRadius + circleOffset;

    ellipse(x, y, 10, 10);
  }
}
