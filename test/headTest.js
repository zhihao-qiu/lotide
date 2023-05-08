const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5); 
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });

  it("not returns 'Lighthouse' for ['Hello]", () => {
    assert.notStrictEqual(head(["Hello"]), "Lighthouse"); 
  });

  it("not returns 'Hello' for []", () => {
    assert.notStrictEqual(head([]), "Hello"); 
  });
});

// TEST CODE for head
// objAssert.assertEqual(head([5, 6, 7]), 5);
// objAssert.assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// objAssert.assertEqual(head(["Lighthouse"]), "Hello");
// objAssert.assertEqual(head([]), "Hello");

