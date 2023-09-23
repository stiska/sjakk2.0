function king(square) {
  const indexnums = [-1, -9, -8, -7, 1, 9, 8, 7];
  const expectedNums = [-1, -1, 0, 1, 1, 1, 0, -1];

  for (let i = 0; i < indexnums.length; i++) {
    if (checkIfIndexOnBoard(square, indexnums[i])) {
      kingMove(square, square.index + indexnums[i], expectedNums[i]);
    }
  }

  model.squareWithPieceToMove = square;
  highlightSelected(square);
  uppdateView();
}

function kingMove(square, index, expected) {
  if (
    getIntId(model.board[index].id[1]) == getIntId(square.id[1]) + expected &&
    model.board[index].currentPiece != null
  ) {
    checkIfFriendly(index, square);
  } else if (
    getIntId(model.board[index].id[1]) ==
    getIntId(square.id[1]) + expected
  ) {
    model.board[index].color = model.legalMoveColor;
  }
}

function checks(color) {
  let kingSquare = getKingSquareByColor(color);
  let currentPos = getIntId(kingSquare.id[1]);
  let endpoint = 8;
  let incremter = 1;
  let threat = ["queen", "rook"];
  //checkLoop(kingSquare, currentPos, endpoint, incremter, threat);
  incremter = 8;
  currentPos = getIntFromLetter(kingSquare.id[0]);
  //checkLoop(kingSquare, currentPos, endpoint, incremter, threat);
  incremter = -1;
  currentPos = 1 - getIntId(kingSquare.id[1]);
  endpoint = 0;
  //checkLoop(kingSquare, currentPos, endpoint, incremter, threat);
  incremter = -8;
  currentPos = 1 - getIntFromLetter(kingSquare.id[0]);
  //checkLoop(kingSquare, currentPos, endpoint, incremter, threat);
  // vertical & horizontal

  //diagonal
  incremter = 9;
  currentPos = 1;
  endpoint = getEndPoint(kingSquare.index, incremter, "h", "8");
  threat = ["queen", "bishop"];
  //checkLoop(kingSquare, currentPos, endpoint, incremter, threat);
  incremter = 7;
  endpoint = getEndPoint(kingSquare.index, incremter, "h", "1");
  //checkLoop(kingSquare, currentPos, endpoint, incremter, threat);
  incremter = -9;
  endpoint = getEndPoint(kingSquare.index, incremter, "a", "1");
  //checkLoop(kingSquare, currentPos, endpoint, incremter, threat);
  incremter = -7;
  endpoint = getEndPoint(kingSquare.index, incremter, "a", "8");
  //checkLoop(kingSquare, currentPos, endpoint, incremter, threat);
}

function checkLoop(kingSquare, currentPos, endpoint, incremter, threat) {
  let counter = incremter;
  for (let i = currentPos; i < endpoint; i++) {
    console.log(model.board[kingSquare.index + counter].id);
    if (model.board[kingSquare.index + counter].currentPiece != null) {
      for (let j = 0; j < threat.length; j++) {
        if (
          model.board[kingSquare.index + counter].currentPiece.type ==
            threat[j] &&
          model.board[kingSquare.index + counter].currentPiece.color !=
            kingSquare.currentPiece.color
        ) {
          console.log(threat[j]);
        }
      }
      break;
    }
    counter = counter + incremter;
  }
}
