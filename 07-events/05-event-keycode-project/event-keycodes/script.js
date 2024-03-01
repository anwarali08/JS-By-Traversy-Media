document.body.addEventListener('keydown',(e)=>{
  document.querySelector("#insert .key:nth-child(1)").innerHTML = e.key+
  "<small>e.key</small>";
  document.querySelector("#insert .key:nth-child(2)").innerHTML = e.keyCode+
  "<small>e.keyCode</small>";
  document.querySelector("#insert .key:nth-child(3)").innerHTML = e.code+
  "<small>event.code</small>";
})