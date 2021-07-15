const intersectionArr2 = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) return [];

const map = {};
arr1.forEach(el => {
  map[el] = true;
});

const result = [];
arr2.forEach(el => {
  if (map[el]) result.push(el);
});

return result;
}

// const arr1 = [1, 2, 3, 3, 4];
// const arr2 = [3, 4, 4, 5, 6];
const arr1 = new Array(160000000);
const arr2 = new Array(160000000);
const start = Date.now();
const result = intersectionArr2(arr1, arr2);
const end = Date.now();
const time = end - start;
console.log('time', time)

console.log("result", result);

module.exports = {
  intersectionArr2,
};
