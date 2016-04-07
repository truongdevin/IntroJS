function bubbleSort(arr) {
  var sorted = false;
  while (sorted === false) {
    sorted = true;
    for (var i = 0; i < arr.length ; i+=1) {
      if (arr[i] > arr[i+1]) {
        var dummy = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = dummy;
        sorted = false;
      }
    }
  }
  return arr;
}

// var u = bubbleSort([5,4,1,8,7,9,3,2,6]);
// console.log(u);

function substrings(string) {
  var substringsArr = [];
  for (var i = 0; i<string.length; i+=1) {
    for (var j = i; j<string.length; j+=1) {
      substringsArr.push(string.slice(i,j+1));
    }
  }
  return substringsArr;
}

var u = substrings('cat');
console.log(u);
