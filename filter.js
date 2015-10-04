var myarray = [1,2,3,4]
words = 'hello 123 world how 345 ya doing'.split(' ');
re = '[a-zA-Z]';
// remove all negative numbers
console.log([-2,-1,0,1,2].filter(function(x){return x>0}));
// remove null values after a map operation
console.log(words.filter(function(s){
  return s.match(re);
}) );
// remove random objects from an array
console.log(myarray.filter(function(){
  return Math.floor(Math.random()*2)})
);