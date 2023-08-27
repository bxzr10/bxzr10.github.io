const canvasElement = document.getElementById('canvas');
const canvas = canvasElement.getContext('2d');

const boardSize = 750;
const headSize = 10;

let headX = 0;
let headY = 0;
let length = 10;

let direction = 'D';

const exist = () => {


    if (direction === 'U') {

    } else if (direction === 'D') {

    } else if (direction === 'L') {

    } else if (direction === 'R') {

    }
}

const moveSnake = ( { key } ) => {
    if (key === 'ArrowUp') {
        canvas.fillRect(posX, posY, short, long);
    } else if (key === 'ArrowDown') {
        console.log('DOWN');
    } else if (key === 'ArrowLeft') {
        console.log('LEFT');
    } else if (key === 'ArrowRight') {
        console.log('RIGHT');
    }
}

document.body.addEventListener('keydown', moveSnake);