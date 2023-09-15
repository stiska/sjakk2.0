function getSquareById(id) {
  const square = model.board.find((obj) => obj.id === id);
  if (square != null) {
    return square;
  }
}
