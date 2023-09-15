function pawn(square) {
  pawnMove(square);
  model.squareWithPieceToMove = square;
  highlightSelected(square);
  uppdateView();
}

function pawnMove(square) {
  if (square.currentPiece.hasMoved == true) {
    pawnBaseMove(square);
  } else {
    pawnBaseMove(square);
    pawnAditionalMove(square);
  }
}

function pawnBaseMove(square) {
  let i = square.index;
  if (square.currentPiece.color != "black") {
    if (
      model.board[i + 1].currentPiece == null &&
      model.board[i + 1].id[0] == square.id[0]
    ) {
      model.board[i + 1].color = model.legalMoveColor;
    }
    if (i + 9 <= 63) {
      checkIfFriendly(i + 9, square);
    }
    if (i - 7 >= 0) {
      checkIfFriendly(i - 7, square);
    }
  } else {
    if (
      model.board[i - 1].currentPiece == null &&
      model.board[i - 1].id[0] == square.id[0]
    ) {
      model.board[i - 1].color = model.legalMoveColor;
    }
    if (i - 9 >= 0) {
      checkIfFriendly(i - 9, square);
    }
    if (i + 7 <= 63) {
      checkIfFriendly(i + 7, square);
    }
  }
}

function pawnAditionalMove(square) {
  let i = square.index;

  if (square.currentPiece.color != "black") {
    if (
      model.board[i + 2].currentPiece == null &&
      model.board[i + 2].id[0] == square.id[0]
    ) {
      model.board[i + 2].color = model.legalMoveColor;
    }
    square.currentPiece.hasMoved = true;
  } else {
    if (
      model.board[i - 2].currentPiece == null &&
      model.board[i - 2].id[0] == square.id[0]
    ) {
      model.board[i - 2].color = model.legalMoveColor;
    }
    square.currentPiece.hasMoved = true;
  }
}
