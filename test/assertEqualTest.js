const objAssert = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');

// TEST CODE for head
// objAssert.assertEqual(head([5, 6, 7]), 5);
// objAssert.assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// objAssert.assertEqual(head(["Lighthouse"]), "Hello");
// objAssert.assertEqual(head([]), "Hello");

// TEST CODE for tail
// Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// objAssert.assertEqual(result.length, 2); // ensure we get back two elements
// objAssert.assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// objAssert.assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// objAssert.assertEqual(words.length, 3); // original array should still have 3 elements!

// TEST CODE for eqArrays
// objAssert.assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]); // => true
// objAssert.assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
// objAssert.assertArraysEqual([[2, 3], [4]], [[2, 3], 4]); // => false


// TEST CODE for middle
// objAssert.assertMiddle([1], []); // => true
// objAssert.assertMiddle([1, 2], []); // => true
// objAssert.assertMiddle([1, 2, 3], [2]); // => true
// objAssert.assertMiddle([1, 2, 3, 4, 5], [3]); // => true
// objAssert.assertMiddle([1, 2, 3, 4], [2, 3]); // => true
// objAssert.assertMiddle([1, 2, 3, 4, 5, 6], [3, 4]); // => true