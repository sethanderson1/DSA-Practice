const rotateArray = (arr, k) => {
  k = k % arr.length;
  let count = 0;

    let count = 0;
    for (let start = 0; count < arr.length; start++) {
      let current = start;
      let prev = arr[start];
      while (true) {
        let next = (current + k) % arr.length;
        let temp = arr[next];
        arr[next] = prev;
        prev = temp;
        current = next;
        count++;
        if (current === start) {
          break;
        }
      }
    }
    return arr;
  }

//                 i
//          t3     t1    t2
const arr = [0, 1, 2, 3, 4, 5, 6];
//           i
const result = rotateArray(arr, 2);
console.log("result", result);

module.exports = {
  rotateArray,
};
