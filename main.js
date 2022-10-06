canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var rover_width = 100;
var rover_height = 90;

var rover_x = 10;
var rover_y = 10;

mars_array = ["Mars 1.jpg", "Mars 2.jpg", "Mars 3.jpg", "Mars 4.jpg"];
random_number = Math.floor(Math.random() *4);

var rover_image = "rover.png";
var background_image = mars_array[random_number];

function add() {
 bg_image = new Image();
 bg_image.onload = uploadbackground();
 bg_image.src = background_image;

 r_image = new Image();
 r_image.onload = uploadrover();
 r_image.src = rover_image;

}

function uploadbackground() {
    ctx.drawImage(bg_image, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {

    ctx.drawImage(r_image, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener('keydown', my_keydown());


function my_keydown(e) {

var key_press = e.keyCode;
if (key_press == "38") {
 up();
 console.log("up");

}

if (key_press == "40") {
    down();
    console.log("down");
}

if (key_press == "37") {
    left();
    console.log("left");
}

if (key_press == "39") {
    right();
    console.log("right");
}

}

function up() {

    if (rover_y >= 0) {
    rover_y = rover_y - 10;
    uploadbackground();
    uploadrover();
    }
}

function down() {

    if (rover_y <= 500) {
    rover_y = rover_y + 10;
    uploadbackground();
    uploadrover();
    }
}

function right() {

    if (rover_x <= 700) {
    rover_x = rover_x + 10;
    uploadbackground();
    uploadrover();
    }
}

function left() {

    if (rover_x >= 0) {
    rover_x = rover_x - 10;
    uploadbackground();
    uploadrover();
    }
}