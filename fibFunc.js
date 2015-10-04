Lazy = require('./node_modules/super-lazy-js/lazy.js');

var fibonacci2 = Lazy.generate(function() {
  var x = 1,
  y = 1;
  return function() {
    var prev = x;
    x = y;
    y += prev;
    return prev;
  };
}());

console.log(fibonacci2.length());

console.log(fibonacci2.take(12).toArray());

var fibonacci3 = Lazy.generate(function() {
  var x = 1,
  y = 1;
  return function() {
    var prev = x;
    x = y;
    y += prev;
    return prev;
  };
}());

console.log(fibonacci3.take(9).reverse().first(1).toArray());