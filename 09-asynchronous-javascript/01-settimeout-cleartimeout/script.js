function changeText(){
document.querySelector('h1').textContent = "Changed Text"
}
let timer = setTimeout(changeText,3000)
document.getElementById('cancel').addEventListener('click',()=>{
  clearTimeout(timer)
})