var canvas = null;
var context = null;
var my_image = null;

function onImageLoad() {
    context.drawImage(my_image, 192, 192);  
    console.log("Image loaded");
}

function setup() {
    var body = document.getElementById("body");
    canvas = document.createElement("canvas");
    context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    body.appendChild(canvas);
    
    my_image = new Image();
    my_image.onload = onImageLoad;
    my_image.src = "stickman.jpg";
}

setup();

