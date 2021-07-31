const mergeTwoArrs = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;
  let i = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      i--;
      p1--;
    } else {
      nums1[i] = nums2[p2];
      i--;
      p2--;
    }
  }

  while (p2 >= 0) {
    nums1[i] = nums2[p2];
    i--;
    p2--;
  }

  return nums1;
};

const nums1 = [3, 3, 8, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = nums2.length;
const result = mergeTwoArrs(nums1, m, nums2, n);
console.log("result", result);

module.exports = {
  mergeTwoArrs,
};
