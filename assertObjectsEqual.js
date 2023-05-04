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

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
assertObjectsEqual(shirtObject , anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
assertObjectsEqual(shirtObject , longSleeveShirtObject);



const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);
