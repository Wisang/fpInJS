var
  obj1 = {value: 1},
  obj2 = {value: 2},
  obj3 = {value: 3};

var ValueAccumulator = function(obj) {
  var values = []
  var accumulate = function() {
    values.push(obj.value);   
  };
  accumulate();
  return values;
};

console.log(ValueAccumulator(obj1));
console.log(ValueAccumulator(obj2));