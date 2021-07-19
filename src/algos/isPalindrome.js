const isPalindrome = (str) => {
  let l = 0;
  let r = str.length - 1;

  const isAlphaNum = (char) => {
    char = char.charCodeAt(0);
    if ((char >= 97 && char <= 122) || (char >= 48 && char <= 57)) {
      return true;
    }
    return false;
  };

  while (l < r) {
    console.log("str[l]", str[l]);
    console.log("str[r]", str[r]);
    while (!isAlphaNum(str[l].toLowerCase())) {
      l++;
    }
    while (!isAlphaNum(str[r].toLowerCase())) {
      r--;
    }
    if (str[l].toLowerCase() !== str[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
    console.log('l', l)
    console.log('r', r)
  }
  return true
};

const str = "44okj ,jk  o44";
// const str = "A man, a plan, a canal: Panama";
const result = isPalindrome(str);
console.log("result", result);

module.exports = {
  isPalindrome,
};
