const mainCanvas = document.getElementById('etch-a-sketch');
const eraseButton = document.querySelector('.erase');

eraseButton.addEventListener('click', clearBoard);

function clearBoard() {
    const ctx = mainCanvas.getContext('2d');
    ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    eraseButton.classList.add('animate__shakeY');

    setTimeout(() => {
        eraseButton.classList.remove('animate__shakeY');
    }
        , 500);
}