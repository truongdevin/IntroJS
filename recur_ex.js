function fibonacci(n) {
  var numbers = [1];
  if(n === 1) {
    return [1];
  }
  else if(n === 2) {
    return [1, 1];
  }
  else {
    var prevFib = fibonacci(n-1);
    var currFib = prevFib[prevFib.length-1] + prevFib[prevFib.length-2];
    prevFib.push(currFib);
  }
  return prevFib;
}

// var u = fibonacci(5);
// console.log(u);

function binarySearch(arr, target) {
  if (arr.length === 0) {
    return null;
    }

  var midpoint = Math.floor(arr.length/2);
  if (arr[midpoint] === target) {
    return midpoint;
  }
  else if (arr[midpoint] > target) {
    return binarySearch(arr.slice(midpoint+1, arr.length));
  } else {
    return midpoint + binarySearch(arr.slice(0, midpoint));
  }
}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 4));

function lazyMakeChange(total, coinsArray) {
  if (total === 0) {
    return [];
  }
  if (coinsArray.indexOf(total) !== -1){
    return total;
  }
  while (coinsArray[0] > total) {
    coinsArray.shift(1);
  }
  var change = [];
  while (total >= coinsArray[0]) {
      total -= coinsArray[0];
      change.push(coinsArray[0]);
    }
    return change.concat(makeChange(total,
      coinsArray.slice(1, coinsArray.length)));
  }

  function makeChange(total, coinsArray) {
    var currentBestChange = [];
    while (coinsArray.length > 0) {
      var currentChange = lazyMakeChange(total, coinsArray);
      if ((currentChange.length < currentBestChange.length)||
          (currentBestChange.length === 0)) {
        currentBestChange = currentChange;
      }
      coinsArray.shift(1);
    }
    return currentBestChange;
  }

  // console.log(makeChange(14, [10, 7, 1]));

  function merge(left, right) {
    var mergedArray = [];
    while ((left.length > 0)&&(right.length > 0)) {
      if (left[0] > right[0]) {
        mergedArray.push(left.shift(1));
      }
      else {
        mergedArray.push(right.shift(1));
      }
    }
    return mergedArray.concat(left).concat(right);
  }

  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    var middle = Math.floor(array.length/2);
    var left = array.slice(0, middle);
    var right = array.slice(middle+1, array.length);
    var leftMerge = mergeSort(left);
    var rightMerge = mergeSort(right);
    return merge(leftMerge, rightMerge);
  }

  //console.log(mergeSort([7,4,2,7,3,2,6,8,2,9,5,3,4,5,7,3,7]));

  function subSets(array) {

    if (array.length === 0) {
      return [[]];
    }
    console.log(array.slice(0, array.length-1));
    var subs = (subSets(array.slice(0, array.length-1)));
    //console.log(subs);
    return subs.concat(subs.map(function(sub) {
      //console.log(sub);
      return sub.concat([array[array.length]]);
    }));
  }

  subSets([1, 2, 3]);
