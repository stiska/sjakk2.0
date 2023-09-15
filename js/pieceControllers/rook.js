function rook(square) {
  rookAndQueenMove(square);
  model.squareWithPieceToMove = square;
  highlightSelected(square);
  uppdateView();
}
