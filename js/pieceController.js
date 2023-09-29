function initiateMove(id) {
  let square = getSquareById(id);
  if (
    square.color == model.legalMoveColor &&
    id != model.squareWithPieceToMove.id
  ) {
    movePiece(id);
    return;
  }
  if (square.currentPiece == null) {
    resetSelected();
    return;
  }
  if (square.currentPiece.color != model.colorToMove) {
    resetSelected();
    return;
  }
  if (
    model.squareWithPieceToMove != null &&
    model.squareWithPieceToMove != square.currentPiece
  ) {
    resetSelected();
    return;
  }
  determinedMove(square);
}

function movePiece(id) {
  let squareToMoveTo = getSquareById(id);

  if (model.squareWithPieceToMove.currentPiece.type == "pawn") {
    checkPawnPromotion(squareToMoveTo);
    if (squareToMoveTo.index == model.enPassantIndex) {
      removeEnPassant(squareToMoveTo);
    }
  }
  model.enPassantIndex = null;
  if (model.squareWithPieceToMove.currentPiece.type == "pawn") {
    setEnPassantIndex(squareToMoveTo);
  }
  if (model.squareWithPieceToMove.currentPiece.hasMoved == false) {
    model.squareWithPieceToMove.currentPiece.hasMoved = true;
  }
  squareToMoveTo.currentPiece = model.squareWithPieceToMove.currentPiece;
  model.squareWithPieceToMove.currentPiece = null;
  model.squareWithPieceToMove = null;
  if (checks(opositCollor(squareToMoveTo.currentPiece.color))) {
    checkMate(opositCollor(squareToMoveTo.currentPiece.color));
  }
  if (model.hasWon == null) {
    applyColor();
    switchTurn();
    uppdateView();
  }
  if (model.hasWon != null) {
    displaywinner();
  }
}

function checkPawnPromotion(squareToMoveTo) {
  if (squareToMoveTo.id[1] == "1" || squareToMoveTo.id[1] == "8") {
    model.promotionIndex = squareToMoveTo.index;
    toggleModal();
  }
}

function removeEnPassant() {
  if (model.squareWithPieceToMove.currentPiece.color == "black") {
    model.board[model.enPassantIndex + 1].currentPiece = null;
  } else {
    model.board[model.enPassantIndex - 1].currentPiece = null;
  }
}

function checkIfFriendly(i, square) {
  if (
    model.board[i].currentPiece != null &&
    model.board[i].currentPiece.color != square.currentPiece.color
  ) {
    //model.board[i].color = model.legalMoveColor;
    return false;
  } else {
    return true;
  }
}

function checkMockMove(square, indexToCheck) {
  let piece = model.board[indexToCheck].currentPiece;
  model.board[indexToCheck].currentPiece = square.currentPiece;
  square.currentPiece = null;
  if (checks(model.board[indexToCheck].currentPiece.color)) {
    square.currentPiece = model.board[indexToCheck].currentPiece;
    model.board[indexToCheck].currentPiece = piece;
    return true;
  } else {
    square.currentPiece = model.board[indexToCheck].currentPiece;
    model.board[indexToCheck].currentPiece = piece;
    return false;
  }
}

function resetSelected() {
  applyColor();
  model.squareWithPieceToMove = null;
  uppdateView();
}

function highlightSelected(square) {
  square.color = model.selecktedColor;
}

function determinedMove(square) {
  switch (square.currentPiece.type) {
    case "king":
      king(square);
      break;
    case "queen":
      queen(square);
      break;
    case "bishop":
      bishop(square);
      break;
    case "knight":
      knight(square);
      break;
    case "rook":
      rook(square);
      break;
    case "pawn":
      pawn(square);
      break;
    default:
      console.log("Get Rekt Pleb");
  }
}
