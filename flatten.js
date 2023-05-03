// Assert Function to check if the function is working properly
const assertArraysEqual = function(actual, expected) {
  let result = (eqArrays(actual,expected)) ? `✅✅✅ ${actual} === ${expected}` : `❌❌❌ ${actual} !== ${expected}`;
  console.log(result);
};

const eqArrays = function(firstArray, secondArray) {
  // compare the length of two arrays, return false if it's consistent
  if (firstArray.length !== secondArray.length) {
    return (false);
  }

  // loop to compare each elements in these two arrays
  for (let i = 0; i < firstArray.length; i++) {
    // compare the value of each element
    if (firstArray[i] !== secondArray[i]) {
      return (false);
    }
  }

  return (true);
};

const flatten = function(arrays) {
  let rtnVal = [];
  for (let element of arrays) {
    // when it's not an array, push to rtnVal array
    if (!Array.isArray(element)) {
      rtnVal.push(element);
    } else {
      // when it's an array, loop the array and push the elements to rtnVal array
      for (let elm of element) {
        rtnVal.push(elm);
      }
    }
  }
  return rtnVal;
};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([5, 7, [1, 2], 4, [3]]),[5, 7, 1, 2, 4, 3]);