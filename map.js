// Assertion Function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let result = (eqObjects(actual , expected)) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  console.log(result);
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  // compare with the length
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  // compare with values
  let keys = Object.keys(object1);
  for (let key of keys) {
    // check Primitives of values
    if (!Array.isArray(object1[key])) {
      // when it's not an array, but a value
      if (object1[key] !== object2[key]) return false;
    } else {
      // when it's an array
      return eqArrays(object1[key], object2[key]);
    }
  }
  return true;
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

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

// Assertion
assertObjectsEqual(results1, ['g','c','t','m','t']);