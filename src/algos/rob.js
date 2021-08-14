const rob = (nums) => {
  if (!nums.length) return 0;

  const memo = new Array(nums.length + 1);
  memo[0] = 0;
  memo[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    memo[i + 1] = Math.max(memo[i], nums[i] + memo[i - 1]);
  }
  return memo[memo.length - 1];
};

const nums = [1, 0, 2, 0, 3, 0, 0, 4, 8, 5];
//    memo [0,1, 1, 3]
const result = rob(nums);
console.log("result", result);

module.exports = {
  rob,
};

// const rob = (nums) => {
//   return dp(nums, nums.length - 1);
// };

// const val = {};

// const memo = (i) => {
//   if (val[i] !== undefined) {
//     return val[i];
//   } else {
//     val[i] = dp(nums, i);
//     return val[i];
//   }
// };

// const dp = (nums, i) => {
//   console.log("i", i);
//   if (i < 0) return 0;

//   return Math.max(memo(i - 2) + nums[i], memo(i - 1));
// };

// const nums = [1, 0, 2, 0, 3, 0, 0, 4, 8, 5];
// const result = rob(nums);
// console.log("result", result);

// module.exports = {
//   rob,
// };
