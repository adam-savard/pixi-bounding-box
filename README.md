# pixi-bounding-box
The aim of this repo is to add a couple of useful functions to all display objects that will show their bounding box using a PIXI graphic. By default, it shows a 1px red rectangle around whatever object calls the utility function. Custom coloring and thickness is supported.

# How to include
To include this in your project, you can just add the src/bounding.js file to your main page. Alternatively, if you're using Node or something similar, you can copy/paste the code directly into your project when needed.

# How to use
You can use these function right in your JavaScript as such:
```javascript
let weirdObjectWithWeirderPoisitioning = new PIXI.Sprite.from('./unscrupulousContent.png');
let container = new PIXI.Container();
container.addChild(weirdObjectWithWeirderPoisitioning);
container.showBoundingBox();

//reposition the object and redo the bounding box
weirdObjectWithWeirderPoisitioning.position.x += 20;
container.hideBoundingBox(); //not necessary as showBoundingBox will call this function before creating a new box
container.showBoundingBox(0x00ff00, 4); //fancy colors supported
```
Alternatively, these were written with the debug console in mind for showing bounds after an object is rendered.

# TODOs
- Write a Node JS version of this (currently don't use PIXI inside of Node directly, so not high on the priority list)
- Write a function that will animate a bounding box (ran into some weird issues with my first pass at that, so PRs very welcome)
- Make this work without the assumed global PIXI namepace

# PRs Are Welcome!
