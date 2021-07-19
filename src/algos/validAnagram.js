const validAnagram = (s, t) => {

  if (s.length !== t.length) return false

  const counts = new Array(26).fill(0)
  
  for (let i = 0; i < s.length; i++) {
    counts[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    counts[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
  }

 for (const num of counts) {
   if (counts[num] !== 0) return false
 }

  return true;
};

const result = validAnagram("anagram", "nagaram");
console.log("result", result);

module.exports = {
  validAnagram,
};

// const validAnagram = (s, t) => {
//   const counts = {};

//   for (const char of s) {
//     counts[char] = ++counts[char] || 1;
//   }

//   for (const char of t) {
//     --counts[char];
//     if (counts[char] < 0) return false;
//   }

//   for (const key in counts) {
//     if (counts[key] !== 0) return false;
//   }
//   return true;
// };

// const result = validAnagram("anagram", "nagarams");
// console.log("result", result);

// module.exports = {
//   validAnagram,
// };
