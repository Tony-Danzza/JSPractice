// Select the elements on the page - canvas, shake button

// set up our canvas for drawing

// write a draw function

// write a handler for the keys

// clear or shake function

// listen for arrow keys

const canvas = document.querySelector("#etch-a-sketch");

const ctx = canvas.getContext("2d");

const shakeButton = document.querySelector(".shake");

ctx.lineJoin = "round";
ctx.lineCap = "round";

ctx.lineWidth = 10;

// ctx.beginPath()

ctx.moveTo(200, 200);

ctx.lineTo(200, 200);
ctx.stroke();

// const width = canvas.width;
// const height = canvas.height;

const {width, height} = canvas
console.log(width, height);
