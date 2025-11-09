function SnakeGame() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  let snake = [{x: 200, y:200}];
  let dir = {x:20, y:0};
  let food = {x:100, y:100};
  let interval;

  function draw() {
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(0,0,400,400);

    // food
    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(food.x, food.y, 20,20);

    // snake
    ctx.fillStyle = "#5eead4";
    snake.forEach(p => ctx.fillRect(p.x,p.y,20,20));
  }

  function update() {
    const head = {x: snake[0].x+dir.x, y: snake[0].y+dir.y};
    snake.unshift(head);

    if (head.x===food.x && head.y===food.y) {
      food = {x: Math.floor(Math.random()*20)*20, y: Math.floor(Math.random()*20)*20};
    } else {
      snake.pop();
    }

    if (head.x<0||head.y<0||head.x>=400||head.y>=400 ||
        snake.slice(1).some(p=>p.x===head.x&&p.y===head.y)) {
      stop();
      alert("انتهت اللعبة!");
    }
  }

  function loop() {
    update();
    draw();
  }

  function keyHandler(e) {
    if (e.key==="ArrowUp" && dir.y===0) dir={x:0,y:-20};
    if (e.key==="ArrowDown" && dir.y===0) dir={x:0,y:20};
    if (e.key==="ArrowLeft" && dir.x===0) dir={x:-20,y:0};
    if (e.key==="ArrowRight" && dir.x===0) dir={x:20,y:0};
  }

  document.addEventListener("keydown", keyHandler);
  interval = setInterval(loop,150);

  function stop() {
    clearInterval(interval);
    document.removeEventListener("keydown", keyHandler);
  }

  return {stop};
}
