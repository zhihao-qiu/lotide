// Assert Function to check if the function is working properly
const assertEqual = function(actual, expected, callback) {
  const inspect = require('util').inspect; // <= add this line
  let result = callback(actual, expected) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  console.log(result);
};

const eqArrays = function(firstArray, secondArray) {
  // compare the length of two arrays, return false if it's consistent
  if (firstArray.length !== secondArray.length) return (false);

  // loop to compare each elements in these two arrays
  for (let i = 0; i < firstArray.length; i++) {
    if (Array.isArray(firstArray[i])) {
      if (!eqArrays(firstArray[i], secondArray[i])) return false;
    } else {
      // compare the value of each element
      if (firstArray[i] !== secondArray[i]) return false;
    }
  }

  return true;
};

// TEST CODE
assertEqual([[2, 3], [4]], [[2, 3], [4]], eqArrays); // => true

assertEqual([[2, 3], [4]], [[2, 3], [4, 5]], eqArrays); // => false
assertEqual([[2, 3], [4]], [[2, 3], 4], eqArrays); // => false