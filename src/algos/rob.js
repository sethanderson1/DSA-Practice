const rob = (nums) => {

    return dp(nums, nums.length - 1)
};

const dp = (nums, i) => {
  
  if (i < 0) return 0;

  return Math.max(dp(nums[i - 2]) + nums[i], dp(nums[i - 1]));
};

const nums = [0, 1, 0, 1, 0, 0, 2, 0, 2, 0];
const result = rob(nums);
console.log("result", result);

module.exports = {
  rob,
};
