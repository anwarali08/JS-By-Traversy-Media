let i=1
let counter = setInterval(()=>{
  if(i<10){
    console.log(i++)
  }else{
    clearInterval(counter)
  }
},100) 
