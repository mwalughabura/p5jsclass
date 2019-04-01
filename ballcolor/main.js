var xpos = 50;
var ypos = 170;
var diameter = 45;
var xspeed = 5;
var yspeed = 7;

function setup() {
    createCanvas(1000, 500);
}

function draw() {

    background(140);
    noStroke();
    
    if (xpos < width / 3) {
        fill(4, 140, 60);
    } else if (xpos > width / 3 && xpos < width * 2/3) {
        fill(255);
    } else {
        fill(187, 0, 0);
    }

    ellipse(xpos, ypos, diameter, diameter);
    xpos += xspeed;
    ypos += yspeed;

    if (xpos >= width || xpos <= 0) {
        xspeed *= -1;
    }

    if (ypos >= height || ypos <= 0) {
        yspeed *= -1;
    }
}