function pawn(square) {
  pawnMove(square);
  model.squareWithPieceToMove = square;
  highlightSelected(square);
  uppdateView();
}

function pawnMove(square) {
  let indexnums = [];
  if (square.currentPiece.color == "black") {
    indexnums = [-1, -2, -9, 7];
  } else {
    indexnums = [1, 2, 9, -7];
  }
  if (pawnForward(square, indexnums[0])) {
    pawnLongForward(square, indexnums[1]);
  }
  pawnAttack(square, indexnums[2]);
  pawnAttack(square, indexnums[3]);
}

function pawnForward(square, index) {
  let i = square.index;
  if (model.board[i + index].currentPiece == null) {
    model.board[i + index].color = model.legalMoveColor;
    return true;
  } else {
    return false;
  }
}
function pawnLongForward(square, index) {
  let i = square.index;
  if (
    model.board[i + index].currentPiece == null &&
    square.currentPiece.hasMoved == false
  ) {
    model.board[i + index].color = model.legalMoveColor;
    square.currentPiece.hasMoved = true;
  }
}

function pawnAttack(square, index) {
  let i = square.index;
  if (i + index <= 63 && i - index >= 0) {
    checkIfFriendly(i + index, square);
  }
}
