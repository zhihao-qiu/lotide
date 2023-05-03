// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? `✅✅✅ ${actual} === ${expected}` : `❌❌❌ ${actual} !== ${expected}`;
  console.log(result);
};


const findKeyByValue = function(dictionary, valueToFind) {
  for (let [key,value] of Object.entries(dictionary)) {
    if (value === valueToFind) return key;
  }
};

// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  educationInstitution: "Lighthouse Labs"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Lighthouse Labs"), "educationInstitution");

