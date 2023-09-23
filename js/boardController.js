function createBoard() {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let id = "";
  let index = -1;
  for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8; i++) {
      id = letters[j] + (i + 1);
      index = index + 1;
      model.board.push({
        id: id,
        currentPiece: null,
        color: "",
        index: index,
      });
    }
  }
  applyColor();
  populateBoard();
}

function applyColor() {
  let rowStart = 0;
  for (let j = 0; j < 4; j++) {
    for (let i = rowStart; i < rowStart + 8; i = i + 2) {
      model.board[i].color = model.blackColor;
      model.board[i + 1].color = model.whiteColor;
    }
    rowStart = rowStart + 8;
    for (let i = rowStart; i < rowStart + 8; i = i + 2) {
      model.board[i].color = model.whiteColor;
      model.board[i + 1].color = model.blackColor;
    }
    rowStart = rowStart + 8;
  }
}

function populateBoard() {
  let square = null;
  for (let i = 0; i < model.InPlayPieces.length; i++) {
    square = getSquareById(model.InPlayPieces[i].startPossison);
    square.currentPiece = model.InPlayPieces[i];
    if (square.currentPiece.type == "king") {
      model.kingsSquares.push(square);
    }
  }
}
