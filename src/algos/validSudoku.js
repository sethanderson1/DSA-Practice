const validSudoku = (arr) => {
  // rows valid
  for (const row of arr) {
    if (areDups(row)) {
      return false;
    }
  }

  // cols valid
  for (let i = 0; i < arr.length; i++) {
    const col = [];
    for (const num of arr) {
      col.push(num[i]);
    }
    if (areDups(col)) {
      return false;
    }
  }

  // boxes valid
  let startRow = 0;
  let startCol = 0;
  for (let boxInd = 0; boxInd < arr.length; boxInd++) {
    if (boxInd % 3 === 0 && boxInd !== 0) {
      startRow = startRow + 3;
      startCol = 0;
    }
    const box = [];
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        box.push(arr[i][j]);
      }
    }
    startCol = startCol + 3;

    if (areDups(box)) {
      return false;
    }
  }

  return true;
};

const areDups = (arr) => {
  const obj = {};
  for (const num of arr) {
    if (obj[num]) return true;
    if (num >= 1 && num <= 9) {
      obj[num] = true;
    }
  }
  return false;
};

const arr = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "7", ".", ".", ".", ".", "6", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const result = validSudoku(arr);

module.exports = {
  validSudoku,
};
