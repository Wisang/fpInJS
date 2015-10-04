var
  integers = [1,-0,9,-8,3],
  numbers = [1,2,3,4],
  str = 'hello world how ya doing?';
// map integers to their absolute values
console.log(integers.map(Math.abs));

// multiply an array of numbers by their position in the array
console.log(numbers.map(function(x, i){return x*i}) );

// Capitalize every other word in a string.
console.log(str.split(' ').map(function(s, i){
  if (i%2 == 0) {
    return s.toUpperCase();
  }
  else {
    return s;
  }
}) );