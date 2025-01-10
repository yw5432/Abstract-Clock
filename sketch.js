// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
    angleMode(DEGREES);
}

// draw() is called 60 times per second
function draw() {
    let hr = hour() % 12;
    let min = minute();
    let sec = second();

    background(225);
    translate(width / 2, height / 2);
    rotate(-90);

    stroke(0, 0, 255);
    strokeWeight(20);
    noFill();
    let secondAngle = map(sec, 0, 60, 0, 360);
    arc(0, 0, 220, 220, 0, secondAngle);

    stroke(255, 255, 0);
    strokeWeight(20);
    let minuteAngle = map(min, 0, 60, 0, 360);
    arc(0, 0, 260, 260, 0, minuteAngle);

    stroke(255, 0, 0);
    strokeWeight(20);
    let hourAngle = map(hr, 0, 12, 0, 360);
    arc(0, 0, 300, 300, 0, hourAngle);
}