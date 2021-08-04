const rob = (nums) => {
  return dp(nums, nums.length - 1);
};

const val = {};

const memo = (i) => {
  if (val[i] !== undefined) {
    return val[i];
  } else {
    val[i] = dp(nums, i);
    return val[i];
  }
};

const dp = (nums, i) => {
  console.log('i', i)
  if (i < 0) return 0;

  return Math.max(memo(i - 2) + nums[i], memo(i - 1));
};

const nums = [1, 0, 2, 0, 3, 0, 0, 4, 8, 5];
const result = rob(nums);
console.log("result", result);

module.exports = {
  rob,
};
