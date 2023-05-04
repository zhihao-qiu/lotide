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


const findKey = function(objects, callback) {
  
  for (const [key,value] of Object.entries(objects)) {
    if (callback(value)) return key;
  }
};

const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const testResult = findKey(data, x => x.stars === 2); // => "noma"

assertObjectsEqual(testResult, 'noma');