function myUniq(arr) {
  var newArr = [];
  arr.forEach(function(item) {
    if (newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  });
  return newArr;
}

// var u = myUniq([3,2,6,5,5,5]);
// console.log(u);

function twoSum(arr) {
  var twoSumArray = [];
  for (var i = 0; i<arr.length-1; i += 1) {
    for (var j = i+1; j<arr.length; j += 1 ) {
      if (arr[i] + arr[j] === 0) {
        twoSumArray.push([i,j]);
      }
    }
  }
  return twoSumArray;
}

// var u = twoSum([-1, 0, 2, -2, 1]);
// console.log(u);

function transpose(arr) {
  var transposedArray = [];
  //for (var x = 0; x<arr.length; x += 1) { transposedArray.push([]);}
  for (var i = 0; i<arr.length; i += 1) {
    transposedArray.push([]);
    for (var j = 0; j<arr.length; j += 1) {
      transposedArray[i][j] = arr[j][i];
    }
  }
  return transposedArray;
}

var u = transpose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]);
  console.log(u);
