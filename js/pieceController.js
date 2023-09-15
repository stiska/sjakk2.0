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
    return;
  }
  if (square.currentPiece.color != model.colorToMove) {
    return;
  }
  determinedMove(square);
}

function movePiece(id) {
  let squareToMoveTo = getSquareById(id);
  applyColor();
  squareToMoveTo.currentPiece = model.squareWithPieceToMove.currentPiece;
  model.squareWithPieceToMove.currentPiece = null;
  model.squareWithPieceToMove = null;
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
