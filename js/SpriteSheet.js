function SpriteSheet(jsonFile, imageFile, name) {
    var frames = [];
    var asset = bingyjson;

    function Frame(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    
    this.getNumFrames = function() {
        return frames.length;
    }
    for (var i in asset.frames)
    {
        var x = asset.frames[i].frame.x;
        var y = asset.frames[i].frame.y;
        var w = asset.frames[i].frame.w;
        var h = asset.frames[i].frame.h;
        
        frames.push(new Frame(x, y, w, h));
    }
    
    var eventName = name + "__mygame__SpriteSheet loaded";
    this.getEventName = function() {
        return eventName;
    }
    
    var image = new Image();
    image.onload = function() {
            console.log("Image loaded in spritesheet");
            var event = new Event(eventName);
            document.dispatchEvent(event);
    }
    image.src = imageFile;
    
    
    this.drawFrame = function(context, frameIndex, dx, dy, dw = 0, dh = 0)
    {
        if (frameIndex >= frames.length)
            return;
        
        if (dw === 0) {
            dw = frames[frameIndex].w;
        }
        if (dh === 0) {
            dh = frames[frameIndex].h;
        }
        
        var frame = frames[frameIndex];
        context.drawImage(image, 
            frame.x, frame.y, frame.w, frame.h, 
            dx, dy, dw, dh);
        console.log("drewhb");
    }
}
