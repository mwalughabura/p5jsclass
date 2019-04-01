var diameter = 30;

function setup() {
    createCanvas(1000, 500);
}

function draw() {

    background(140);

    var xpos = 15;
    var ypos = 170;

    while (xpos < width) {
        ellipse(xpos, ypos, diameter, diameter);
        xpos += 30;
    }
}