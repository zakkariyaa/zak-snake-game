import { handleFoodPlacement } from './utils/handleFoodPlacement.js';
import { handleSnakeFoodCollision } from './utils/handleSnakeFoodCollision.js';

const gameBoard = document.querySelector('.game__board');
const gameBoardWidth = gameBoard.getBoundingClientRect().width;
const gameBoardHeight = gameBoard.getBoundingClientRect().height;

// current food positions
handleFoodPlacement(gameBoardHeight, gameBoardWidth);

// ---------------------------
// snake movement
// set initial position of snake's head
const snakePiece = document.querySelector('.first');
snakePiece.style.top = gameBoardHeight / 2 + 'px';
snakePiece.style.left = gameBoardWidth / 2 + 'px';

let horizontalVelocity = 0;
let verticalVelocity = 0;

const handleSnakeMovement = (event) => {
  const direction = event.key;

  // Move the snake's head based on the direction
  switch (direction) {
    case 'ArrowUp':
      horizontalVelocity = 0;
      verticalVelocity = -10;
      break;
    case 'ArrowDown':
      horizontalVelocity = 0;
      verticalVelocity = 10;
      break;
    case 'ArrowLeft':
      horizontalVelocity = -10;
      verticalVelocity = 0;
      break;
    case 'ArrowRight':
      horizontalVelocity = 10;
      verticalVelocity = 0;
      break;
  }
};

// add event listener for snake movement
document.addEventListener('keydown', handleSnakeMovement);

// update the position of the snake every 100ms
setInterval(() => {
  const currentX = parseInt(snakePiece.style.left);
  const currentY = parseInt(snakePiece.style.top);
  const nextX = currentX + horizontalVelocity;
  const nextY = currentY + verticalVelocity;

  // snake stays within border boundary
  if (nextX >= 0 && nextX <= gameBoardWidth) {
    snakePiece.style.left = nextX + 'px';
  }

  if (nextY >= 0 && nextY <= gameBoardHeight) {
    snakePiece.style.top = nextY + 'px';
  }

  handleSnakeFoodCollision(currentX, currentY, gameBoardHeight, gameBoardWidth);
}, 100);
