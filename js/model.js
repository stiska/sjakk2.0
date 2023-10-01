const model = {
  //app
  curentPage: "game",
  colorToMove: "white",
  hasWon: null,
  enPassantIndex: null,
  modal: "none",
  checking: false,
  haveLegalMoves: true,
  canCastle: false,
  //inputs

  blackColor: "#800000",
  whiteColor: "#ffffff",
  squareWithPieceToMove: null,
  promotionIndex: null,

  //data
  legalMoveColor: "#808080",
  selecktedColor: "#6dc544",
  board: [],
  promoteBlackImg: [
    "img/black queen.png",
    "img/black rook.png",
    "img/black bishop.png",
    "img/black horse.png",
  ],
  promoteWhiteImg: [
    "img/white queen.png",
    "img/white rook.png",
    "img/white bishop.png",
    "img/white horse.png",
  ],
  InPlayPieces: [
    {
      id: "black king e",
      type: "king",
      startPossison: "e8",
      color: "black",
      hasMoved: false,
      imageLink: "img/black king.png",
    },
    {
      id: "black queen d",
      type: "queen",
      startPossison: "d8",
      color: "black",
      imageLink: "img/black queen.png",
    },
    {
      id: "black bishop c",
      type: "bishop",
      startPossison: "c8",
      color: "black",
      imageLink: "img/black bishop.png",
    },
    {
      id: "black bishop f",
      type: "bishop",
      startPossison: "f8",
      color: "black",
      imageLink: "img/black bishop.png",
    },
    {
      id: "black knight b",
      type: "knight",
      startPossison: "b8",
      color: "black",
      imageLink: "img/black horse.png",
    },
    {
      id: "black knight g",
      type: "knight",
      startPossison: "g8",
      color: "black",
      imageLink: "img/black horse.png",
    },
    {
      id: "black rook a",
      type: "rook",
      startPossison: "a8",
      color: "black",
      hasMoved: false,
      imageLink: "img/black rook.png",
    },
    {
      id: "black rook h",
      type: "rook",
      startPossison: "h8",
      color: "black",
      hasMoved: false,
      imageLink: "img/black rook.png",
    },
    {
      id: "black pawn a",
      type: "pawn",
      startPossison: "a7",
      color: "black",
      hasMoved: false,
      imageLink: "img/black pawn.png",
    },
    {
      id: "black pawn b",
      type: "pawn",
      startPossison: "b7",
      color: "black",
      hasMoved: false,
      imageLink: "img/black pawn.png",
    },
    {
      id: "black pawn c",
      type: "pawn",
      startPossison: "c7",
      color: "black",
      hasMoved: false,
      imageLink: "img/black pawn.png",
    },
    {
      id: "black pawn d",
      type: "pawn",
      startPossison: "d7",
      color: "black",
      hasMoved: false,
      imageLink: "img/black pawn.png",
    },
    {
      id: "black pawn e",
      type: "pawn",
      startPossison: "e7",
      color: "black",
      hasMoved: false,
      imageLink: "img/black pawn.png",
    },
    {
      id: "black pawn f",
      type: "pawn",
      startPossison: "f7",
      color: "black",
      hasMoved: false,
      imageLink: "img/black pawn.png",
    },
    {
      id: "black pawn g",
      type: "pawn",
      startPossison: "g7",
      color: "black",
      hasMoved: false,
      imageLink: "img/black pawn.png",
    },
    {
      id: "black pawn h",
      type: "pawn",
      startPossison: "h7",
      color: "black",
      hasMoved: false,
      imageLink: "img/black pawn.png",
    },
    {
      id: "white king e",
      type: "king",
      startPossison: "e1",
      color: "white",
      hasMoved: false,
      imageLink: "img/white king.png",
    },
    {
      id: "white queen d",
      type: "queen",
      startPossison: "d1",
      color: "white",
      imageLink: "img/white queen.png",
    },
    {
      id: "white bishop c",
      type: "bishop",
      startPossison: "c1",
      color: "white",
      imageLink: "img/white bishop.png",
    },
    {
      id: "white bishop f",
      type: "bishop",
      startPossison: "f1",
      color: "white",
      imageLink: "img/white bishop.png",
    },
    {
      id: "white knight b",
      type: "knight",
      startPossison: "b1",
      color: "white",
      imageLink: "img/white horse.png",
    },
    {
      id: "white knight g",
      type: "knight",
      startPossison: "g1",
      color: "white",
      imageLink: "img/white horse.png",
    },
    {
      id: "white rook a",
      type: "rook",
      startPossison: "a1",
      color: "white",
      hasMoved: false,
      imageLink: "img/white rook.png",
    },
    {
      id: "white rook h",
      type: "rook",
      startPossison: "h1",
      color: "white",
      hasMoved: false,
      imageLink: "img/white rook.png",
    },
    {
      id: "white pawn a",
      type: "pawn",
      startPossison: "a2",
      color: "white",
      hasMoved: false,
      imageLink: "img/white pawn.png",
    },
    {
      id: "white pawn b",
      type: "pawn",
      startPossison: "b2",
      color: "white",
      hasMoved: false,
      imageLink: "img/white pawn.png",
    },
    {
      id: "white pawn c",
      type: "pawn",
      startPossison: "c2",
      color: "white",
      hasMoved: false,
      imageLink: "img/white pawn.png",
    },
    {
      id: "white pawn d",
      type: "pawn",
      startPossison: "d2",
      color: "white",
      hasMoved: false,
      imageLink: "img/white pawn.png",
    },
    {
      id: "white pawn e",
      type: "pawn",
      startPossison: "e2",
      color: "white",
      hasMoved: false,
      imageLink: "img/white pawn.png",
    },
    {
      id: "white pawn f",
      type: "pawn",
      type: "pawn",
      startPossison: "f2",
      color: "white",
      hasMoved: false,
      imageLink: "img/white pawn.png",
    },
    {
      id: "white pawn g",
      type: "pawn",
      startPossison: "g2",
      color: "white",
      hasMoved: false,
      imageLink: "img/white pawn.png",
    },
    {
      id: "white pawn h",
      type: "pawn",
      startPossison: "h2",
      color: "white",
      hasMoved: false,
      imageLink: "img/white pawn.png",
    },
  ],
};
