// executed by the browser when the 
// script tag is loaded in the HTML

console.log("hello world!");

// add more code here!
document.querySelector("#main-heading").textContent = "Hey Nirvana!"

const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'mango', color: 'orange' },
];

// Use the arrows to pop open objects
console.log('click to expand!', fruits);

// can do tricks the node console can
console.table(fruits);