const plusOne = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++;
      return arr;
    }
    arr[i] = 0;
  }
  arr.unshift(1);
  return arr;
};

const arr = [9, 8, 9];
const result = plusOne(arr);
console.log("result", result);

module.exports = {
  plusOne,
};

// const plusOne = (arr) => {
//   let carry = 1;
//   let i = arr.length - 1;
//   while (i >= 0) {
//     const cur = arr[i];
//     const sum = cur + carry;
//     const newDigit = sum % 10;
//     carry = Math.log10(sum) >= 1 ? 1 : 0;
//     arr[i] = newDigit;
//     i--;
//   }
//   if (carry) arr.unshift(1);

//   return arr;
// };

// const arr = [9, 9, 9];
// const result = plusOne(arr);
// console.log("result", result);

// module.exports = {
//   plusOne,
// };
