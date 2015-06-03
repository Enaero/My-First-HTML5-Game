var canvas = null;
var context = null;
var spritesheet = null;
var frameRate = 1000/30;
var frame = 0;

var assets = { 
    "bingy": {
        "image": "images/bingy.png",
        "json": "images/bingy.json"
    } 
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    spritesheet.drawFrame(context, frame, 192, 192);
    frame = (1+frame)%spritesheet.getNumFrames();
}

function onFinishLoad(event)
{
    console.log("All images loaded.");
    setInterval(animate, frameRate);
}

function setup() {
    var body = document.getElementById("body");
    canvas = document.createElement("canvas");
    context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    body.appendChild(canvas);
    
    console.log("Loading . . .");
    
    spritesheet = new SpriteSheet(assets.bingy.json, assets.bingy.image, "ss");
    
    document.addEventListener(spritesheet.getEventName(), onFinishLoad, false);
}

setup();

