var starObj = function() 
{
  this.x;
  this.y;
  this.picNo;
  this.delta;

  // x轴运动速度
  this.xSpd;
  // x轴运动速度
  this.ySpd;
}

starObj.prototype.init = function()
{
  this.x = Math.random() * 600 + 100  // Math.random()返回 [0, 1)
  this.y = Math.random() * 300 + 150;
  this.picNo = Math.floor(Math.random() * 7);
  this.delta = 0;
  this.xSpd = Math.random() * 3 - 1.5; // [-1.5, 1.5)
  this.ySpd = Math.random() * 3 - 1.5;
}

starObj.prototype.draw = function()
{
  this.x += this.xSpd * deltaTime * 0.004;
  this.y += this.ySpd * deltaTime * 0.004;
  
  // 超出图片的范围
  if (this.x < 100 || this.x > 700 || this.y < 150 || this.y > 450) 
  {
    this.init();
    return;
  }

  // 动画间隔太快了, 放慢动画  50ms闪一次
  this.delta += deltaTime;
  if (this.delta > 50) {
    this.picNo += 1;
    this.picNo %= 7;
    this.delta = 0;
  }

  ctx.save();

  ctx.globalAlpha = starAlpha;
  // drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
  ctx.drawImage(starPic, this.picNo*7, 0, 7, 7, this.x, this.y, 7, 7);

  ctx.restore();
}

function drawStars()
{
  for(let i = 0; i < num; i++)
  {
    stars[i].draw();
  }
}

// 更新星星的状态
function starAlphaUpdate()
{
  if(switchy) {
    starAlpha += 0.03 * deltaTime * 0.03;
    if(starAlpha > 1) { starAlpha = 1 }
  }else{
    starAlpha -= 0.03 * deltaTime * 0.03;
    if(starAlpha < 0) { starAlpha = 0 }
  }
}








