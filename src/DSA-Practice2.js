const nodemon = require("nodemon");
// const { LinkedList, _Node } = require('./LinkedList')
const {
  SSLNode,
  SinglyLinkedList,
  DoublyLinkedList,
  Node,
  Stack,
  Queue,
  BinarySearchTree,
  MaxBinaryHeap,
  PriorityQueue,
  NodePQ,
  HashTable,
  Graph,
  WeightedGraph,
  BinaryTree,
} = require("./DS");
// const { test } = require("./testDir");

// const example = { a: 1, b: 2 };

// const p1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(example), 2000);
//   });
// };

// const p = async () => {
//   const res = await p1();
//   return res;
// };

// const fizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     let result = "";

//     if (i % 3 === 0) result = "fizz";
//     if (i % 5 === 0) result = result + "buzz";
//     if (i % 7 === 0) result = result + "bizzzzz";

//     console.log(i, result);
//   }
// };

// const result = fizzBuzz();
// console.log("result", result);

// const str = "I put my thang down, flip it and reverse it";
// const str = "abcde"; 

// const reverseIt = (str) => {
//   const arr = str.split("");

//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
//     i++;
//   }
//   return arr.join("");
// };

// const result = reverseIt(str);
// console.log("result", result);
