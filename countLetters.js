// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? `✅✅✅ Passed: ` : `❌❌❌ Failed: `;
  console.log(result);
  console.log(`   Expected: ${expected}   Actual Result: ${actual}`);
};

// lettersToCount: a text that we need to look through
const countLetters = function(lettersToCount) {
  const results = {};
  const newLettersToCount = lettersToCount.replace(/ /g,'');

  for (let letter of newLettersToCount) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

// TEST CODE
const processResult = countLetters('lighthouse in the house');

assertEqual(processResult["l"], 1);
assertEqual(processResult["i"], 2);
assertEqual(processResult["g"], 1);
assertEqual(processResult["h"], 4);
assertEqual(processResult["t"], 2);
assertEqual(processResult["o"], 2);
assertEqual(processResult["u"], 2);
assertEqual(processResult["s"], 2);
assertEqual(processResult["e"], 3);
assertEqual(processResult["n"], 1);
assertEqual(processResult[" "], undefined);