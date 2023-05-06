const isValid = function(cardNumber) {
  let sum = 0;
  const parity = cardNumber.toString().length % 2;
  let i = 0;
  for (const x of cardNumber.toString()) {
    if (i % 2 !== parity) {
      sum += Number(x);
    } else if (Number(x) > 4) {
      sum += 2 * Number(x) - 9;
    } else {
      sum += 2 * Number(x);
    }
    i++;
  }
  return sum % 10 === 0;

};

console.log(isValid(7992739871));