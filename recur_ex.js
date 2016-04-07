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

  console.log(makeChange(14, [10, 7, 1]));

  
