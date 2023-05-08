const eqArrays = function(firstArray, secondArray) {
  // compare the length of two arrays, return false if it's consistent
  if (!(Array.isArray(firstArray)&&Array.isArray(secondArray))) return false;
  if (firstArray.length !== secondArray.length) return false;

  // loop to compare each elements in these two arrays
  for (let i = 0; i < firstArray.length; i++) {
    if (Array.isArray(firstArray[i])) {
      if (!eqArrays(firstArray[i], secondArray[i])) return false;
    } else {
      // compare the value of each element
      if (firstArray[i] !== secondArray[i]) return false;
    }
  }

  return true;
};

module.exports = eqArrays;