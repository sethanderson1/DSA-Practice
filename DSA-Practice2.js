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
const { test } = require("./testDir");

const example = { a: 1, b: 2 };

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(example), 2000);
  });
};

const p = async () => {
  const res = await p1();
  return res;
};
