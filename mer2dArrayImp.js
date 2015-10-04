var arr2d = [[1,2], [3,4]];

function merge2dArrayIntoOne(arrays) {
  var count = arrays.length;
  var merged = new Array(count); 
  var c = 0;
  for (var i = 0; i < count; ++i) {
    for (var j = 0, jlen = arrays[i].length; j < jlen; ++j) {
      merged[c++] = arrays[i][j];
    }
  }
  return merged
}

console.log(merge2dArrayIntoOne(arr2d));