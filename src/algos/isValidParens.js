const isValidParens = (s) => {
  const stack = [];
  for (const char of s) {
    if (char === "(") {
      stack.push(")");
    } else if (char === "[") {
      stack.push("]");
    } else if (char === "{") {
      stack.push("}");
    } else if (!stack.length || char !== stack.pop()) {
      return false;
    }
  }
  return !stack.length;
};

const s = "([[]]){()}";
const result = isValidParens(s);
console.log("result", result);

module.exports = {
  isValidParens,
};

// const isValidParens = (s) => {
//   const getOpening = {
//     ")": "(",
//     "]": "[",
//     "}": "{",
//   };

//   const getClosing = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };

//   const counts = {
//     "(": 0,
//     "[": 0,
//     "{": 0,
//   };

//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     const end = stack.length - 1;
//     if (isOpening(s[i])) {
//       stack.push(getClosing[s[i]]);
//       counts[s[i]]++;
//     } else {
//       if (s[i] !== stack[end]) {
//         return false;
//       }
//       counts[getOpening[s[i]]]--;
//       stack.pop();
//     }
//   }

//   if (Object.values(counts).reduce((a, c) => a + c) !== 0) {
//     return false;
//   }

//   return true;
// };

// const isOpening = (char) => {
//   if (char === "(" || char === "[" || char === "{") {
//     return true;
//   }
//   return false;
// };

// // const s = "()[]{}";
// const s = "([[]]){(})";

// const result = isValidParens(s);
// console.log("result", result);

// module.exports = {
//   isValidParens,
// };
