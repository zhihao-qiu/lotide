const assert = require('chai').assert;
const objProcessing = require('../index');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(objProcessing.head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(objProcessing.head(['5']), '5');
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(objProcessing.head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(objProcessing.head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("not returns 'Lighthouse' for ['Hello]", () => {
    assert.notStrictEqual(objProcessing.head(["Hello"]), "Lighthouse");
  });

  it("not returns 'Hello' for []", () => {
    assert.notStrictEqual(objProcessing.head([]), "Hello");
  });
});


