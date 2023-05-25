const mainCanvas = document.getElementById('etch-a-sketch');
const ctx = mainCanvas.getContext('2d');
const eraseButton = document.querySelector('.erase');
const resetButton = document.querySelector('.reset');
const MOVE_AMOUNT = 20;

eraseButton.addEventListener('click', clearBoard);

function clearBoard() {
    ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    ctx.stroke();
    eraseButton.classList.add('animate__shakeY');
    mainCanvas.classList.add('animate__swing');

    setTimeout(() => {
        eraseButton.classList.remove('animate__shakeY');
        mainCanvas.classList.remove('animate__swing');
    }
        , 850);
}


// Setup Canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let xAxis = 100;
let yAxis = 900;

ctx.beginPath();
ctx.moveTo(xAxis, yAxis);
ctx.lineTo(xAxis, yAxis);
ctx.stroke();

// draw function
function draw({ key }) {
    ctx.beginPath();
    ctx.moveTo(xAxis, yAxis);

    switch (key) {
        case 'ArrowUp':
            yAxis -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            yAxis += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            xAxis -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            xAxis += MOVE_AMOUNT;
            break;
        default:
            break;
    }

    ctx.lineTo(xAxis, yAxis);
    ctx.stroke();

}

// handling keys event function

function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    } else {
        alert('Use the arrow keys to draw!');
    }
}

window.addEventListener('keydown', handleKey);