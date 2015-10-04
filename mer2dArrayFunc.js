var arr2d = [[1,2],[3,4]];

var merge2dArrayIntoOne2 = function(arrays) {
  return arrays.reduce( function(p,n){
    return p.concat(n);
  });
};

console.log(merge2dArrayIntoOne2(arr2d));