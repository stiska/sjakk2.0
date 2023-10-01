function king(square) {
  const indexnums = [-1, -9, -8, -7, 1, 9, 8, 7];
  const expectedNums = [-1, -1, 0, 1, 1, 1, 0, -1];
  for (let i = 0; i < indexnums.length; i++) {
    if (checkIfIndexOnBoard(square, indexnums[i])) {
      kingMove(square, square.index + indexnums[i], expectedNums[i]);
    }
  }
  if (square.currentPiece.hasMoved == false) {
    castle(square);
  } else {
    if (square.color == "black") {
      model.blackCastleSquare = null;
    } else {
      model.whiteCastleSquare = null;
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
    if (
      checkIfFriendly(index, square) == false &&
      checkMockMove(square, index) == false
    ) {
      if (model.checking == true) {
        model.haveLegalMoves = true;
      } else {
        model.board[index].color = model.legalMoveColor;
      }
    }
  } else if (
    getIntId(model.board[index].id[1]) == getIntId(square.id[1]) + expected &&
    checkMockMove(square, index) == false
  ) {
    if (model.checking == true) {
      model.haveLegalMoves = true;
    } else {
      model.board[index].color = model.legalMoveColor;
    }
  }
}

function castle(square) {
  // white rook square
  let a1 = getSquareById("a1");
  const squaresA1 = ["b1", "c1", "d1"];
  const checkA1 = ["d1", "c1"];
  let h1 = getSquareById("h1");
  const squaresH1 = ["f1", "g1"];
  const checkH1 = ["f1", "g1"];
  //black rook square
  let a8 = getSquareById("a8");
  const squaresA8 = ["b8", "c8", "d8"];
  const checkA8 = ["d8", "c8"];
  let h8 = getSquareById("h8");
  const squaresH8 = ["f8", "g8"];
  const checkH8 = ["f8", "g8"];
  if (square.currentPiece.color == "black") {
    if (
      checkRook(a8) &&
      checkEmpty(squaresA8) &&
      checkCastleMove(square, checkA8) == false
    ) {
      let temp = getSquareById("c8");
      temp.color = model.legalMoveColor;
      model.canCastle = true;
    }
    if (
      checkRook(h8) &&
      checkEmpty(squaresH8) &&
      checkCastleMove(square, checkH8) == false
    ) {
      let temp = getSquareById("g8");
      temp.color = model.legalMoveColor;
      model.canCastle = true;
    }
  } else {
    if (
      checkRook(a1) &&
      checkEmpty(squaresA1) &&
      checkCastleMove(square, checkA1) == false
    ) {
      let temp = getSquareById("c1");
      temp.color = model.legalMoveColor;
      model.canCastle = true;
    }
    if (
      checkRook(h1) &&
      checkEmpty(squaresH1) &&
      checkCastleMove(square, checkH1) == false
    ) {
      let temp = getSquareById("g1");
      temp.color = model.legalMoveColor;
      model.canCastle = true;
    }
  }
}

function checkCastleMove(square, squaresToCheck) {
  let result = checks(square.currentPiece.color);
  let temp;
  for (let i = 0; i < squaresToCheck.length; i++) {
    temp = getSquareById(squaresToCheck[i]);
    if (checkMockMove(square, temp.index)) {
      result = true;
    }
  }
  return result;
}

function checkRook(target) {
  if (
    target.currentPiece != null &&
    target.currentPiece.type == "rook" &&
    target.currentPiece.hasMoved == false
  ) {
    return true;
  } else {
    return false;
  }
}

function checkEmpty(squares) {
  let result = true;
  let temp;
  for (let i = 0; i < squares.length; i++) {
    temp = getSquareById(squares[i]);
    console.log(temp.currentPiece);
    if (temp.currentPiece != null) {
      result = false;
    }
  }
  return result;
}
