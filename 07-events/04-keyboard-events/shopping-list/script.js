const itemInput = document.getElementById('item-input')
function onKeyPress(e){
  console.log("keypress");
}
function onKeyUp(e){
  console.log("Key Up");
}
function onKeyDown(e){
  // Key
    console.log(e.key);
  // keyCode

  // code

}
itemInput.addEventListener('keypress',onKeyPress)
itemInput.addEventListener('keyup',onKeyUp)
itemInput.addEventListener('keydown',onKeyDown)