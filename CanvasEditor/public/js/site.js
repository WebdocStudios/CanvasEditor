
/**
 *  This is just a proof of concept to show that HTMl canvas can be used for a simple text editor with a blking cursor and a content assist (intelliSense) window etc.
 *  The next steps are to migrate these functions in to a class, allow multiple lines, and to line up the contentAssist window with the last word typed
 */


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var y_pos = 19;
var numOfChars = 0;
var cursorPos = 8;
var x_pos = null;

//Cursor defaults TODO: Create class for cursor
var cursorOn = false;
var cursorInterval = 500; //In mmilliseconds
var cursorIntervalId = null;
var cursorWidth = 2;
var cursorHeight = 15;


//Default to top left
var cursor_x = 6;
var cursor_y = 5;

startCursor();


function startCursor() {

    //Inital state: turn on
    toggleCursor(true);

    //Toggle "blink" state on desired interval (cursorInterval)
    cursorIntervalId = setInterval(function () {

        if (cursorOn) {
            toggleCursor(false);
        }
        else {
            toggleCursor(true);
        }

    }, cursorInterval)

}

function toggleCursor(turnOn) {

    ctx.moveTo(cursor_x, cursor_y);
    ctx.lineTo(cursor_x, cursor_y + cursorHeight);
    ctx.lineWidth = cursorWidth;
    ctx.strokeStyle = turnOn ? 'black' : 'white'
    ctx.stroke();
    ctx.beginPath()

    cursorOn = turnOn;
}

function stopCursor() {

    if (cursorOn) {
        toggleCursor(false);
    }

    clearInterval(cursorIntervalId);

    //Reset the internvalId
    cursorIntervalId = null;
}

function writeCharacter(character) {

    //First, stop the blinking cursor
    stopCursor();

    x_pos = (cursorPos * (numOfChars + 1));

    ctx.font = "16px Consolas";
    ctx.fillStyle = 'blue';
    ctx.fillText(character, x_pos, y_pos);

    //increase character count
    numOfChars++;

    //move cursor position to the right by the width of the character
    cursor_x += 10;

    //Start cursor again
    startCursor();

}

function handleKeypress(e) {

    var code = e.keyCode;

    var character = String.fromCharCode(code).toLowerCase();

    writeCharacter(character);

    //switch (code) {
    //    //case 37: alert("Left"); break; //Left key
    //    //case 38: alert("Up"); break; //Up key
    //    //case 39: alert("Right"); break; //Right key
    //    //case 40: alert("Down"); break; //Down key
    //    //default: alert(code); //Everything else
    //}
}

window.addEventListener('keydown', handleKeypress, false);