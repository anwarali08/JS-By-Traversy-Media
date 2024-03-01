const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run(){
  // className
  // text.className = 'dark'
  // console.log(text.className)
  console.log(itemList.classList);
}


document.querySelector('button').onclick = run;