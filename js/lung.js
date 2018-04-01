var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("value1");
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");


output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

slider1.oninput = function() {
  output1.innerHTML = this.value;
  var r = parseInt(this.value)+parseInt(slider2.value);
  var g = 255-r;
  var b =255- r;
  r = 255;
  ctx.fillStyle = "rgb("+r+","+g+","+b+")";
  ctx.fillRect(0, 0, 400, 400);
}

slider2.oninput = function() {
  output2.innerHTML = this.value;
  var r = parseInt(slider1.value)+parseInt(this.value);
  var g = 255-r;
  var b = 255-r;
  r = 255;
  ctx.fillStyle = "rgb("+r+","+g+","+b+")";
  ctx.fillRect(0, 0, 400, 400);
}
