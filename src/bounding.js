/**
 * Shows a bounding box around a display object; defaults to 1px red border.
 * @param {*} color The color you want to make the bounding box
 * @param {*} thickness The thickness of the line
 */
PIXI.DisplayObject.prototype.showBoundingBox = function(color = 0xff0000, thickness = 1){
    if(this.boundingBox) this.hideBoundingBox();
    let rect = this.getBounds();
    let box = new PIXI.Graphics();
    box.lineStyle(thickness, color);
    box.drawRect(rect.x, rect.y, rect.width, rect.height);
    this.boundingBox = box;
    this.addChild(box);
}

/**
 * Hides a bounding box if it exists
 */
PIXI.DisplayObject.prototype.hideBoundingBox = function(){
    if(this.boundingBox){
        //leave this for garbage collection later
        this.removeChild(this.boundingBox);
        this.boundingBox = null;
    }
}