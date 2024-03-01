const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
let value

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    value = data.value; 
    document.getElementById('joke').textContent = value
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  }
};
// Send request


document.getElementById('joke-btn').addEventListener('click',()=>{
  xhr.send();
})