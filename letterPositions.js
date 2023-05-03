// Assert Function to check if the function is working properly
const assertArraysEqual = function(actual, expected) {
  let result = (eqArrays(actual,expected)) ? `✅✅✅ Passed` : `❌❌❌ Failed`;
  console.log(result);
  console.log(' Expected: ');
  console.log(expected);
  console.log(' Actual Result: ');
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


// lettersToCount: a text that we need to look through
const letterPositions = function(lettersToProcess) {
  const results = {};

  let posIndex = 0;

  for (let letter of lettersToProcess) {
    if (!results[letter]) {
      results[letter] = [];
    }
    
    results[letter].push(posIndex);
    posIndex ++;
  }

  return results;
};


// TEST CODE
// const processResult = letterPositions('lighthouse in the house');

assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("lighthouse in the house").t, [4, 14]);
assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]);
assertArraysEqual(letterPositions("lighthouse in the house").u, [7, 20]);
assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(letterPositions("lighthouse in the house").n, [12]);