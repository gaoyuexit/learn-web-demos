var canvas;
var ctx;
var ball;
var raf;
var running = false;

function draw() {
  // ctx.clearRect(0,0, canvas.width, canvas.height);
  // 我们使用的是 clearRect 函数帮我们清除前一帧动画。若用一个半透明的 fillRect 函数取代之，就可轻松制作长尾效果
  clear();
  
  ball.draw();

  ball.x += ball.vx;
  ball.y += ball.vy;
  
  //逐帧减少垂直方向的速度，所以小球最终将只会在地板上弹跳
  // h = 0.5 * gt * t
  ball.vy *= .99;
  ball.vy += .25;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) { ball.vy = -ball.vy; }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) { ball.vx = -ball.vx; }
  raf = window.requestAnimationFrame(draw);
}

function clear() {
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

document.body.onload = function() {

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  ball = {
    x: 100,
    y: 100,
    radius: 25,
    color: 'blue', 
    vx: 5,
    vy: 2,
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };
  ball.draw();

  canvas.addEventListener('mousemove', function(e){
    if (!running) {
      clear();
      ball.x = e.clientX;
      ball.y = e.clientY;
      ball.draw();
    }
  });
  
  canvas.addEventListener('click',function(e){
    if (!running) {
      raf = window.requestAnimationFrame(draw);
      running = true;
    }
  });
  
  canvas.addEventListener('mouseout', function(e){
    window.cancelAnimationFrame(raf);
    running = false;
  });
}





