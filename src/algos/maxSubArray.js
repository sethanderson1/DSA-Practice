const maxSubArray = (arr) => {
  let globalMax = -Infinity;
  let localMax = 0;

  for (let i = 0; i < arr.length; i++) {
    localMax = Math.max(arr[i], arr[i] + localMax);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
    console.log("i", i, "localMax", localMax, "globalMax", globalMax);
  }
  return globalMax;
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(arr);
console.log("result", result);

module.exports = {
  maxSubArray,
};
