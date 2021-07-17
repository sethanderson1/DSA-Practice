const reverseInteger = (x) => {
  if (x === 0) return 0;

  const min = -(2 ** 31);
  const max = 2 ** 31 - 1;

  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);
  const len = Math.floor(Math.log10(x)) + 1;
  let newNum = 0;

  for (let i = 0; i < len; i++) {
    const digit = x % 10 ** (i + 1);
    const newDigit = Math.floor(digit / 10 ** i) * 10 ** (len - i - 1);
    newNum += newDigit;
  }

  const retVal = newNum * sign;
  if (retVal > max || retVal < min) return 0
  return retVal;
};

const x = -4239;
const result = reverseInteger(x);
console.log("result", result);

module.exports = {
  reverseInteger,
};
