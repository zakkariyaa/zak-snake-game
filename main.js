// game board coordinates
const gameBoard = document.querySelector('.game__board');
const gameBoardWidth = gameBoard.getBoundingClientRect().width;
const gameBoardHeight = gameBoard.getBoundingClientRect().height;

// current food coordinates
let foodTop = gameBoardHeight;
let foodLeft = gameBoardWidth;

// ---------------------------
// food placement on the board
const handleFoodPlacement = () => {
  const randomWidth = Math.floor(Math.random() * gameBoardWidth);
  const randomHeight = Math.floor(Math.random() * gameBoardHeight);

  // remove previous food piece
  const oldFoodEl = document.querySelector('.food');
  if (oldFoodEl) {
    oldFoodEl.remove();
  }

  const foodEl = document.createElement('p');
  foodEl.classList.add('food');
  foodEl.style.top = `${randomHeight}px`;
  foodEl.style.left = `${randomWidth}px`;

  gameBoard.append(foodEl);

  foodTop = randomHeight;
  foodLeft = randomWidth;
};

handleFoodPlacement();

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
}, 100);
