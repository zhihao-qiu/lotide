// Assert Function to check if the function is working properly
const assertArraysEqual = function(actual, expected) {
  let result = (eqArrays(actual,expected)) ? `✅✅✅ Passed` : `❌❌❌ Failed`;
  console.log(result);
  console.log(' Expected: ');
  console.log(expected);
  console.log(' Actual Result: ');
  console.log(actual);
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

  return true;
};


/** Function Name:  middle.js
  * Description:    take in an array and return the middle-most element(s) of the given array
 */
const middle = function(array) {
  // define a blank array to return
  let rtnArray = [];
  
  // return blank array, if the length of the array is less than 3
  if (array.length > 2) {
    if (array.length % 2 === 1) {
      // if the length of the array is odd, return the middle element
      rtnArray.push(array[parseInt(array.length / 2)]);
    } else {
      // if the length of the array is even, return the middle two elements
      rtnArray.push(array[array.length / 2 - 1]);
      rtnArray.push(array[array.length / 2]);
    }
  }

  return rtnArray;
};



// TEST DATA
assertArraysEqual(middle([1]), []); // => true
assertArraysEqual(middle([1, 2]), []); // => true
assertArraysEqual(middle([1, 2, 3]), [2]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => true
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => true