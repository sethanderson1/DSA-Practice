const rotateArray = (arr, k) => {
  reverseArr(arr, 0, arr.length - 1)
  reverseArr(arr, 0, k - 1)
  reverseArr(arr, k, arr.length - 1)
  return arr
}

const reverseArr = (arr, l, end) => {
  let r = end
  let i = 0
  while (l < r) {
    let tmp = arr[l]
    arr[l] = arr[end - i]
    arr[r] = tmp
    l++
    r--
    i++
  }
}

const arr = [0, 1, 2, 3, 4, 5, 6];
const result = rotateArray(arr, 1);
console.log("result", result);

module.exports = {
  rotateArray,
};


// const rotateArray = (arr, k) => {
//   k = k % arr.length;
//   let count = 0;

//     let count = 0;
//     for (let start = 0; count < arr.length; start++) {
//       let cur = start;
//       let prev = arr[start];
//       while (true) {
//         let next = (cur + k) % arr.length;
//         let temp = arr[next];
//         arr[next] = prev;
//         prev = temp;
//         cur = next;
//         count++;
//         if (cur === start) {
//           break;
//         }
//       }
//     }
//     return arr;
//   }

// //                 i
// //          t3     t1    t2
// const arr = [0, 1, 2, 3, 4, 5, 6];
// //           i
// const result = rotateArray(arr, 2);
// console.log("result", result);

// module.exports = {
//   rotateArray,
// };
