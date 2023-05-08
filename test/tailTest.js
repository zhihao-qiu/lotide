const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });

  it("returns 7 for [5, 6, 7]", () => {
    assert.strictEqual(tail([5, 6, 7]), 7); 
  });

  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs"); 
  });

  it("not returns 'Lighthouse' for ['Hello]", () => {
    assert.notStrictEqual(tail(["Hello"]), "Lighthouse"); 
  });

  it("not returns 'Hello' for []", () => {
    assert.notStrictEqual(tail([]), "Hello"); 
  });

});
