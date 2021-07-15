const hasDuplicate = (arr) => {

  const hash = {}

  for ( const num of arr) {
    if (hash[num]) {
      return false
    }
    hash[num] = hash[num] + 1 || 1
  }

  return true
  
};

const arr = [0, 1, 2, 3, 0];
const result = hasDuplicate(arr);
console.log("result", result);

module.exports = {
  hasDuplicate,
};
