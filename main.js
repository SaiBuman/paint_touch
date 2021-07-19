canvas = document.getElementById("myCanvas");
var last_position_of_x, last_position_of_y;
var mouse_event = "empty";
ctx = canvas.getContext("2d");
color = "black";
line_width = 5;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e) {
    color = document.getElementById("color").value;
    line_width = document.getElementById("wid").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    color = document.getElementById("color").value;
    line_width = document.getElementById("wid").value;
    mouse_event = "mousedown";
}
canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        console.log("x=" + last_position_of_x + " y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("x=" + current_position_of_mouse_x + " y=" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    mouse_event = "mouseleave";
}

function clear_area() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}