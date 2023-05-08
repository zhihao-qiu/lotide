const tail = function(array) {
  if (!array.length) return null;
  return array[array.length - 1];
};

module.exports = tail;