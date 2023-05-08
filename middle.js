const eqArrays = require('./eqArrays');

/** Function Name:  middle.js
  * Description:    take in an array and return the middle-most element(s) of the given array
 */
const middle = function(array) {
  // define a blank array to return
  let rtnArray = [];
  
  // return blank array, if the length of the array is less than 3
  if (array.length > 2) {
    if (array.length % 2 === 1) {
      // if the length of the array is odd, return the middle element
      rtnArray.push(array[parseInt(array.length / 2)]);
    } else {
      // if the length of the array is even, return the middle two elements
      rtnArray.push(array[array.length / 2 - 1]);
      rtnArray.push(array[array.length / 2]);
    }
  }

  return rtnArray;
};

module.exports = middle;

