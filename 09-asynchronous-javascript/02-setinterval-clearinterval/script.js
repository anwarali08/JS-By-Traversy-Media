let body = document.body;
body.style.backgroundColor = 'red';
let changeColor;
function startColorChange() {
  console.log('addw');
  changeColor = setInterval(() => {
    if (body.style.backgroundColor == 'red') {
      body.style.backgroundColor = 'blue';
    } else {
      body.style.backgroundColor = 'red';
    }
  }, 100);
}
function stopColorChange() {
  clearInterval(changeColor);
}
console.log(document.getElementById('start'));
document.getElementById('start').addEventListener('click', startColorChange);
document.getElementById('stop').addEventListener('click', stopColorChange);
