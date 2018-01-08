const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;
const RADIUS = 8;
const MARGE_TOP = 60;
const MARGE_LEFT = 30;
// 倒计时的截止日期
//月份0-11
const endTime = new Date(2018,0,9,18,47,52);
var curShowTimeSeconds = 0;

// 需要做动画的小球
var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]

window.onload = function(){

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;

  curShowTimeSeconds = getCurShowTimeSeconds();

  setInterval(function(){
    render(context);
    update();
  }, 50)
}

function getCurShowTimeSeconds(){
  var curTime = new Date();
  //到1970的毫秒数
  var result = endTime.getTime() - curTime.getTime();
  result = Math.round(result/1000)
  return result > 0 ? result : 0;
}

function update(){
  var nextTimeSeconds = getCurShowTimeSeconds();
  if(nextTimeSeconds != curShowTimeSeconds){ curShowTimeSeconds = nextTimeSeconds }
  


}

function render(ctx){

  ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  
  var hours = parseInt( curShowTimeSeconds/3600 );
  var minutes = parseInt( (curShowTimeSeconds - hours * 3600)/60 );
  var seconds = curShowTimeSeconds % 60;

  renderDigit(MARGE_LEFT, MARGE_TOP, parseInt(hours/10), ctx);
  // 一个小格子的宽为2*(RADIUS+1) 一个数字的宽度为7个小个子14*(RADIUS+1)  这里写成15*(RADIUS+1)留出点间距
  renderDigit(MARGE_LEFT + 15*(RADIUS+1), MARGE_TOP, parseInt(hours%10), ctx);
  // 冒号: 4*10, 宽度为8*(RADIUS+1) 
  renderDigit(MARGE_LEFT + 30*(RADIUS+1), MARGE_TOP, 10, ctx);

  renderDigit(MARGE_LEFT + 39*(RADIUS+1), MARGE_TOP, parseInt(minutes/10), ctx);
  renderDigit(MARGE_LEFT + 54*(RADIUS+1), MARGE_TOP, parseInt(minutes%10), ctx);

  renderDigit(MARGE_LEFT + 69*(RADIUS+1), MARGE_TOP, 10, ctx);

  renderDigit(MARGE_LEFT + 78*(RADIUS+1), MARGE_TOP, parseInt(seconds/10), ctx);
  renderDigit(MARGE_LEFT + 93*(RADIUS+1), MARGE_TOP, parseInt(seconds%10), ctx);
}


function renderDigit(x, y, num, ctx){
  ctx.fillStyle = 'rgb(0, 102, 153)';
  for(var i = 0; i < digit[num].length; i++){
    for(var j = 0; j < digit[num][i].length; j++){
      if(digit[num][i][j] == 1){
        var centerX = x+j*2*(RADIUS+1)+(RADIUS+1) 
        var centerY = y+i*2*(RADIUS+1)+(RADIUS+1)

        ctx.beginPath();
        ctx.arc(centerX, centerY, RADIUS, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
      }
    }

  }
}
