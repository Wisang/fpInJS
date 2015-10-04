var
  obj1 = {value: 1},
  obj2 = {value: 2},
  obj3 = {value: 3};

function accumulate2(obj) {
  var values = [];
  values.push(obj.value);
  return values;
}
console.log(accumulate2(obj1)); 
console.log(accumulate2(obj2)); 
console.log(accumulate2(obj3)); 