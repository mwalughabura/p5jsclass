var xpos = 50;
var ypos = 170;
var diameter = 15;
var xspeed = 10;
var yspeed = 7;

function setup() {
    createCanvas(1000, 500);
    background(0);
}

function draw() {
    var red = Math.floor((Math.random() * 255) + 1);
    var green = Math.floor((Math.random() * 100) + 1);
    var blue = Math.floor((Math.random() * 100) + 1);

    fill(red, green, blue);
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