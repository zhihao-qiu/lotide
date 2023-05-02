// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? `✅✅✅ ${actual} === ${expected}` : `❌❌❌ ${actual} !== ${expected}`;
  console.log(result);
};

const head = function(array) {
  return array[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Lighthouse"]), "Hello");
assertEqual(head([]), "Hello");
