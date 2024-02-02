/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;
console.log("Game initialized:", newGame);

// TODO 4 implementirati reakciju na klik dugmeta StartGame
document.getElementById("startGame").addEventListener("click", function () {
  let playerName = Utility.getInputValue("playername");
  let factor = parseInt(Utility.getInputValue("factor"), 10);
  let problemCount = parseInt(Utility.getInputValue("problemCount"), 10);

  let newPlayer = new Player(playerName, 0);
  newGame = new Game(newPlayer, problemCount, factor);
  newGame.displayGame();

  console.log("Game after setup:", newGame);
});

// TODO  implementirati reakciju na klik dugmeta Calculate
document.getElementById("calculate").addEventListener("click", function () {
  console.log("Game obj from calculate fn:", newGame);

  if (newGame) {
    newGame.calculateScore();
  } else {
    console.error("Game not initialized!");
  }
});