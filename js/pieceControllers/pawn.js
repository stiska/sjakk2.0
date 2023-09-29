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
  if (
    model.board[i + index].currentPiece == null &&
    checkMockMove(square, i + index) == false
  ) {
    if (model.checking == true) {
      model.haveLegalMoves = true;
    } else {
      model.board[i + index].color = model.legalMoveColor;
    }
    return true;
  } else {
    return false;
  }
}

function pawnLongForward(square, index) {
  let i = square.index;
  if (square.currentPiece.hasMoved == true) {
    return;
  }
  if (
    model.board[i + index].currentPiece == null &&
    checkMockMove(square, i + index) == false
  ) {
    if (model.checking == true) {
      model.haveLegalMoves = true;
    } else {
      model.board[i + index].color = model.legalMoveColor;
    }
  }
}

function pawnAttack(square, index) {
  let i = square.index;
  if (i + index <= 63 && i + index >= 0) {
    if (
      checkIfFriendly(i + index, square) == false &&
      checkMockMove(square, i + index) == false
    ) {
      if (model.checking == true) {
        model.haveLegalMoves = true;
      } else {
        model.board[i + index].color = model.legalMoveColor;
      }
    }

    if (
      i + index == model.enPassantIndex &&
      checkMockMove(square, i + index) == false
    ) {
      if (model.checking == true) {
        model.haveLegalMoves = true;
      } else {
        model.board[i + index].color = model.legalMoveColor;
      }
    }
  }
}

function setEnPassantIndex(squareToMoveTo) {
  if (model.squareWithPieceToMove.currentPiece.hasMoved == false) {
    if (
      model.squareWithPieceToMove.currentPiece.color == "white" &&
      getIntId(squareToMoveTo.id[1]) - 2 == 2
    ) {
      model.enPassantIndex = squareToMoveTo.index - 1;
    }
    if (
      model.squareWithPieceToMove.currentPiece.color == "black" &&
      getIntId(squareToMoveTo.id[1]) + 2 == 7
    ) {
      model.enPassantIndex = squareToMoveTo.index + 1;
    }
  }
}

function promotePawn(type, imgIndex) {
  model.board[model.promotionIndex].currentPiece.type = type;
  if (model.board[model.promotionIndex].currentPiece.color == "black") {
    model.board[model.promotionIndex].currentPiece.imageLink =
      model.promoteBlackImg[imgIndex];
  } else {
    model.board[model.promotionIndex].currentPiece.imageLink =
      model.promoteWhiteImg[imgIndex];
  }
  toggleModal();
}
