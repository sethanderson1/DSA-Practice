const removeDupsSorted = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i]) {
      arr[++j] = arr[i + 1];
    }
  }
  return arr;
};

const arr = [1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 6];
const result = removeDupsSorted(arr);
console.log("result", result);

module.exports = {
  removeDupsSorted,
};
