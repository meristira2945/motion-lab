'use strict';

const shape = document.getElementById('shape');
const speed = document.getElementById('speed');
const stopButton = document.getElementById('stop');
let degree = 0;
let angle = 0;
let isPlaying = true;

function rotateShape() {
  if (isPlaying) {
    degree = (degree + Number(speed.value)) % 360;
    shape.style.transform = 'rotateY(' + degree + 'deg) rotateZ(' + angle + 'deg)';
  }
}

setInterval(rotateShape, 20);

document.getElementById('square').onclick = function () {
  shape.style.borderRadius = '0';
  angle = 0;
  shape.style.transform = 'rotateY(' + degree + 'deg) rotateZ(' + angle + 'deg)';
};

document.getElementById('circle').onclick = function () {
  shape.style.borderRadius = '50%';
  angle = 0;
  shape.style.transform = 'rotateY(' + degree + 'deg) rotateZ(' + angle + 'deg)';
};

document.getElementById('diamond').onclick = function () {
  shape.style.borderRadius = '0';
  angle = 45;
  shape.style.transform = 'rotateY(' + degree + 'deg) rotateZ(' + angle + 'deg)';
};

document.getElementById('blue').onclick = function () {
  shape.style.backgroundColor = 'steelblue';
};
document.getElementById('red').onclick = function () {
  shape.style.backgroundColor = 'indianred';
};
document.getElementById('green').onclick = function () {
  shape.style.backgroundColor = 'seagreen';
};

stopButton.onclick = function () {
  isPlaying = !isPlaying;
  if (isPlaying) {
    stopButton.innerText = '一時停止';
  } else {
    stopButton.innerText = '再生';
  }
};

document.getElementById('reset').onclick = function () {
  degree = 0;
  angle = 0;
  shape.style.transform = 'rotateY(0deg)';
  shape.style.backgroundColor = 'steelblue';
  shape.style.borderRadius = '0';
  speed.value = '3';
  isPlaying = true;
  stopButton.innerText = '一時停止';
};
