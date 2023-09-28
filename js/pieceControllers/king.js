function king(square) {
  const indexnums = [-1, -9, -8, -7, 1, 9, 8, 7];
  const expectedNums = [-1, -1, 0, 1, 1, 1, 0, -1];

  for (let i = 0; i < indexnums.length; i++) {
    if (checkIfIndexOnBoard(square, indexnums[i])) {
      kingMove(square, square.index + indexnums[i], expectedNums[i]);
    }
  }

  model.squareWithPieceToMove = square;
  highlightSelected(square);
  uppdateView();
}

function kingMove(square, index, expected) {
  if (
    getIntId(model.board[index].id[1]) == getIntId(square.id[1]) + expected &&
    model.board[index].currentPiece != null
  ) {
    if (
      checkIfFriendly(index, square) == false &&
      checkMockMove(square, index) == false
    ) {
      model.board[index].color = model.legalMoveColor;
    }
  } else if (
    getIntId(model.board[index].id[1]) == getIntId(square.id[1]) + expected &&
    checkMockMove(square, index) == false
  ) {
    model.board[index].color = model.legalMoveColor;
  }
}
