var
  obj1 = {value: 1},
  obj2 = {value: 2},
  obj3 = {value: 3};

var accmulator = function() {
  // anonymous function
  var values = [];
  return function(obj) {
    // another anonymous function!
    if (obj) {
      values.push(obj.value);
      return values;
    }
    else {
      return values;
    }
  }
}; // make it self-executing

var values = accmulator();

console.log(values(obj1)); // Returns: [obj.value]
console.log(values(obj2));