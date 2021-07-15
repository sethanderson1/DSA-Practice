const singleNumber = (arr) => {
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log('arr[i]', arr[i])
    a ^= arr[i];
    console.log('a', a)
  }
  return a;
};

const arr = [4, 3, 5, 5, 3, 99, 4];
const result = singleNumber(arr);
console.log("result", result);

module.exports = {
  singleNumber,
};
