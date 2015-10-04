var
  obj1 = {value: 1},
  obj2 = {value: 2},
  obj3 = {value: 3};

var ValueAccumulator = function() {
  var values = [];
  var accumulate = function(obj) {
    if (obj) {
      values.push(obj.value);
      return values;
    }
    else {
      return values;
    }
  };
  return accumulate;
};

var accumulator = ValueAccumulator();
accumulator(obj1); 
accumulator(obj2); 
accumulator(obj3); 
console.log(accumulator());

var accumulator2 = ValueAccumulator();
var objects = [obj1, obj2, obj3]; // could be huge array of objects
objects.forEach(accumulator2);
console.log(accumulator2()); 
