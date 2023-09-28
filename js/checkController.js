function checks(color) {
  let isChecked = false;
  if (horizontalChecks(color)) {
    isChecked = true;
  }
  if (diagonalChecks(color)) {
    isChecked = true;
  }
  if (pawnCheck(color)) {
    isChecked = true;
  }
  if (knightCheck(color)) {
    isChecked = true;
  }
  if (kingCheck(color)) {
    isChecked = true;
  }
  return isChecked;
}

function kingCheck(color) {
  let isChecked = false;
  let kingSquare = getKingSquareByColor(color);
  const indexnums = [-1, -9, -8, -7, 1, 9, 8, 7];
  const expectedNums = [-1, -1, 0, 1, 1, 1, 0, -1];
  if (kingSquare.currentPiece.color == "black") {
    for (let i = 0; i < indexnums.length; i++) {
      if (
        kingSquare.index + indexnums[i] >= 0 &&
        kingSquare.index + indexnums[i] <= 63
      ) {
        if (
          getIntId(model.board[kingSquare.index + indexnums[i]].id[1]) ==
          getIntId(kingSquare.id[1]) + expectedNums[i]
        ) {
          if (
            checkForThreat(kingSquare.index + indexnums[i], "white", "king")
          ) {
            isChecked = true;
          }
        }
      }
    }
  } else {
    for (let i = 0; i < indexnums.length; i++) {
      if (
        kingSquare.index + indexnums[i] >= 0 &&
        kingSquare.index + indexnums[i] <= 63
      ) {
        if (
          getIntId(model.board[kingSquare.index + indexnums[i]].id[1]) ==
          getIntId(kingSquare.id[1]) + expectedNums[i]
        ) {
          if (
            checkForThreat(kingSquare.index + indexnums[i], "black", "king")
          ) {
            isChecked = true;
          }
        }
      }
    }
  }
  return isChecked;
}

function knightCheck(color) {
  let isChecked = false;
  let kingSquare = getKingSquareByColor(color);
  const indexnums = [-10, -17, -15, -6, 10, 17, 15, 6];
  const expectedNums = [-2, -1, 1, 2, 2, 1, -1, -2];
  if (kingSquare.currentPiece.color == "black") {
    for (let i = 0; i < indexnums.length; i++) {
      if (
        kingSquare.index + indexnums[i] >= 0 &&
        kingSquare.index + indexnums[i] <= 63
      ) {
        if (
          getIntId(model.board[kingSquare.index + indexnums[i]].id[1]) ==
          getIntId(kingSquare.id[1]) + expectedNums[i]
        ) {
          if (
            checkForThreat(kingSquare.index + indexnums[i], "white", "knight")
          ) {
            isChecked = true;
          }
        }
      }
    }
  } else {
    for (let i = 0; i < indexnums.length; i++) {
      if (
        kingSquare.index + indexnums[i] >= 0 &&
        kingSquare.index + indexnums[i] <= 63
      ) {
        if (
          getIntId(model.board[kingSquare.index + indexnums[i]].id[1]) ==
          getIntId(kingSquare.id[1]) + expectedNums[i]
        ) {
          if (
            checkForThreat(kingSquare.index + indexnums[i], "black", "knight")
          ) {
            isChecked = true;
          }
        }
      }
    }
  }
  return isChecked;
}

function pawnCheck(color) {
  let isChecked = false;
  let kingSquare = getKingSquareByColor(color);
  if (kingSquare.currentPiece.color == "black") {
    if (kingSquare.index - 9 >= 0) {
      if (checkForThreat(kingSquare.index - 9, "white", "pawn")) {
        isChecked = true;
      }
    }
    if (kingSquare.index + 7 <= 63) {
      if (checkForThreat(kingSquare.index + 7, "white", "pawn")) {
        isChecked = true;
      }
    }
  } else {
    if (kingSquare.index + 9 <= 63) {
      if (checkForThreat(kingSquare.index + 9, "black", "pawn")) {
        isChecked = true;
      }
    }
    if (kingSquare.index - 7 >= 0) {
      if (checkForThreat(kingSquare.index - 7, "black", "pawn")) {
        isChecked = true;
      }
    }
  }
  return isChecked;
}

function checkForThreat(index, color, threat) {
  let isChecked = false;
  if (
    model.board[index].currentPiece != null &&
    model.board[index].currentPiece.type == threat &&
    model.board[index].currentPiece.color == color
  ) {
    console.log(
      model.board[index].currentPiece.type + " " + model.board[index].id
    );
    isChecked = true;
  }
  return isChecked;
}

function diagonalChecks(color) {
  let isChecked = false;
  let kingSquare = getKingSquareByColor(color);
  let currentPos = 1;
  let endpointLetter = ["h", "h", "a", "a"];
  let endpointnumber = ["8", "1", "1", "8"];
  let incremter = [9, 7, -9, -7];
  let threat = ["queen", "bishop"];
  for (let i = 0; i < incremter.length; i++) {
    endpoint = getEndPoint(
      kingSquare.index,
      incremter[i],
      endpointLetter[i],
      endpointnumber[i]
    );
    if (checkLoop(kingSquare, currentPos, endpoint, incremter[i], threat)) {
      isChecked = true;
    }
  }
  return isChecked;
}

function horizontalChecks(color) {
  let isChecked = false;
  let kingSquare = getKingSquareByColor(color);
  let currentPos = getIntId(kingSquare.id[1]);
  let endpoint = 8;
  let incremter = 1;
  let threat = ["queen", "rook"];
  if (checkLoop(kingSquare, currentPos, endpoint, incremter, threat)) {
    isChecked = true;
  }
  incremter = 8;
  currentPos = getIntFromLetter(kingSquare.id[0]);
  if (checkLoop(kingSquare, currentPos, endpoint, incremter, threat)) {
    isChecked = true;
  }
  incremter = -1;
  currentPos = 1 - getIntId(kingSquare.id[1]);
  endpoint = 0;
  if (checkLoop(kingSquare, currentPos, endpoint, incremter, threat)) {
    isChecked = true;
  }
  incremter = -8;
  currentPos = 1 - getIntFromLetter(kingSquare.id[0]);
  if (checkLoop(kingSquare, currentPos, endpoint, incremter, threat)) {
    isChecked = true;
  }
  return isChecked;
}

function checkLoop(kingSquare, currentPos, endpoint, incremter, threat) {
  let isChecked = false;
  let counter = incremter;
  for (let i = currentPos; i < endpoint; i++) {
    if (model.board[kingSquare.index + counter].currentPiece != null) {
      for (let j = 0; j < threat.length; j++) {
        if (
          model.board[kingSquare.index + counter].currentPiece.type ==
            threat[j] &&
          model.board[kingSquare.index + counter].currentPiece.color !=
            kingSquare.currentPiece.color
        ) {
          console.log(
            threat[j] + " " + model.board[kingSquare.index + counter].id
          );
          isChecked = true;
        }
      }
      break;
    }
    counter = counter + incremter;
  }
  return isChecked;
}
