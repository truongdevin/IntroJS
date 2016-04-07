// function myEach(array, fn) {
//   for(var i=0; i<array.length; i+=1) {
//     fn(array[i]);
//   }
// }

function hi(x) {
  return x*3;
}

function hi2(acc, x) {
  return acc+x;
}

Array.prototype.myEach = function(fn) {
  for(var i=0; i< this.length; i+=1) {
    fn(this[i]);
  }
};

//[2,6,8].myEach(hi);


Array.prototype.myMap = function(func) {
  var mappedArray = [];
  this.myEach(function(x) {
    mappedArray.push(func(x));
  });
  return mappedArray;
};

// console.log([1,2,3].myMap(hi));

Array.prototype.myInject = function(func) {
  var accum = this[0];
  this.slice(1).myEach(function(x) {
    accum = func(accum, x);
  });
  return accum;
};

console.log([1,2,3].myInject(hi2));
