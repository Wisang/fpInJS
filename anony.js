function powersOf(x) {
  return function(y) {
    // this is an anonymous function!
    return Math.pow(x,y);
  };
}
powerOfTwo = 