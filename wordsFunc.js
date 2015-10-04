var myString = 'I woke up 6a.m. this morning.';
var words = [];
var words = myString.split(' ').filter(function(x){
  return (! x.match(/[0-9]/));
}).slice(0,4);
console.log(words);

//var words = toSequence(myString).match(/[a-zA-Z]+/).first(4);