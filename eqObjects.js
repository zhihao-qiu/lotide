// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? `✅✅✅ ${actual} === ${expected}` : `❌❌❌ ${actual} !== ${expected}`;
  console.log(result);
};

// Assert Function to check if the function is working properly
const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let result = (eqObjects(actual, expected)) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // compare with the length
  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) return false;
  
  // compare with values
  let keys = Object.keys(object1);
  for (let key of keys) {
    if ((object1[key].constructor === Object) && (object2[key].constructor === Object)) {
      if (!eqObjects(object1[key], object2[key])) return false;
    } else if ((object1[key].constructor !== Object) && (object2[key].constructor !== Object)) {
      if (object1[key] !== object2[key]) return false;
    } else { return false;}

    /**
    // check Primitives of values
    if (!Array.isArray(object1[key])) {
      // when it's not an array, but a value
      if (object1[key] !== object2[key]) return false;
    } else {
      // when it's an array
      return eqArrays(object1[key], object2[key]);
    }
     */

  }
  return true;
};

// TEST CODE
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);



// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
// assertArraysEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
// assertArraysEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);

eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
//eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
assertArraysEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);