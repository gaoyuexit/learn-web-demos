/**
 * 1. 许多星星
 * 2. 序列帧动画
 * 3. 随机位移
 * 4. 重生判断
 */


var can;
var ctx;
var w; 
var h;
var girlPic = new Image();
var starPic = new Image();

// star number
var num = 60;
var stars = [];

// 上一帧刷新的时间
var lastTime;
// 当前帧刷新的时间与上次帧刷新时间的间隔
var deltaTime


function init()
{
  can = document.getElementById("canvas")
  if (can.getContext){
    ctx = can.getContext('2d');
    w = can.width;
    h = can.height;
    girlPic.src = "src/girl.jpg";
    starPic.src = "src/star.png";
    
    for(let i = 0; i < num; i++)
    {
      let obj = new starObj();
      stars.push(obj);
      stars[i].init();
    }
    lastTime = Date.now();

    // girlPic.onload = function(){
    //   drawBackground();
    //   drawGril();
    // }
    gameloop();
  }
}

document.body.onload = init;

/**
 * 循环调用的方法
 * 1. requestAnimFrame(function(){}) 可以依据你的设备性能来确定每次循环的时
 * 2. setTimeout(function(){}, time)  
 * 3. setInterval(function(){}, time) 
 */

function gameloop()
{
  window.requestAnimFrame(gameloop);

  let nowTime = Date.now();
  deltaTime = nowTime - lastTime;
  lastTime = nowTime;
  // 背景图片要和星星同时更新
  drawBackground();
  drawGril();
  drawStars();
}

function drawBackground()
{
  ctx.fillStyle = "#393550";
  ctx.fillRect(0, 0, w, h);
}

function drawGril()
{
  ctx.drawImage(girlPic, 100, 150, 600, 300)
}








