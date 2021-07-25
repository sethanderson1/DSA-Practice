const strStr = (h, n) => {
  if (!n.length) return 0;

  for (let i = 0; i < h.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (h[i + j] !== n[j]) break;
      if (j === n.length - 1 && h[i + j] === n[j]) {
        return i;
      }
    }
  }

  return -1;
};

// hello
//   ll

const h = "hello";
const n = "ll";
const result = strStr(h, n);
console.log("result", result);

module.exports = {
  strStr,
};
