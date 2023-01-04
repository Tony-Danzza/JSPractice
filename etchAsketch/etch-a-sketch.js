// Select the elements on the page - canvas, shake button

// set up our canvas for drawing

// write a draw function

// write a handler for the keys

// clear or shake function

// listen for arrow keys

const canvas = document.querySelector("#etch-a-sketch");

const ctx = canvas.getContext("2d");

const shakeButton = document.querySelector(".shake");

let hue = 10;

ctx.strokeStyle = `hsl(100, 100%, 50%)`;

ctx.lineJoin = "round";
ctx.lineCap = "round";
// ctx.lineCap = "square";
const MOVE_SPEED = 10;

ctx.lineWidth = 10;

// ctx.beginPath()

// ctx.moveTo(x, 200);

// ctx.lineTo(x, 200);
// ctx.stroke();

// const width = canvas.width;
// const height = canvas.height;

const {width, height} = canvas
console.log(width, height);


let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)

ctx.moveTo(x, y);

ctx.lineTo(x, y);
ctx.stroke();


function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key:e.key})
        // console.log(e.key)
        // console.log("Handling Key");
        
    }

}

window.addEventListener('keydown', handleKey)


function draw({key}) {
    console.log(key);
    
    hue += 1

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath()
    ctx.moveTo(x, y)
   
    
    switch (key) {
        case "ArrowUp":
            y -= MOVE_SPEED
            break;
        case "ArrowDown":
            y += MOVE_SPEED
            break;
        case "ArrowLeft":
            x -= MOVE_SPEED
            break;
        case "ArrowRight":
            x += MOVE_SPEED
            break;
        default:
            break;
    }
    // if (key == 'ArrowUp') {
    //     console.log(y);
    //     y -= MOVE_SPEED;
    //     console.log(y);
        
    // } else if (key == "ArrowDown") {
    //     console.log(y);
    //     y += MOVE_SPEED;
    //     console.log(y);
    // } else if (key == "ArrowLeft") {
    //     console.log(x)
    //     x -= MOVE_SPEED;
    //     console.log(x);
    // } else if (key == "ArrowRight") {
    //     x += MOVE_SPEED;
        
    // }
    // console.log(y);
    // x -= MOVE_SPEED
    // console.log(y)
    ctx.lineTo(x,y)
    ctx.stroke()
}

function clearCanvas() {
    canvas.classList.add('shake')
    canvas.addEventListener('animationend', function () {
        ctx.clearRect(0,0, width, height)
        canvas.classList.remove('shake')
    },
        { once: true }
    );
}

shakeButton.addEventListener('click', clearCanvas)