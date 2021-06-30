export default class GameView {
  updateBoard(game) {
    this.updateTurn(game);
    const winningCombination = game.findWinningCombinations();

    console.log("this is a board within GameView ");
    console.log(game.board);
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      const winner = document.querySelector(".winner");

      tile.classList.remove("tile-winner");

      let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";

      tile.innerHTML = `<span class="${tileType}"> ${
        game.board[i] ? game.board[i] : ""
      } </span>`;

      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add("tile-winner");
        winner.innerHTML = `<h1>winner is ${game.board[i]}</h1>`;
      } else {
        winner.innerHTML = `<h1></h1>`;
      }
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector(".player-X");
    let playerO = document.querySelector(".player-O");
    playerX.classList.remove("active");
    playerO.classList.remove("active");

    if (game.turn == "X") {
      playerX.classList.add("active");
    } else {
      playerO.classList.add("active");
    }
  }
}
