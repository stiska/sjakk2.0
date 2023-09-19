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
  if (
    squareToMoveTo.id[1] == "1" ||
    (squareToMoveTo.id[1] == "8" &&
      model.squareWithPieceToMove.currentPiece.type == "pawn")
  ) {
    model.promotionIndex = squareToMoveTo.index;
    toggleModal();
  }

  if (squareToMoveTo.index == model.enPassantIndex) {
    if (model.squareWithPieceToMove.currentPiece.color == "black") {
      model.board[model.enPassantIndex + 1].currentPiece = null;
    } else {
      model.board[model.enPassantIndex - 1].currentPiece = null;
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
  applyColor();
  switchTurn();
  uppdateView();
}

function checkIfFriendly(i, square) {
  if (
    model.board[i].currentPiece != null &&
    model.board[i].currentPiece.color != square.currentPiece.color
  ) {
    model.board[i].color = model.legalMoveColor;
    return false;
  } else {
    return true;
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
