// game board coordinates
const gameBoard = document.querySelector('.game__board');
const gameBoardWidth = gameBoard.getBoundingClientRect().width;
const gameBoardHeight = gameBoard.getBoundingClientRect().height;

// current food coordinates
let foodTop = gameBoardHeight;
let foodLeft = gameBoardWidth;

// put food pieces at random board places
const handleFoodPlacement = (width, height) => {
  const randomWidth = Math.floor(Math.random() * width);
  const randomHeight = Math.floor(Math.random() * height);

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

handleFoodPlacement(gameBoardWidth, gameBoardHeight);
