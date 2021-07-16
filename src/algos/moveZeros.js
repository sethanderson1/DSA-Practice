const moveZeros = (arr) => {
  let zeroCnt = 0;

  for (const num of arr) {
    if (num === 0) zeroCnt++;
  }

  let j = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== 0) {
      arr[j] = arr[i];
      j++;
    }
  }

  for (let i = arr.length - zeroCnt; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
};

const arr = [0, 1, 0, 2, 3, 0, 0];
const result = moveZeros(arr);
console.log("result", result);

module.exports = {
  moveZeros,
};
