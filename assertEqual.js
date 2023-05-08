const inspect = require('util').inspect; // <= add this line
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? `✅✅✅ ${actual} === ${expected}` : `❌❌❌ ${actual} !== ${expected}`;
  console.log(result);
};

const assertArraysEqual = function(actual, expected) {
  let result = (eqArrays(actual, expected)) ? `✅✅✅ ${inspect(actual)} === ${inspect(expected)}` : `❌❌❌ ${inspect(actual)} !== ${inspect(expected)}`;
  console.log(result);
};

module.exports = {
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual
};