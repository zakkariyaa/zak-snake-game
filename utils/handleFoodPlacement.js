const gameBoard = document.querySelector('.game__board');

export const handleFoodPlacement = (gameBoardHeight, gameBoardWidth) => {
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
};
