const twoSum = (arr, target) => {
  const complement = {};

  for (let i = 0; i < arr.length; i++) {
    if (complement[arr[i]] !== undefined) return [i, complement[arr[i]]];
    complement[target - arr[i]] = i;
  }
};

const arr = [4, 5, 2, 9];
const result = twoSum(arr, 7);
console.log("result", result);

module.exports = {
  twoSum,
};
