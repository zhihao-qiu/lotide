// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? `✅✅✅ ${actual} === ${expected}` : `❌❌❌ ${actual} !== ${expected}`;
  console.log(result);
};

const tail = function(array) {
  let newArray = array.slice();
  newArray.splice(0,1);
  return (newArray);
};

module.exports = tail