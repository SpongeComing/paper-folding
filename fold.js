var oDiv = document.getElementById('wrap');
var oBtn = oDiv.getElementsByTagName('input')[0];
var aDiv = oDiv.getElementsByTagName('div');
var iNow = 0;
var timer = null;
oBtn.onOff = true;

oBtn.onclick = function () {

if (this.onOff) {

  iNow = 0;
  oBtn.style.left = '-640px';

  timer = setInterval(function () {

   aDiv[iNow].className = 'show';

  iNow++;

  if (iNow == aDiv.length) {

    clearInterval(timer);
    oBtn.style.left = '-530px';
    oBtn.value = '关闭';
  }
  },300);

}else{

  iNow = aDiv.length-1;
  oBtn.style.left = '-640px';

  timer = setInterval(function () {
  aDiv[iNow].className = 'hide';

  iNow--;

  if (iNow<0) {
    clearInterval(timer);
    oBtn.style.left = '-530px';
    oBtn.value = '展开';
  }
  },200)
}

this.onOff = !this.onOff;
}