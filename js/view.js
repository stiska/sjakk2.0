createBoard();
uppdateView();
function uppdateView() {
  let html = ``;
  if (model.curentPage == "game") {
    html = uppdateViewBoard();
  }
  document.getElementById("app").innerHTML = html;
}

function uppdateViewBoard() {
  let html =
    /*html*/
    `
    <div class="modal" style="display:${model.modal}">
      <div class="modal-content" >
        <div class="promotion-container">
          <button onclick="promotePawn('p queen', 0)">Queen</button>
          <button onclick="promotePawn('p rook', 1)">Rook</button>
          <button onclick="promotePawn('p bishop', 2)">Bishop</button>
          <button onclick="promotePawn('p horse', 3)">Horse</button>
        </div>
      </div>
    </div>
      <div class="whosTurn">${model.colorToMove} to move</div><br>  
        <div class="board-container">
          <div class="board">${drawBoard()}</div>
        </div>
    `;
  return html;
}

function drawBoard() {
  let html = ``;
  for (let i = 0; i < model.board.length; i++) {
    html += /*html*/ `
      <div
      id="${model.board[i].id}"
      onclick="initiateMove(this.id)" 
      class="chessSquare" 
      style=" background-color: ${model.board[i].color}"
      >
      ${drawPiese(i)}
      ${model.board[i].id}
      </div>
      `;
  }
  return html;
}

function drawPiese(i) {
  let html = ``;
  if (model.board[i].currentPiece != null) {
    html = `<img class="piece" src="${model.board[i].currentPiece.imageLink}" />`;
  }
  return html;
}
