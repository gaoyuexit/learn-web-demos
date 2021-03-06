window.onload = function(){

  console.log("网页可见区域宽：" + document.body.clientWidth);

  console.log("网页可见区域高：" + document.body.clientHeight);

  console.log("网页可见区域宽（包括边线的宽）：" + document.body.offsetWidth);

  console.log("网页可见区域高（包括边线的高）：" + document.body.offsetHeight);

  console.log("网页正文全文宽：" + document.body.scrollWidth);

  console.log("网页正文全文高：" + document.body.scrollHeight);

  console.log("网页被卷去的高：" + document.body.scrollTop);

  console.log("网页被卷去的左：" + document.body.scrollLeft);

  console.log("屏幕可用工作区高度：" + window.screen.availHeight);

  console.log("屏幕可用工作区宽度：" + window.screen.availWidth);



  var page1 = document.getElementById('page1');
  var page2 = document.getElementById('page2');
  var page3 = document.getElementById('page3');

  var music = document.getElementById('music');
  var audio = document.getElementsByTagName('audio')[0];

  // 音乐转盘点击
  music.onclick = function(){
    if(audio.paused) {
      audio.play();
      // this.setAttribute("class", "play");
      this.style.animationPlayState = 'running';
    }else {
      audio.pause();
      // this.setAttribute("class", "");
      this.style.animationPlayState = 'paused';
    }
  };

  // 音频结束
  audio.addEventListener("ended", function(event){
    // music.setAttribute("class", "");
    music.style.animationPlayState = 'paused';
  }, false);
  
  page1.addEventListener("touchstart", function(event){
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "block";
    page3.style.top     = "100%";
    setTimeout(() => {
      page2.setAttribute("class", "page fadeOut");
      page3.setAttribute("class", "page fadeIn");
    }, 5500);
  }, false);




}
