let currentGame = null;

function loadGame(name) {
  if (currentGame && currentGame.stop) currentGame.stop();
  if (name === "snake") currentGame = SnakeGame();
  if (name === "pong") currentGame = PongGame();
}
