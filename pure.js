// function that prints a message to the center of the screen
var printCenter = function(str) {
  var elem = document.createElement("div");
  elem.textContent = str;
  elem.style.position = 'absolute';
  elem.style.top = window.innerHeight/2+"px";
  elem.style.left = window.innerWidth/2+"px";
  document.body.appendChild(elem);
};
printCenter('hello world');

// pure function that accomplishes the same thing

// var messages = ['Hi', 'Hello', 'Sup', 'Hey', 'Hola'];
// messages.map(function(s,i){
//   return printSomewhere(s, 100*i*10, 100*i*10);
// }).forEach(function(element) {
//   document.body.appendChild(element);
// });