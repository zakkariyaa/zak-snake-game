import { handleFoodPlacement } from './handleFoodPlacement.js';

export const handleSnakeFoodCollision = (
  snakeX,
  snakeY,
  boardHeight,
  boardWidth
) => {
  const foodPiece = document.querySelector('.food');
  const foodY = Number(foodPiece.style.top.slice(0, -2));
  const foodX = Number(foodPiece.style.left.slice(0, -2));

  const verticalCollision = Math.abs(foodY - snakeY);
  const horizontalCollision = Math.abs(foodX - snakeX);

  if (verticalCollision < 9 && horizontalCollision < 11) {
    console.log('collision');
    handleFoodPlacement(boardHeight, boardWidth);
  }
};
