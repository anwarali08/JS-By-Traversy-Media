function removeElement(){
  Array.from(document.querySelector('#item-list').children).forEach(element=>{
    element.remove()
  })
}
document.querySelector('#clear').addEventListener('click',removeElement)