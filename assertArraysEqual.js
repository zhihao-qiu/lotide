// Assert Function to check if the function is working properly
const assertEqual = function(result) {
  console.log(result ? `✅✅✅ ` : `❌❌❌ `);
};

const eqArrays = function(firstArray, secondArray) {
  // compare the length of two arrays, return false if it's consistent
  if (firstArray.length !== secondArray.length) {
    assertEqual(false);
    process.exit();
  }

  // loop to compare each elements in these two arrays
  for (let i = 0; i < firstArray.length; i++) {
    // compare the value of each element
    if (firstArray[i] !== secondArray[i]) {
      assertEqual(false);
      process.exit();
    }
  }

  assertEqual(true);
};

// Get Function to receive two arrays
const getArrays = function(arrays, arrayIndex) {
  return (arrays[arrayIndex - 1]);
};


const args = process.argv.slice(2);
eqArrays(getArrays(args,1), getArrays(args,2));

