function getSquareById(id) {
  const square = model.board.find((obj) => obj.id === id);
  if (square != null) {
    return square;
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
