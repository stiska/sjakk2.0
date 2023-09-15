function bishop(square) {
  bishopAndQueenMove(square);
  model.squareWithPieceToMove = square;
  highlightSelected(square);
  uppdateView();
}
