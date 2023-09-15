//burde bytte navn
function LongMove(square, i, index, endpoint) {
  if (model.board[i].id[index] == endpoint) {
    checkIfFriendly(i, square);
    if (model.board[i].currentPiece == null) {
      model.board[i].color = model.legalMoveColor;
    }
    return true;
  } else if (square.id[index] == endpoint) {
    return true;
  } else if (model.board[i].currentPiece != null) {
    checkIfFriendly(i, square);
    return true;
  } else {
    model.board[i].color = model.legalMoveColor;
    return false;
  }
}

function rookAndQueenMove(square) {
  for (let i = square.index - 1; i >= 0; i--) {
    if (LongMove(square, i, 1, "1")) {
      break;
    }
  }
  for (let i = square.index + 1; i <= 63; i++) {
    if (LongMove(square, i, 1, "8")) {
      break;
    }
  }
  for (let i = square.index + 8; i <= 63; i = i + 8) {
    if (LongMove(square, i, 0, "h")) {
      break;
    }
  }
  for (let i = square.index - 8; i >= 0; i = i - 8) {
    if (LongMove(square, i, 0, "a")) {
      break;
    }
  }
}

function bishopAndQueenMove(square) {
  for (let i = square.index + 7; i <= 63; i = i + 7) {
    if (LongMove(square, i, 1, "1")) {
      break;
    }
  }
  for (let i = square.index - 7; i >= 0; i = i - 7) {
    if (LongMove(square, i, 1, "8")) {
      break;
    }
  }
  for (let i = square.index + 9; i <= 63; i = i + 9) {
    if (LongMove(square, i, 1, "8")) {
      break;
    }
  }
  for (let i = square.index - 9; i >= 0; i = i - 9) {
    if (LongMove(square, i, 1, "1")) {
      break;
    }
  }
}
