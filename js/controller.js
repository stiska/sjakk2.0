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

function getKingSquareByColor(color) {
  for (let i = 0; i < model.board.length; i++) {
    if (
      model.board[i].currentPiece != null &&
      model.board[i].currentPiece.type == "king" &&
      model.board[i].currentPiece.color == color
    ) {
      return model.board[i];
    }
  }
}

function opositCollor(color) {
  if (color == "white") {
    return "black";
  } else {
    return "white";
  }
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

function displaywinner() {
  applyColor();
  switchTurn();
  uppdateView();
  toggleModal();
}

function getEndPoint(startPos, incrementer, letter, number) {
  let counter = 0;
  if (
    model.board[startPos].id == letter ||
    model.board[startPos].id[1] == number
  ) {
    return counter;
  }
  for (let i = startPos; i < model.board.length; i = i + incrementer) {
    if (model.board[i].id[0] == letter || model.board[i].id[1] == number) {
      counter++;
      break;
    }
    counter++;
  }
  return counter;
}

function getLargest(id) {
  if (getIntId(id[1]) >= getIntFromLetter(id[0])) {
    return getIntId(id[1]);
  } else {
    return getIntFromLetter(id[0]);
  }
}

function getSmalest(id) {
  if (getIntId(id[1]) >= getIntFromLetter(id[0])) {
    return getIntFromLetter(id[0]);
  } else {
    return getIntId(id[1]);
  }
}

function getIntId(id) {
  let result = parseInt(id);
  return result;
}

function getIntFromLetter(letter) {
  let result = 0;
  switch (letter) {
    case "a":
      result = 1;
      break;
    case "b":
      result = 2;
      break;
    case "c":
      result = 3;
      break;
    case "d":
      result = 4;
      break;
    case "e":
      result = 5;
      break;
    case "f":
      result = 6;
      break;
    case "g":
      result = 7;
      break;
    case "h":
      result = 8;
      break;
    default:
      console.log("Get Rekt Pleb");
  }
  return result;
}
