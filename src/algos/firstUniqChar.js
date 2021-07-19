const firstUniqChar = (str) => {
  const seen = {};
  for (const char of str) {
    seen[char] = ++seen[char] || 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]] === 1) return i;
  }
  return -1;
};

const str = "abcacd";
const result = firstUniqChar(str);
console.log("result", result);

module.exports = {
  firstUniqChar,
};
