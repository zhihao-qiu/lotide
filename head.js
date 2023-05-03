// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? `✅✅✅ ${actual} === ${expected}` : `❌❌❌ ${actual} !== ${expected}`;
  console.log(result);
};

const head = function(array) {
  return array[0];
};

// TEST CODE
assertArraysEqual(head([5,6,7]), 5);
assertArraysEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertArraysEqual(head(["Lighthouse"]), "Hello");
assertArraysEqual(head([]), "Hello");
