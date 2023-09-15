function knight(square) {
  const indexnums = [-10, -17, -15, -6, 10, 17, 15, 6];
  const expectedNums = [-2, -1, 1, 2, 2, 1, -1, -2];

  for (let i = 0; i < indexnums.length; i++) {
    if (checkIfIndexOnBoard(square, indexnums[i])) {
      knightMove(square, square.index + indexnums[i], expectedNums[i]);
    }
  }

  model.squareWithPieceToMove = square;
  highlightSelected(square);
  uppdateView();
}

function knightMove(square, index, expected) {
  if (
    getIntId(model.board[index].id[1]) == getIntId(square.id[1]) + expected &&
    model.board[index].currentPiece != null
  ) {
    checkIfFriendly(index, square);
  } else if (
    getIntId(model.board[index].id[1]) ==
    getIntId(square.id[1]) + expected
  ) {
    model.board[index].color = model.legalMoveColor;
  }
}
