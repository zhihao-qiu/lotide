// Returns false if both arrays have different elements
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


// Assertion Function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let result = (eqObjects(actual , expected)) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  console.log(result);
};

// The function takes in two parameters as well:
// The array to work with
// The callback (which Lodash calls "predicate")
const takeUntil = function(array, callback) {
  const rtnArray = [];
  for (const item of array) {
    if (callback(item)) break;
    rtnArray.push(item);
  }
  return rtnArray;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertObjectsEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertObjectsEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
