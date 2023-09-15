function queen(square) {
  rookAndQueenMove(square);
  bishopAndQueenMove(square);
  model.squareWithPieceToMove = square;
  highlightSelected(square);
  uppdateView();
}
