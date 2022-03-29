import Canvas from './modules/canvas.js';

const canvas = new Canvas('.canvas', '[data-canvas]', '.snake');
console.log(canvas);
canvas.init();

// const arra = [20, 30, 40, 50];
// console.log(Math.max(...arra));

// function handleMouse(event) {
//   const { clientX, clientY } = event;
//   console.log(clientX, clientY, event);
// }

// document.addEventListener('click', handleMouse);
