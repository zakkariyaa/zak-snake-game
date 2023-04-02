// game board coordinates
const gameBoard = document.querySelector('.game__board');
const gameBoardWidth = gameBoard.getBoundingClientRect().width;
const gameBoardHeight = gameBoard.getBoundingClientRect().height;

// current food coordinates
let foodTop = gameBoardHeight;
let foodLeft = gameBoardWidth;

// put food pieces at random board places
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

// detect snake food collision
const snakePiece = document.querySelector('.first');

const handleSnakeMovement = (event, snakePiece) => {
  snakePiece.style.top = `${event.clientY}px`;
  snakePiece.style.left = `${event.clientX}px`;

  const verticalCollision = Math.abs(event.clientY - foodTop);
  const horizontalCollision = Math.abs(event.clientX - foodLeft);

  if (verticalCollision < 7 && horizontalCollision < 7) {
    handleFoodPlacement();
  }
};

gameBoard.addEventListener('mousemove', (event) => {
  handleSnakeMovement(event, snakePiece);
});
