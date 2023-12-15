const progress1 = document.getElementById('progress1');
const progress2 = document.getElementById('progress2');

document.getElementById('button1').addEventListener('click', () => {
  setProgress(33);
});

document.getElementById('button2').addEventListener('click', () => {
  setProgress(66);
});

document.getElementById('button3').addEventListener('click', () => {
  setProgress(100);
});

function setProgress(widthPercentage) {
  progress1.style.width = widthPercentage + '%';
  progress2.textContent = widthPercentage + '%';
}