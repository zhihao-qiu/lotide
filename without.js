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

// function to remove the elements in the second array from the first array
const without = function(firstArray,secondArray) {
  // duplicate the first array in order to ensure the original array won't be updated
  let rtnArray = firstArray.slice();
  // loop the element in the second array
  for (let element of secondArray) {
    // loop the first array to check
    for (let i = 0; i < rtnArray.length; i++) {
      // if the element is found in the first array, remove it
      if (element === rtnArray[i]) {
        rtnArray.splice(i,1);
      }
    }
  }
  return (rtnArray);
};

// TEST DATA
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], [1, "2", "3"]),["1", "2"]);
assertArraysEqual(without([1, 2, 3], []),[1, 2, 3]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
