

/**
 * Editor object
 * 
 */

var Editor = function (canvasId) {

    this.c = document.getElementById(canvasId);
    this.ctx = c.getContext("2d");
    this.ctx.font = "16px Consolas";

}

Editor.prototype.addCharacter = function (character) {

    var charWidth = ctx.measureText(txt).width;

    console.dir('charWidth: ' + charWidth);

}


/**
 * Position object
 * 
 */

var Position = function () {

    this.character = 0;
    this.line = 0;

}

Position.prototype.set = function (character, line) {

    this.character = character;
    this.line = line;

    console.log('Character: ' + this.character);

}

Position.prototype.move = function (direction) {

    switch (direction) {
        case "left":
            // Left pressed
            this.set(this.character - 1);

            break;
        case "right":
            // Right pressed
            this.set(this.character + 1);

            break;

    }

}


/**
 * Canvas Editor
 * 
 */


var canvas = null;
var currentTarget = null

var editor = new Editor();
var position = new Position();

window.onload = function () {

    //Set canvas
    canvas = document.getElementById('canvas');

    document.addEventListener('mousedown', function (event) {
        currentTarget = event.target;

        editor.addCharacter('w');


    }, false);


    document.addEventListener('keydown', function (event) {
        if (currentTarget != canvas) {
            return;
        }

        handleCanvasKeydown(event);

    }, false);
}


function handleCanvasKeydown(event) {
    switch (event.key) {
        case "ArrowLeft":
            position.move('left');
            break;
        case "ArrowRight":
            position.move('right');

            break;
        case "ArrowUp":
            // Up pressed
            break;
        case "ArrowDown":
            // Down pressed
            break;
    }

}