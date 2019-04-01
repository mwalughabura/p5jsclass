var xpos = 50;
var ypos = 170;
var diameter = 55;
var xspeed = 10;
var yspeed = 7;

function setup() {
    createCanvas(1000, 630);
    
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

    while (ypos <= 200) {
        background(0);
    }

    while (ypos > 200 && ypos <= 230) {
        background(255);
    }

    while (ypos > 230 && ypos <= 430) {
        background(255, 0, 0);
    }

    while (ypos > 430 && ypos <= 460) {
        background(255);
    }

    while (ypos > 460) {
        background(4, 140, 60);
    }
}