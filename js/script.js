var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("value1");
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("value3");
var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("value4");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

slider1.oninput = function() {
  output1.innerHTML = this.value;
  var r = parseInt(this.value)+parseInt(slider2.value)+parseInt(slider3.value)+parseInt(slider4.value);
  var g = 255-r;
  var b =255- r;
  r = 255;
  console.log(g);
  ctx.fillStyle = "rgb("+r+","+g+","+b+")";
  ctx.fillRect(0, 0, 400, 400);
}

slider2.oninput = function() {
  output2.innerHTML = this.value;
  var r = parseInt(slider1.value)+parseInt(this.value)+parseInt(slider3.value)+parseInt(slider4.value);
  var g = 255-r;
  var b = 255-r;
  r = 255;
  ctx.fillStyle = "rgb("+r+","+g+","+b+")";
  ctx.fillRect(0, 0, 400, 400);
}

slider3.oninput = function() {
  output3.innerHTML = this.value;
  var r = parseInt(slider1.value)+parseInt(slider2.value)+parseInt(this.value)+parseInt(slider4.value);
  var g =255- r;
  var b =255- r;
  r = 255;
  ctx.fillStyle = "rgb("+r+","+g+","+b+")";
  ctx.fillRect(0, 0, 400, 400);
}

slider4.oninput = function() {
  output4.innerHTML = this.value;
  var r = parseInt(slider1.value)+parseInt(slider2.value)+parseInt(slider3.value)+parseInt(this.value);
  var g = 255-r;
  var b = 255-r;
  r = 255;
  ctx.fillStyle = "rgb("+r+","+g+","+b+")";
  ctx.fillRect(0, 0, 400, 400);
}
