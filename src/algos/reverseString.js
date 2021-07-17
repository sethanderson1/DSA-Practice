const reverseString = (arr) => {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let tmp = arr[l];
    arr[l] = arr[r];
    arr[r] = tmp;
    l++;
    r--;
  }

  return arr;
};

const arr = ["h", "e", "l", "l", "o"];
const result = reverseString(arr);
console.log("result", result);

module.exports = {
  reverseString,
};
