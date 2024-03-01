const logo = document.querySelector('img')

const onClick = () =>{console.log('click event')}
const onDoubleClick = () =>{console.log('Double click event')}
const onRightClick = () =>{console.log('Right click event')}
const onMouseDown = () =>{console.log('Mouse Down event')}
const onMouseUp = () =>{console.log('Mouse Up event')}
const mouseWheel = () =>{console.log('Wheel event')}
const mouseOver = () =>{console.log('Mouse over event')}
const mouseOut = () =>{console.log('Mouse Out event')}

// Event Listeners
// Single Click
logo.addEventListener('click',onClick);
// Double CLick
logo.addEventListener('dblclick',onDoubleClick);
// Right Click
logo.addEventListener('contextmenu',onRightClick);
// Mouse Down - Happens when you press the button
logo.addEventListener('mousedown',onMouseDown);
// Mouse Up - Happens when you release the button
logo.addEventListener('mouseup',onMouseUp);
// Mouse wheel - This only works when you start scrolling if the mouse is on
// the element. It will keep running this function till you scroll the wheel
// and will only stop when when move the mouse outside the event
logo.addEventListener('wheel',mouseWheel);
// You will have to use 'mouseover' and 'mouseout' to create the hover effect
logo.addEventListener('mouseover',mouseOver);
logo.addEventListener('mouseout',mouseOut);
// runs only once when you start dragging
logo.addEventListener('dragstart',mouseOut);
// Keeps running untill you leave the object after you start dragging
logo.addEventListener('drag',mouseOut);
// runs only once when you stop dragging the object
logo.addEventListener('dragend',mouseOut);
