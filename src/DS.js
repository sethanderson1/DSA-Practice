class _Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class SSLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new _Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }
  unshift(val) {
    const newNode = new _Node(val);
    const oldHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = oldHead;
      oldHead.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (this.length === 0) return null;
    if (index < 0 || index >= this.lengthh) {
      return null;
    }
    let curNode;
    if (index < Math.floor(this.length / 2)) {
      curNode = this.head;
      let i = 0;
      while (i !== index) {
        curNode = curNode.next;
        i++;
      }
    } else {
      curNode = this.tail;
      let i = this.length - 1;
      while (i !== index) {
        curNode = curNode.prev;
        i--;
      }
    }
    return curNode;
  }
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const newNode = new _Node(val);
    const prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(val);
    if (index === this.length - 1) return this.pop();
    const nodeToRemove = this.get(index);
    let prevNode = nodeToRemove.prev;
    let nextNode = nodeToRemove.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    nodeToRemove.next = null;
    nodeToRemove.prev = null;
    this.length--;
    return nodeToRemove;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    if (!this.head) {
      this.head = new SSLNode(val);
      this.tail = this.head;
    } else {
      this.tail.next = new SSLNode(val);
      this.tail = this.tail.next;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;

    let curNode = this.head;
    if (!curNode.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return undefined;
    }
    while (curNode.next.next) {
      curNode = curNode.next;
    }
    const popped = curNode.next;
    curNode.next = null;
    this.tail = curNode;
    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return oldHead;
  }

  unshift(val) {
    if (!this.head) {
      this.head = new SSLNode(val);
      this.tail = this.head;
    } else {
      let newNode = new SSLNode(val);
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let curNode = this.head;
    let counter = 0;
    while (counter !== index) {
      curNode = curNode.next;
      counter++;
    }
    return curNode;
  }
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let curNode = this.get(index - 1);

    let rightSegHead = curNode.next;
    let newNode = new SSLNode(val);
    newNode.next = rightSegHead;
    curNode.next = newNode;
    this.length++;
    return true;
  }
  delete(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift().val;
    let foundNode = this.get(index - 1);
    const removed = foundNode.next;
    foundNode.next = foundNode.next.next;
    this.length--;
    return removed;
  }
  print() {
    const arr = [];
    let curNode = this.head;
    while (curNode) {
      arr.push(curNode.val);
      curNode = curNode.next;
    }
  }
  reverse() {
    if (this.head.next === null) {
      return this.head;
    }
    let prev = null;
    let curr = this.head;
    let next;
    this.head = this.tail;
    this.tail = curr;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    // this.head = prev;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new _Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.val;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new _Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    const oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return oldFirst.val;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {}

  insertArray(arr) {
    const newNode = new _Node(arr[0]);
    if (this.root === null) {
      this.root = newNode;
    }

    let curr = this.root;
    const queue = [curr];

    let j = 1;
    while (queue.length && j < arr.length) {
      curr = queue.shift();

      console.log("queue", queue);

      curr.left = new _Node(arr[j++]);
      if (curr.left) queue.push(curr.left);

      curr.right = new _Node(arr[j++]);
      if (curr.right) queue.push(curr.right);
    }

    // while (true) {
    //     if (val === curr.val) return undefined;
    //     if (val > curr.val) {
    //         if (curr.right === null) {
    //             curr.right = newNode;
    //             return this;
    //         }
    //         curr = curr.right;
    //     } else if (val < curr.val) {
    //         if (curr.left === null) {
    //             curr.left = newNode;
    //             return this;
    //         }
    //         curr = curr.left;
    //     }
    // }
    console.log("escaped");
  }
  // insert(val) {
  //     const newNode = new  _Node(val);
  //     if (this.root === null) {
  //         this.root = newNode;
  //         return this;
  //     }
  //     let curr = this.root;
  //     while (true) {
  //         if (val === curr.val) return undefined;
  //         if (val > curr.val) {
  //             if (curr.right === null) {
  //                 curr.right = newNode;
  //                 return this;
  //             }
  //             curr = curr.right;
  //         } else if (val < curr.val) {
  //             if (curr.left === null) {
  //                 curr.left = newNode;
  //                 return this;
  //             }
  //             curr = curr.left;
  //         }
  //     }
  // }

  // find(val) {
  //     if (this.root === null) {
  //         return false;
  //     }
  //     let curr = this.root;
  //     let found = false;
  //     while (curr && !found) {
  //         if (val > curr.val) {
  //             curr = curr.right;
  //         } else if (val < curr.val) {
  //             curr = curr.left;
  //         } else {
  //             found = true;
  //         }
  //     }
  //     if (!found) return false;
  //     return curr;
  // }

  // BFS() {
  //     let node = this.root;
  //     const queue = [];
  //     const data = [];
  //     queue.push(node);

  //     while (queue.length) {
  //         node = queue.shift();
  //         data.push(node);
  //         if (node.left) queue.push(node.left);
  //         if (node.right) queue.push(node.right);
  //     }

  //     return data;
  // }

  // DFS_Pre() {
  //     const data = [];
  //     let curr = this.root;

  //     function traverse(node) {
  //         data.push(node.val);
  //         if (node.left) traverse(node.left);
  //         if (node.right) traverse(node.right);
  //     }
  //     traverse(curr);
  //     return data;
  // }

  // DFS_Post() {
  //     const data = [];
  //     let curr = this.root;

  //     function traverse(node) {
  //         if (node.left) traverse(node.left);
  //         if (node.right) traverse(node.right);
  //         data.push(node.val);
  //     }
  //     traverse(curr);
  //     return data;
  // }

  // DFS_InOrder() {
  //     const data = [];
  //     let curr = this.root;

  //     function traverse(node) {
  //         if (node.left) traverse(node.left);
  //         data.push(node.val);
  //         if (node.right) traverse(node.right);
  //     }
  //     traverse(curr);
  //     return data;
  // }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new _Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (true) {
      if (val === curr.val) return undefined;
      if (val > curr.val) {
        if (curr.right === null) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      } else if (val < curr.val) {
        if (curr.left === null) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      }
    }
  }

  find(val) {
    if (this.root === null) {
      return false;
    }
    let curr = this.root;
    let found = false;
    while (curr && !found) {
      if (val > curr.val) {
        curr = curr.right;
      } else if (val < curr.val) {
        curr = curr.left;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return curr;
  }

  BFS() {
    let node = this.root;
    const queue = [];
    const data = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFS_Pre() {
    const data = [];
    let curr = this.root;

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(curr);
    return data;
  }

  DFS_Post() {
    const data = [];
    let curr = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(curr);
    return data;
  }

  DFS_InOrder() {
    const data = [];
    let curr = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(curr);
    return data;
  }
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const len = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swapIdx = null;

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild > element) ||
          (swapIdx !== null && rightChild > leftChild)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new NodePQ(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let idx = 0;
    const len = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swapIdx = null;

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild.priority < element.priority) ||
          (swapIdx !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

class NodePQ {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(100, key.length); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const targetIndex = this._hash(key);
    if (!this.keyMap[targetIndex]) {
      this.keyMap[targetIndex] = [];
    }
    this.keyMap[targetIndex].push([key, value]);
  }

  get(key) {
    const targetIndex = this._hash(key);
    if (this.keyMap[targetIndex]) {
      for (let entry of this.keyMap[targetIndex]) {
        if (entry[0] === key) return entry[1];
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let entry of this.keyMap) {
      if (entry) {
        for (let j = 0; j < entry.length; j++) {
          if (!keysArr.includes(entry[j][0])) {
            keysArr.push(entry[j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let entry of this.keyMap) {
      if (entry) {
        for (let j = 0; j < entry.length; j++) {
          if (!valuesArr.includes(entry[j][1])) {
            valuesArr.push(entry[j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vert) => vert !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vert) => vert !== vertex1
    );
  }

  removeVertex(vert) {
    this.adjacencyList[vert].forEach((v) => this.removeEdge(v, vert));
    delete this.adjacencyList[vert];
  }

  DFS_Recursive(start, mine) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function DFS(vertex) {
      console.log(`DFS(${vertex}) called`);
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);

      function logSuite(neighbor, visited, adjacencyList, results, vertex) {
        console.log("vertex", vertex);
        // console.log('results', results)
        // console.log('visited', visited)
        console.log("adjacencyList[vertex]", adjacencyList[vertex]);
        console.log("neighbor", neighbor);
      }

      if (mine) {
        for (let neighbor of adjacencyList[vertex]) {
          console.log(
            "vertex",
            vertex,
            "neighbor",
            neighbor,
            `adjacencyList[${vertex}]`,
            adjacencyList[vertex],
            `visited[${neighbor}]`,
            visited[neighbor]
          );
          if (!visited[neighbor]) {
            // logSuite(neighbor,visited,adjacencyList,results,vertex)
            return DFS(neighbor);
          }
        }
        console.log("out of loop");
        console.log("vertex", vertex);
      } else {
        adjacencyList[vertex].forEach((neighbor) => {
          console.log(
            "vertex",
            vertex,
            "neighbor",
            neighbor,
            `adjacencyList[${vertex}]`,
            adjacencyList[vertex],
            `visited[${neighbor}]`,
            visited[neighbor]
          );
          if (!visited[neighbor]) {
            // logSuite(neighbor,visited,adjacencyList,results,vertex)
            return DFS(neighbor);
          }
        });
        console.log("out of loop");
        console.log("vertex", vertex);
      }
    })(start);
    return results;
  }

  DFS_Iterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let vertex;

    visited[start] = true;
    while (stack.length) {
      vertex = stack.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  shortestPath(startVert, endVert) {
    const distances = {};
    const nodes = new PriorityQueueSimple();
    const prev = {};
    let smallest;
    let path = [];

    for (let vert in this.adjacencyList) {
      if (vert === startVert) {
        distances[vert] = 0;
      } else {
        distances[vert] = Infinity;
      }
      nodes.enqueue(vert, distances[vert]);
      prev[vert] = null;
    }
    // console.log('nodes', nodes)

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === endVert) {
        console.log("distances", distances);
        console.log("prev", prev);
        while (prev[smallest]) {
          path.push(smallest);
          smallest = prev[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          // console.log('nextNode', nextNode)

          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            prev[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

class PriorityQueueSimple {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

module.exports = {
  SinglyLinkedList,
  DoublyLinkedList,
  _Node,
  Stack,
  Queue,
  BinaryTree,
  BinarySearchTree,
  MaxBinaryHeap,
  PriorityQueue,
  PriorityQueueSimple,
  NodePQ,
  HashTable,
  Graph,
  WeightedGraph,
  SSLNode,
};

// class _Node {
//     constructor(value, next) {
//         this.value = value;
//         this.next = next;
//     };
// };

// //Create a linked list class

// class LinkedList {
//     constructor() {
//         this.head = null;
//     };
//     // insert first node
//     insertFirst(item) {
//         this.head = new _Node(item, this.head);
//     };

//     insertLast(item) {
//         if (this.head === null) {
//             this.insertFirst(item);
//         } else {
//             // begin at start node
//             let tempNode = this.head;
//             while (tempNode.next !== null) {
//                 // jump to each subsequent node until next is null
//                 tempNode = tempNode.next;
//             }
//             tempNode.next = new _Node(item, null);
//         };
//     };

//     find(item) {
//         // Start at the head
//         let currNode = this.head;
//         // If the list is empty
//         if (!this.head) {
//             return null;
//         }
//         // Check for the item
//         while (currNode.value !== item) {
//             /* Return null if it's the end of the list
//                      and the item is not on the list */
//             if (currNode.next === null) {
//                 return null;
//             } else {
//                 // Otherwise, keep looking
//                 currNode = currNode.next;
//             }
//         }
//         // Found it
//         return currNode;
//     }

//     remove(item) {
//         // If the list is empty
//         if (!this.head) {
//             return null;
//         }
//         // If the node to be removed is head, make the next node head
//         if (this.head.value === item) {
//             this.head = this.head.next;
//             return;
//         }
//         // Start at the head
//         let currNode = this.head;
//         // Keep track of previous
//         let previousNode = this.head;

//         while (currNode !== null && currNode.value !== item) {
//             // Save the previous node
//             previousNode = currNode;
//             currNode = currNode.next;
//         }
//         if (currNode === null) {
//             return;
//         }
//         previousNode.next = currNode.next;
//     }

//     insertBefore(key, item) {
//         // Start at the head
//         let currNode = this.head;
//         // If the list is empty
//         if (!this.head) {
//             return null;
//         }
//         // search until find key
//         while (currNode.value !== key) {
//             if (currNode.next === null) {
//                 return null;
//             } else {
//                 // else, keep going
//                 currNode = currNode.next;
//             }
//         }
//         // key found, so have item point to it
//         let newNode = new _Node(item, currNode.next);
//         currNode.next = newNode;
//     }

//     insertAfter(item, key) {
//         if (this.head === null) {
//             this.insertFirst(item)
//         }
//         else {
//             let currNode = this.head
//             // while not at end and havent found key yet
//             while ((currNode !== null) && (currNode.value !== key)) {
//                 currNode = currNode.next
//             }
//             if (currNode === null) {
//                 this.insertLast(item)
//                 return
//             }
//             // found key so have point to item
//             currNode.next = new _Node(item, currNode.next)
//         }
//     }

//     insertAt(item, idx) {
//         if (!this.head) {
//             return null
//         }
//         if (idx > this.length - 1) {
//             return null
//         }
//         let currNode = this.head
//         let prevNode = this.head

//         for (let i = 0; i < idx - 1; i++) {
//             prevNode = currNode
//             currNode = currNode.next
//         }
//         let newNode = new _Node(item, currNode)
//         prevNode.next = newNode
//         this.length++
//     }

//     findLast() {
//         let currNode = this.head;
//         // If the list is empty
//         if (!this.head) {
//             return null;
//         }
//         // Check for the item
//         while (currNode.next !== null) {
//             if (currNode.next === null) {
//                 return currentNode;
//             } else {
//                 // Otherwise, keep looking
//                 currNode = currNode.next;
//             }
//         }
//     }
// }

// module.exports = {
//     LinkedList,
//     _Node
// }
