// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  let result = (actual === expected) ? `✅✅✅ Passed: ` : `❌❌❌ Failed: `;
  console.log(result);
  console.log(`   Expected: ${expected}   Actual Result: ${actual}`);
};



// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};



// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertArraysEqual(result1["Jason"], 1);
assertArraysEqual(result1["Karima"], undefined);
assertArraysEqual(result1["Fang"], 2);
assertArraysEqual(result1["Agouhanna"], undefined);
