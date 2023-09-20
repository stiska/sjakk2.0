function getSquareById(id) {
  const square = model.board.find((obj) => obj.id === id);
  if (square != null) {
    return square;
  }
}

function getSquareByPieceId(id) {
  for (let i = 0; i < model.board.length; i++) {
    if (
      model.board[i].currentPiece != null &&
      model.board[i].currentPiece.id == id
    ) {
      return model.board[i];
    }
  }
}

function getIntId(id) {
  let result = parseInt(id);
  return result;
}

function checkIfIndexOnBoard(square, num) {
  if (square.index + num >= 0 && square.index + num <= 63) {
    return true;
  } else return false;
}

function switchTurn() {
  if (model.colorToMove == "black") {
    model.colorToMove = "white";
  } else model.colorToMove = "black";
}

function toggleModal() {
  if (model.modal == "none") {
    model.modal = "block";
  } else {
    model.modal = "none";
  }
  uppdateView();
}
