var diameter = 5;

function setup() {
    createCanvas(1200, 600);
}

function draw() {

    background(140);
    noStroke();

    for (var xpos = 1; xpos < width; xpos += 5) {
        for (var ypos = 1; ypos < height; ypos += 5) {
            fill(random(255), random(255), random(255));
            ellipse(xpos, ypos, diameter, diameter);
        }
    }
}