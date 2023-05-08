const assert = require('chai').assert;
const middle   = require('../middle');

// TEST CODE for middle
// objAssert.assertMiddle([1], []); // => true
// objAssert.assertMiddle([1, 2], []); // => true
// objAssert.assertMiddle([1, 2, 3], [2]); // => true
// objAssert.assertMiddle([1, 2, 3, 4, 5], [3]); // => true
// objAssert.assertMiddle([1, 2, 3, 4], [2, 3]); // => true
// objAssert.assertMiddle([1, 2, 3, 4, 5, 6], [3, 4]); // => true
describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.sameOrderedMembers(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.sameOrderedMembers(middle([1,2]), []); 
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.sameOrderedMembers(middle([1, 2, 3]), [2]); 
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.sameOrderedMembers(middle([1, 2, 3, 4, 5]), [3]); 
  });

  it("not returns '[3, 4]]' for [1, 2, 3, 4, 5, 6]", () => {
    assert.sameOrderedMembers(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });

  it("not returns '[2, 3]]' for [1, 2, 3, 4]", () => {
    assert.sameOrderedMembers(middle([1, 2, 3, 4]), [2, 3]); 
  });

});
