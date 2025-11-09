function PongGame() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  let ball = {x:200,y:200,dx:3,dy:3};
  let paddle = {x:160,y:380,w:80,h:10};
  let interval;

  function draw() {
    ctx.fillStyle="#1e293b";
    ctx.fillRect(0,0,400,400);

    ctx.fillStyle="#5eead4";
    ctx.fillRect(paddle.x,paddle.y,paddle.w,paddle.h);

    ctx.beginPath();
    ctx.arc(ball.x,ball.y,10,0,Math.PI*2);
    ctx.fillStyle="#f59e0b";
    ctx.fill();
  }

  function update() {
    ball.x+=ball.dx;
    ball.y+=ball.dy;

    if(ball.x<10||ball.x>390) ball.dx*=-1;
    if(ball.y<10) ball.dy*=-1;

    if(ball.y>370 && ball.x>paddle.x && ball.x<paddle.x+paddle.w) {
      ball.dy*=-1;
    }

    if(ball.y>400) {
      stop();
      alert("انتهت اللعبة!");
    }
  }

  function loop() {
    update();
    draw();
  }

  function keyHandler(e) {
    if(e.key==="ArrowLeft") paddle.x-=20;
    if(e.key==="ArrowRight") paddle.x+=20;
  }

  document.addEventListener("keydown",keyHandler);
  interval=setInterval(loop,30);

  function stop() {
    clearInterval(interval);
    document.removeEventListener("keydown",keyHandler);
  }

  return {stop};
}
