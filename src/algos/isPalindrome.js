const isPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;

  const isAlphaNum = (char) => {
    char = char.charCodeAt(0);
    if ((char >= 97 && char <= 122) || (char >= 48 && char <= 57)) {
      return true;
    }
    return false;
  };

  while (l < r) {
    while (l < r && !isAlphaNum(s[l].toLowerCase())) {
      l++;
    }
    while (l < r && !isAlphaNum(s[r].toLowerCase())) {
      r--;
    }
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

// // Second Solution
// var isPalindrome = function(s) {
//   let low = 0, high = s.length-1;
//   while (low < high) {
//       // validate character at both pointers
//       while (low < high && !isAlphaNumeric(s[low])) low++;
//       while (low < high && !isAlphaNumeric(s[high])) high--;

//       if (s[low].toLowerCase() !== s[high].toLowerCase()) return false;
//       low++, high--;
//   }
//   return true;
//   // T.C: O(N)
//   // S.C: O(1)
// };

function isAlphaNumeric(x) {
  let code = x.charCodeAt();
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

const s = ".;;'";
const result = isPalindrome(s);
console.log("result", result);

module.exports = {
  isPalindrome,
};
