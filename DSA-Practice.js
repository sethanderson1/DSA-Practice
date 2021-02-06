const nodemon = require('nodemon')
// const { LinkedList, _Node } = require('./LinkedList')
const { SSLNode, SinglyLinkedList, DoublyLinkedList, Node, Stack, Queue, BinarySearchTree, MaxBinaryHeap, PriorityQueue, NodePQ, HashTable, Graph, WeightedGraph } = require('./DS')



// const SLL = new LinkedList()


// SLL.insertFirst(1)
// SLL.insertLast(2)
// SLL.insertLast(3)
// SLL.insertLast(4)
// SLL.insertLast(5)









// display = (list) => {
//     let currentNode = list.head;
//     while (currentNode !== null) {
//         console.log(currentNode.value)
//         currentNode = currentNode.next
//     }
// }

// display(SLL)

// console.log('SLL.head', SLL.head)
// display(reverse(SLL.head))









// function reverse(head) {

//     if (!head || head.next===null) {
//         return head
//     }

//     let nextNode = reverse(head.next)
//     head.next.next = head
//     head.next = null



// }

//  SLL.head.next.next = SLL.head
// console.log('third', third)




// // reverse linked list 

// function reverseListIter(head) {



//     let prev = null 
//     let curr = head
//     let nextNode
//     while (curr!==null) {
//         nextNode = curr.next
//         curr.next = prev
//         prev = curr
//         curr = nextNode
//     }

//     return prev

// }

// console.log('reverseListIter(SLL.head)', reverseListIter(SLL.head))


// // O(n) time & O(n) space
// function reverse(head) {
//     if (!head || !head.next) {
//         return head;
//     }
//     let tmp = reverse(head.next);
//     head.next.next = head;
//     head.next = undefined;
//     return tmp;
// }

// console.log('reverse(SLL.head)', reverse(SLL.head))








































































// const str = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"

// function countStr(str) {

//     const regex = /[a-z]+/gi

//     const filteredStr = str.match(regex)

//     const obj = {}

//     for (let i = 0; i < filteredStr.length; i++) {

//         if (obj[filteredStr[i]] === undefined) {
//             obj[filteredStr[i]] =21
//         } else {
//             obj[filteredStr[i]]++
//         }

//     }
//     return obj
// }

// countStr(str)
// console.log('countStr(str)', countStr(str))



























// function reverse(list) {
//     let reversedHead = null; 
//     let currNode = list.head; 
//     let nextNode; 

//     while (currNode !== null) {
//         nextNode = currNode.next;
//         currNode.next = reversedHead;
//         reversedHead = currNode;
//         currNode = nextNode;
//     }

//     list.head = reversedHead;
//     return list;
// }

// function findThird(list) {
//     let currNode = list.head; 
//     let prevNode = list.head; 

//     while (currNode.next.next.next !== null) {
//         prevNode = currNode; 
//         currNode = currNode.next;
//     }

//     return currNode; 
// }

// function findMid(list) {
//    let currNode = list.head; 
//    let prevNode = list.head; 
//    let listLength = 0; 
//    let index = 0;

//    while (currNode !== null) {
//        listLength++;
//        prevNode = currNode;
//        currNode = currNode.next;
//    }

//    let midpoint = (Math.ceil(listLength / 2) - 1); 
//    currNode = list.head; 
//    prevNode = list.head; 

//    while (index < midpoint) {
//        prevNode = currNode; 
//        currNode = currNode.next; 
//        index++; 
//    }
//    return currNode; 
// }


// function cycleList(list) {
//     let item1 = list.head;
//     let item2 = list.head;

//     while (item1 !== item2) {
//         item1 = item1.next;
//         item2 = item2.next.next;
//     }
//     if (item1 === item2) {
//         return true;
//     }
//     return false;
// }

// function listSort(list) {
//     let currNode = list.head; 
//     let head = list.head; 
//     let store; 
//     let sorting = true; 

//     while (sorting) {
//         sorting = false; 

//         while (currNode.next !== null) {

//             if (currNode.value > currNode.next.value) {
//                 store = currNode.value;
//                 currNode.value = currNode.next.value; 
//                 currNode.next.value = store;
//                 sorting = true;
//             }

//             currNode = currNode.next; 
//         }

//         if (!currNode.next) {
//             currNode = list.head;
//         }

//     return list;

//     }
// }






























// const str = '1234'

// function reverString() {

//     let result = str.split('')
//     let ptrVal1 
//     let ptrVal2 
//     let curr
//     let prev
//     let next
//     const len = str.length
//     let ptr2 = len - 1
//     let ptr1 = 0
//     console.log('ptr2', ptr2)

//     let endVal = Math.floor((len-1)/2)
//     console.log('endVal', endVal)
//     for (let i = 0; i < endVal; i++) {

//         ptrVal1 = result[ptr1]
//         ptrVal2 = result[ptr2]

//         // console.log('ptrVal1', ptrVal1)
//         // console.log('ptrVal2', ptrVal2)

//         result[ptr1] = ptrVal2
//         result[ptr2] = ptrVal1

//         // console.log('result[ptr1]', result[ptr1])
//         console.log('result[ptr2]', result[ptr2])

//         ptr1++
//         ptr2--

//     }

//     return result.join('')

// }


// console.log('reverString(str)', reverString(str))


















































// // https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/

// // Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// // Note that elements beyond the length of the original array are not written.

// // Do the above modifications to the input array in place, do not return anything from your function.


// const arr = [1, 0, 2, 3, 0, 4, 5, 0]



// function duplicateZeros(arr) {

//     const len = arr.length;
//     let ptr = 0;
//     // for (let i = 0; i < len; i++) {
//     //     if ()
//     // }

//     // start at first element
//     // if current element === 0,
//     // do an insertion of a 0 at +1 from that index
//     // keep track of that +1 index
//     // after the insertion is completed,
//     // traverse from that +1 index and 
//     // repeat the process

//     // 

// }

// console.log('duplicateZeros(arr)', duplicateZeros(arr))















// const arr = [5, 8, 6, 1]

// function greatestDiff(arr) {

//     let max = arr[0]
//     let min = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i]
//         if (arr[i] < min) min = arr[i]
//     }
//     return max - min
// }
// console.log('greatestDiff(arr)', greatestDiff(arr))

// const arr = [5, 8, 6, 1]

// function greatestDiff(arr) {

//     const greatest = findGreatest(arr)
//     const least = findLeast(arr)

//     return greatest - least
// }

// function findGreatest(arr) {
//     let currGreatest = -Infinity;
//     let i = 0
//     while (i < arr.length) {
//         if (currGreatest < arr[i]) currGreatest = arr[i]
//         i++
//     }
//     return currGreatest
// }

// function findLeast(arr) {
//     let currLeast = Infinity;
//     let i = 0
//     while (i < arr.length) {
//         if (currLeast > arr[i]) currLeast = arr[i]
//         i++
//     }
//     return currLeast
// }

// console.log('greatestDiff(arr)', greatestDiff(arr))





















// // 1

// const starbuckString = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"

// const firstApproachSBS = (str) => {

//     str = str.replace(/\W/g, ' ')

//     const splitStr = str.split(' ').filter(word => word !== '')

//     const obj = {}

//     for (let i = 0; i < splitStr.length; i++) {

//         obj[splitStr[i]] === undefined ? obj[splitStr[i]]=1 : obj[splitStr[i]] += 1



//         console.log('obj', obj)





//     }





// }

// firstApproachSBS(starbuckString)

// console.log('firstApproachSBS(starbuckString)', firstApproachSBS(starbuckString))






// function merge(left, right, array) {
//     let leftIndex = 0;
//     let rightIndex = 0;
//     let outputIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             array[outputIndex++] = left[leftIndex++];
//         }
//         else {
//             array[outputIndex++] = right[rightIndex++];
//         }
//     }

//     for (let i = leftIndex; i < left.length; i++) {
//         array[outputIndex++] = left[i];
//     }

//     for (let i = rightIndex; i < right.length; i++) {
//         array[outputIndex++] = right[i];
//     }
//     return array;
// };

// // merge sort 

// const array = [2, 3, 5, 1, 6, 4]
// console.log('array', array)
// let count = -1
// function mergeSort(array) {
//     count++
//     console.log('count', count)
//     if (array.length <= 1) {
//         console.log('array.length <= 1', array)
//         return array;
//     }

//     const middle = Math.floor(array.length / 2);
//     // console.log('middle', middle)
//     let left = array.slice(0, middle);
//     console.log('left', left)
//     let right = array.slice(middle, array.length);
//     console.log('right', right)

//     console.log('mergeSort(left)', left)
//     left = mergeSort(left);
//     console.log('mergeSort(right)', right)
//     right = mergeSort(right);
//     console.log('array', array)
//     return merge(left, right, array);
// };


// const arrayExample = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
// // console.log('mergeSort(arrayExample)', mergeSort(arrayExample))








// // mode freq

// const input = [1, 2, 3, 6, 10, 3, 5, 6, 3, 3]

// function modeFreq(input) {
//     const obj = {}
//     for (let num of input) {
//         if (obj[num]) {
//             obj[num]++
//         } else {
//             obj[num] = 1
//         }

//     }
//     const vals = Object.values(obj)
//     const keys = Object.keys(obj)
//     const freq = Math.max(...vals)
//     const freqIdx = vals.indexOf(freq)
//     const mode = +keys[freqIdx]
//     return [mode, freq]
// }
// console.log('modeFreq(input)', modeFreq(input))













// const partitionThis = [10,5,2,3,9,4]


// function partition(array, start, end) {
//     const pivot = array[end - 1];
//     console.log('pivot', pivot)
//     let j = start;
//     for (let i = start; i < end - 1; i++) {
//         if (array[i] <= pivot) {
//             console.log('array[i]', array[i])
//             swap(array, i, j);
//             console.log('swap(array, i, j)', swap(array, i, j))
//             j++;
//         }
//     }
//     swap(array, end - 1, j);
//     return j;
// };

// function swap(arr,a,b) {
//     return [b,a]
// }

// console.log('partition(partitionThis, start, end)',
//     partition(partitionThis, 0, partitionThis.length-1))




// 3 9 1 14 17 24 22 20

// The pivot could have been 17, but could not have been 14
// The pivot could have been either 14 or 17
// Neither 14 nor 17 could have been the pivot
// The pivot could have been 14, but could not have been 17


// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 

// last item pivot
//   i   
// 10 3 9 12 15 19 14 17 16 13 


// first item pivot 
//    i         
// 13 10 3 9 12 14 15 16 19 17 


















// /* 
// Algorithm to count number of word occurrences
// Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2` etc.
// */

// function wordCounter(sentence) {
//     const words = sentence.split(/\W/).filter(Boolean); // split via regex /\W/ and remove anything that doesn't match
//     const hash = new Map(); // hash map/table instantiation 

//     words.forEach(word => {
//         if (hash.has(word)) {
//             hash.set(word, hash.get(word) + 1); // if word exists in hash map, increment counter by 1         
//         }
//         else {
//             hash.set(word, 1); // otherwise, make a new key/value pair for the word.                          
//         }
//     });

//     const counter = []; // array to hold hash map results.                                

//     hash.forEach((value, key) => {  // loop through hash table to get the key/value data for the display array.                  
//         counter.push(key + ' = ' + value); 
//     });

//     return counter.join(', ');  // display array showing word occurences and join all key/value pairs with commas                         
// }

// console.log(wordCounter(`"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`));





// function bucketSort(arr, min, max) {
//     //given an array, sort it with an O(n) algorithm
//     //we know the maximum range of all values in the array
//     //because of this, we know every possible value in the array
//     //pass every value in the array into a hashMap, 
//     // tracking the number of times each value appears
//     const numMap = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         if (numMap.get(arr[i]) === undefined) {
//             numMap.set(arr[i], 1);
//         }
//         else {
//             numMap.set(arr[i], numMap.get(arr[i]) + 1);
//         }
//         console.log('numMap', numMap)
//     }
//     console.log('arr', arr)

//     //then iterate from min to max
//     //retrieving the values in the hashmap to know 
//     //how many times the given value appears
//     //overwrite the values in arr in order
//     let j = 0;
//     for (let i = min; i <= max; i++) {
//         console.log('i', i)
//         let numAppearing = numMap.get(i);
//         // console.log('numAppearing', numAppearing)
//         while (numAppearing) {
//             arr[j] = i;
//             console.log('j', j)
//             console.log('arr[j]', arr[j])
//             numAppearing--;
//             j++;
//         }
//     }
//     return arr;
// }

// const arr = [3, 7, 4, 9, 12, 5, 19];
// const min = Math.min(...arr);
// const max = Math.max(...arr);


// console.log('bucketSort (arr, min, max)', bucketSort(arr, min, max))








// function compareLists(list1, list2) {
//     if (!list1.head || !list2.head) {
//         return null;
//     }

//     let listNode1 = list1.head;
//     let listNode2 = list2.head; 

//     while (listNode1 && listNode2) {
//         if (listNode1.value.toLowerCase() < listNode2.value.toLowerCase()) {
//             return -1;
//         }
//         if (listNode1.value.toLowerCase() > listNode2.value.toLowerCase()) {
//             return 1;
//         }

//         listNode1 = listNode1.next;
//         listNode2 = listNode2.next;
//     }

//     if (!listNode1.next && !listNode2.next) {
//         return 0;
//     }

//     if (!listNode1.next && listNode2.next) {
//         return -1;
//     }

//     if (listNode2.next && !listNode2.next) {
//         return 1;
//     }
// }

// const list1 = new LinkedList();

// list1.insertFirst('B');
// list1.insertLast('i');
// list1.insertLast('l');
// list1.insertLast('b');
// list1.insertLast('o');
// list1.insertLast('a');

// const list2 = new LinkedList();

// list2.insertFirst('B');
// list2.insertLast('i');
// list2.insertLast('l');
// list2.insertLast('b');
// list2.insertLast('o');
// list2.insertLast('b');

// console.log(compareLists(list1, list2));


// // greatest difference

// const arr = [5, 8, 6, 1]

// function greatestDiff(arr) {

//     let max = -Infinity
//     let min = Infinity

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<min) min = arr[i]
//         if (arr[i]>max) max = arr[i]
//     }

//     return max - min


// }
// console.log('greatestDiff(arr)', greatestDiff(arr))







// // dsa interview 



// class Node {
//     // constructor
//     // value:
//     // next: 
//     constructor(value, next) {
//         this.value = value,
//         this.next = next
//     }
// }



// class LinkedList {



//     // constructor
//     // head = null
//     // length= 0
//     constructor() {
//         this.head = null,
//         this.length = 0
//     }


//     // insert item
//     // specify index 
//     // start traversing until get to correct index
//     // previous pointer connect to node 
//     // nodes next set equal to prev nodes next pointer
//     insert(value) {
//         let currNode = this.head
//         if (this.head===null) {
//             this.head = new Node(value,null)
//         }
//         while (currNode!==null) {
//             if (currNode.next === null) {
//                 currNode.next = new Node(value, null)
//             }
//             currNode = currNode.next
//         }
//     }



//     // find middle
//     findMiddle() {

//         if (this.head === null) return null

//         const len = this.length;
//         const middle = Math.floor(len/2);
//         let count = 0;
//         let currNode = this.head
//         while (count <= middle) {
//             currNode = currNode.next
//             count++
//         }

//         return currNode


//     }



//     // find
//     // take in value
//     // traverse until current node = value
//     // return index
//     // return null


//     // get
//     // use find to find the value
//     // return value


//     // remove
//     // specify index 
//     // traverse until find value to remove
//     // connect prev next next pointer to current next pointer 



// }





// function mergeSort(arr) {
//     let middle = Math.floor(arr.length/2);


//     if (arr.length === 0) {

//     }
// }

// //////////////////////////////////////////////////////////////////////////


// // function same, takes in two arrays. if every value in first array has 
// // its squared value in second array, return true

// let arr1 = [2, 3]
// let arr2 = [4,  9]

// // array length can be different
// // assume not duplicates in input arr


// function same(arr1, arr2) {

//     const obj1 = {}

//     for (let num of arr1) {
//         console.log('num', num)
//         if (obj1[num ** 2]) {
//             ++obj1[num ** 2]
//         } else {
//             obj1[num ** 2] = 1
//         }
//         console.log('obj1[num**2]', obj1[num ** 2])
//     }
//     console.log('obj1', obj1)

//     for (let num of arr2) {
//         if (!obj1[num]) {
//             return false
//         } else {
//             obj1[num]--
//         }
//         console.log('obj1', obj1)
//     }
//     return true

// }

// console.log('same(arr1,arr2)', same(arr1, arr2))







// // valid anagram 

// const str1 = 'blahh'
// const str2 = 'lhhab'

// function validAnagram(str1, str2) {
//     if (str1 === '' && str2 === '') {
//         return true
//     }

//     let freqs1 = {}
//     for (let char of str1) {
//         freqs1[char] = (freqs1[char] || 0) + 1
//     }

//     let freqs2 = {}
//     for (let char of str2) {
//         freqs2[char] = (freqs2[char] || 0) + 1
//     }
//     console.log('freqs2', freqs2)


//     for (let key in freqs1) {
//         if (!(freqs1[key] === freqs2[key])) {
//             return false
//         }
//     }

//     return true
// }

// console.log('validAnagram(str1,str2)', validAnagram(str1, str2))

// better way to solve is to do one obj called lookup.
// fill in lookup obj with str 1 chars and their frequency
// loop thru second str
// see if exists in lookup, 
// if it does, decrement that letters frequency 
// if not or if it's 0, return false


// // countUniqueValues from sorted arr

// const arr = [1, 1, 2, 5, 5, 5, 5, 6]

// function countUniqueValues(arr) {
//     if (arr.length===0) {
//         return 0
//     }
//     let count = 0
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] !== arr[i + 1]) {
//             count++
//         }
//     }
//     return count + 1
// }


// console.log('countUniqueValues(arr)', countUniqueValues(arr))









// const num1 = 21344;
// const num2 = 32414


// function sameFrequency(num1, num2) {

//     if (num1 && num2) {

//         const str1 = num1.toString()
//         const str2 = num2.toString()
//         const lookup = {}
//         let key
//         for (let i = 0; i < str1.length; i++) {

//             key = str1.charAt(i)

//             lookup[key] = ++lookup[key] || 1

//         }

//         for (let i = 0; i < str2.length; i++) {

//             let val = str2.charAt(i)
//             console.log('lookup[val]',val, lookup[val])

//             if (!lookup[val]) {
//                 return false
//             }
//             lookup[val]--

//         }
//         return true


//     }

// }


// console.log('sameFrequency(num1,num2)', sameFrequency(num1, num2))




// sameFrequency Solution
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;

//   let countNum1 = {};
//   let countNum2 = {};

//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }

//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }

//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }

//   return true;
// }










// const args = [1, 2, 2, 3, 0]

// function areThereDuplicates(...args) {
//     if (!args) return false
//     args.sort()

//     let i = 0
//     let next = 1

//     while (next < args.length) {
//         if (args[next] === args[i]) {
//             return true
//         }
//         next++
//         i++
//     }

//     return false
// }


// console.log('areThereDuplicates(arr)', areThereDuplicates(...args))






// // areThereDuplicates Solution (Multiple Pointers)
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }


// // areThereDuplicates One Liner Solution
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

// console.log('areThereDuplicates(1,2,3,4,4)', areThereDuplicates(1,2,3,4,4))




// const arr = [4, 1, 2, 3]
// const avg = 2

// function averagePair(arr, avg) {


//   let i = 0;

//   let next = 1
//   while (next<arr.length) {


//     for (let j = next; j < arr.length; j++ ) {
//       console.log('j', j)

//       console.log('(arr[i] + arr[next]) / 2', (arr[i] + arr[next]) / 2)
//       if ((arr[i] + arr[j]) / 2 === avg) {

//         return true
//       }
//     }






//     i++
//     next++
//   }

//   return false

// }


// console.log('averagePair(arr, avg)', averagePair(arr, avg))



// const arr = [3,4,2,1]
// const num = 1.5

// // averagePair Solution
// function averagePair(arr, num) {
//   arr.sort()
//   let start = 0
//   let end = arr.length - 1;
//   while (start < end) {
//     let avg = (arr[start] + arr[end]) / 2
//     if (avg === num) return true;
//     else if (avg < num) start++
//     else end--
//   }
//   return false;
// }


// console.log('averagePair(arr, num)', averagePair(arr, num))




// //     i
// // a b c 

// //         j 
// // a f b f d

// // if j value === i value
// // increment i, increment j
// // else, increment j
// // if j becomes greater than length of second string
// // return false
// // else return true

// const str1 = 'abc'
// const str2 = 'abfc'

// function isSubsequence(str1,str2) {

//   if (str2.length < str1.length ) {
//     return false
//   }

//   let j = 0
//   for (let i = 0; i< str1.length; i++) {

//     while (str1[i] !== str2[j]) {
//       if (j >= str2.length) {
//         return false
//       }
//       j++
//     }
//   }

//   return true

// }
// console.log('isSubsequence(str1,str2)', isSubsequence(str1,str2))
















// // isSubsequence Solution - Iterative
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }
// console.log('isSubsequence(str1, str2)', isSubsequence(str1, str2))


// // isSubsequence Solution - Recursive but not O(1) Space
// function isSubsequence(str1, str2) {
//   if(str1.length === 0) return true
//   if(str2.length === 0) return false
//   if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//   return isSubsequence(str1, str2.slice(1))
// }



// const arr = [1, 2, 3, 4, 2, 2]
// const num = 2

// // maxSubArray Solution
// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;

//   let total = 0;
//   for (let i = 0; i < num; i++) {
//     total += arr[i];  
//   }
//   let currentTotal = total;
//   for (let i = num; i < arr.length; i++) {
//     currentTotal += arr[i] - arr[i - num];
//     total = Math.max(total, currentTotal);
//   }
//   return total;
// }

// console.log('maxSubarraySum(arr, num)', maxSubarraySum(arr, num))




// const str = 'abcaaaaabcd'

// // findLongestSubstring Solution
// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     // console.log('start', start)
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//       console.log('seen[char]', seen[char])
//       console.log('start', start)
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     console.log('longest', longest)
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }


// console.log('findLongestSubstring(str)', findLongestSubstring(str))












// //power

// // power(2,0) // 1
// // power(2,2) // 4
// // power(2,4) // 16

// function power(num, exponent) {

//   if (exponent === 0) return 1

//   return num * power(num, exponent - 1)

// }


// console.log('power(2,4)', power(2, 3))










// //factorial(1) // 1
// // factorial(2) // 2
// // factorial(4) // 24
// // factorial(7) // 5040

// const num =7

// function factorial(x){
//   if (x < 0 ) return 0;
//   if (x <= 1 ) return 1;
//   return x * factorial(x-1);
// }


// console.log('factorial(num)', factorial(num))







// // productOfArray([1,2,3]) // 6
// // productOfArray([1,2,3,10]) // 60



// function productOfArray(arr) {

//   if (arr.length === 1) return arr[0];

//   return arr[0] * productOfArray(arr.slice(1))
// }

// console.log('productOfArray([1,2,3])', productOfArray([1,2,3,10]))










// // SAMPLE INPUT/OUTPUT
// // recursiveRange(6) // 21
// // recursiveRange(10) // 55 

// const num = 10

// function recursiveRange(num){

//   if (num === 0) return 0  

//   return num + recursiveRange(num-1)
// }

// console.log('recursiveRange(num)', recursiveRange(num))








// // fib(4) // 3
// // fib(10) // 55
// // fib(28) // 317811
// // fib(35) // 9227465

// const num = 35

// function fib(num) {

//   if (num <= 2) return 1


//   return fib(num -1) + fib(num-2)
// }



// console.log('fib(num)', fib(num))



















// const arr = [0,1,2,3,4,5,6,7]
// const val = 8

// function binarySearch(arr, val) {
//   let left = 0
//   let right = arr.length - 1
//   let middle = Math.floor(arr.length / 2)
//   while (arr[middle]!==val && left<=right) {
//     console.log('arr[middle]', arr[middle])
//     console.log('val===arr[middle]', val===arr[middle])
//     if (val===arr[middle]) return middle
//     if (val < arr[middle]) {
//       right = middle-1
//     } else {
//       left = middle+1
//     }
//     console.log('left', left)
//     console.log('right', right)
//     middle = Math.floor((left+right) / 2)
//     console.log('middle', middle)
//   }

//   if (arr[middle] === val) return middle
//   return -1
// }

// console.log('binarySearch(arr,val)', binarySearch(arr, val))




// const str = "abcblahabcblah";
// const word = "blah";
// const strLen = str.length;
// const wordLen = word.length

// function naiveStringSearch(str, word) {
//   let count = 0
//   for (let i = 0; i < strLen; i++) {
//     if (str[i] === word[0]) {
//       let j = i
//       while (j < j + wordLen && j < strLen) {
//         if (str[j] !== word[j-i]) {
//           break
//         } 
//         if (j-i === wordLen-1) {
//           count++
//         }
//         j++
//       }
//     }
//   }
//   return count
// }
// console.log('naiveStringSearch(str,word)', naiveStringSearch(str, word))




// // bubble sort 

// const arr = [4, 5, 2, 3, 1]

// function bubbleSort(arr) {

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1)
//       }
//     }
//   }

//   return arr

// }

// function swap(arr, idx1, idx2) {
//   const temp = arr[idx1]
//   arr[idx1] = arr[idx2]
//   arr[idx2] = temp
// }

// console.log('bubbleSort(arr)', bubbleSort(arr))




// const arr = [4, 5, 2, 3, 1]


// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIdx = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIdx] > arr[j]) {
//         minIdx = j
//       }
//     }
//     if (i !== minIdx) {
//       swap(arr, i, minIdx)
//     }
//   }
//   return arr
// }

// function swap(arr, idx1, idx2) {
//   const temp = arr[idx1]
//   arr[idx1] = arr[idx2]
//   arr[idx2] = temp
// }

// console.log('selectionSort(arr)', selectionSort(arr))




// const arr = [1, 2, 2, 3]

// function areThereDuplicates(...args) {

//   const counterObject = new Set();
//   for (const curr of args) {

//     if (counterObject.has(curr)) {
//       console.log('counterObject', counterObject)
//       return true;
//     }
//     counterObject.add(curr);
//     // console.log('counterObject', counterObject)
//   }
//   return false;
// }



// console.log('areThereDuplicates(...arr)', areThereDuplicates(...arr))









// function merge(arr1, arr2) {
//   const len1 = arr1.length;
//   const len2 = arr2.length;

//   let i = 0
//   let j = 0
//   let mergedArr = []
//   while (i < len1 && j < len2) {
//     if (arr1[i] < arr2[j]) {
//       mergedArr.push(arr1[i])
//       i++
//     } else {
//       mergedArr.push(arr2[j])
//       j++
//     }

//   }

//   while (i < len1) {
//     mergedArr.push(arr1[i])
//     i++
//   }

//   while (j < len2) {
//     mergedArr.push(arr2[j])
//     j++
//   }

//   return mergedArr

// }


// console.log('merge([1, 10, 50], [2, 14, 99, 100])', merge([1, 10, 50], [2, 14, 99, 100]))



// const arr = [4, 7, 3, 1, 8, 2, 5, 6]
// // const arr = [2, 1]


// function mergeSort(arr) {

//   if (arr.length <= 1) {
//     return arr;
//   }

//   let midpoint = Math.floor(arr.length / 2)
//   let leftArr = mergeSort(arr.slice(0, midpoint));
//   let rightArr = mergeSort(arr.slice(midpoint));



//   return merge(leftArr,rightArr)
// }

// console.log('mergeSort(arr)', mergeSort(arr))













// function swap(arr, idx1, idx2) {
//   const temp = arr[idx1]
//   arr[idx1] = arr[idx2]
//   arr[idx2] = temp
// }




// const arr = [7, 4, 3, 1, 8, 2, 5, 6]

// function quickSort(arr) {

// }

// function pivot(arr, start = 0, end = arr.length - 1) {


// let pivotVal = arr[start]
// let swapIdx = start


//   for (let i = 1; i <= end; i++) {
//     if (arr[start] > arr[i]) {
//       swapIdx++;
//       console.log('swapIdx', swapIdx)
//       swap(arr,swapIdx,i)
//       console.log('arr', arr) 
//     }
//   }
//   swap(arr,start,swapIdx)
//   return arr


// }

// console.log('pivot(arr,start,end)', pivot(arr, 0, arr.length-1))







// const s = 'aaaabbbb'



// function countStrings(s) {

//   let curS = s
//   let count = 0
//   for (let i = 0; i < s.length; i++) {
//     if (curS.charAt(0) === curS.charAt(curS.length-1)) {
//       count++
//     }
//     curS = circleShift(curS) 
//   }

//   return count

// }

// function circleShift(s) {

//   let firstLetter = s.charAt(0)
//   let newS = s.slice(1).concat(firstLetter)
//   return newS

// }


// console.log('countStrings(s)', countStrings(s))



// //hackerrank thing 2

// const size = [ 5, 7, 6, 9, 8, 4, 2,2]


// function findDolls(size) {

//   let sortedSize = size.sort((a, b) => {
//     return a - b
//   })

//   console.log('sortedSize', sortedSize)
//   let ptr1 = 0;
//   let ptr2 = 1;
//   let count = 0;
//   let deleted = {}
//   while (ptr2 < sortedSize.length) {
//     if (sortedSize[ptr2] >= 2 * sortedSize[ptr1]) {

//       count++
//       deleted[ptr2] = true
//       ptr2++
//       // console.log('ptr1 + 1', ptr1 + 1)
//       // console.log('deleted', deleted)
//       // console.log('ptr1 + 1', ptr1 + 1)
//       // console.log('!deleted[ptr1 + 1 ]', !deleted[ptr1 + 1 ])
//       console.log('!deleted[ptr1 + 1 ] && ptr2 >= ptr1+1', deleted[ptr1 + 1 ] && ptr2 >= ptr1+1)
//       while(!deleted[ptr1 + 1 ] && ptr2 >= ptr1+1) {
//         console.log('ptr1', ptr1)
//         ptr1++
//       }

//     } else {
//       ptr2++
//     }

//   }

//   return size.length - count

// }



// console.log('findDolls(size)', findDolls(size))

// const meal_cost = 15.50
// const tax_percent = 15
// const tip_percent = 10


// function solve(meal_cost, tip_percent, tax_percent) {

//   const tip_amount = meal_cost * tip_percent / 100;
//   const tax_amount = meal_cost * tax_percent / 100;

//   const total = meal_cost + tip_amount + tax_amount;

//   return Math.round(total);


// }

// console.log('solve(meal_cost, tip_percent, tax_percent)', solve(meal_cost, tip_percent, tax_percent))



// const ar = [1,2,2,4,4,4,5,5]
// const n = ar.length
// function sockMerchant(ar, n) {

//   if (ar.length <=1) return 0

//   let sortedAr = ar.sort((a,b)=> {
//     return a-b;
//   })


//   let ptr1 = 0;
//   let ptr2 = 1;
// let count = 0;
//   while (ptr2 < sortedAr.length) {

//     if (sortedAr[ptr1] === sortedAr[ptr2]) {
//       count++
//       ptr1 += 2
//       ptr2 += 2


//     } else {
//       ptr1++
//       ptr2++
//     }

//   }


//   console.log(count)
//   return count

// }

// console.log('sockMerchant(arr, n)', sockMerchant(arr, n))

// const path = 'UUDDUUDDDUUUDD'
// const steps = path.length;

// function countingValleys(steps, path) {

//   let level = 0
//   let wentBelow = false
//   let cameBackUp = false
//   let count = 0
//   for (let i = 0; i < steps; i++) {
//     level += path.charAt(i) === 'U' ? 1 : -1;

//     if (level === -1) {
//       wentBelow = true;
//     }


//     // console.log('level', level)
//     // console.log('wentBelow', wentBelow)
//     // console.log('cameBackUp', cameBackUp)
//     if (wentBelow && level === 0) {
//       cameBackUp = true;
//       count++;
//       wentBelow = false
//     }
//   }
//   console.log(count)
//   return count
// }

// console.log('countingValleys(steps, path)', countingValleys(steps, path))












// const SLL = new SinglyLinkedList();
// console.log('SLL', SLL)



// // SLL.push(1)
// // console.log('SLL', SLL)

// // SLL.push(2)
// // console.log('SLL', SLL)
// // SLL.push(3)
// // console.log('SLL', SLL)
// // SLL.push(4)
// // console.log('SLL', SLL)

// // SLL.pop()
// // console.log('SLL', SLL)
// // SLL.pop()
// // console.log('SLL', SLL)
// // SLL.pop()
// // console.log('SLL', SLL)
// // SLL.pop()
// // console.log('SLL', SLL)

// // SLL.shift()
// // console.log('SLL', SLL)

// SLL.unshift(0)
// console.log('SLL', SLL)











// // hackerrank

// const c = [0,1,0,0,0,0,0,1,0]

// function jumpingOnClouds(c) {
//   const len = c.length;
//   let jumps = 0;
//   let jumperIdx = 0
//   while (jumperIdx < len - 1) {

//     if (c[jumperIdx + 2] === 0) {
//       jumperIdx += 2;
//     } else {
//       jumperIdx += 1;
//     }
//     console.log('jumperIdx', jumperIdx)
//     jumps++;
//   }
//   return jumps;
// }

// console.log('jumpingOnClouds(c)', jumpingOnClouds(c))



// const s = 'a';
// const n = 10000;  
// function repeatedString(s, n) {

//   const len = s.length;
//   const numAInS = s.split('').filter(letter => letter === 'a').length;

//   const timesIntoN = Math.floor(n / len);
//   const remainder = n % len;

//   const SLLice = s.slice(0,remainder);
//   const trailingAs =  sSlice.split('').filter(letter => letter === 'a').length;

//   const totalA = timesIntoN * numAInS + trailingAs;

//   return totalA;

// }


// console.log('repeatedString(s, n)', repeatedString(s, n))




// 1234
// 1243
// 1423




// // hackerrank comcast

// // const obstacleLanes = [2, 1, 2]
// const obstacleLanes = [2, 1, 3, 22]

// function minimumMovement(obstacleLanes) {
//   let obs = obstacleLanes;
//   let len = obs.length;

//   let curLane = 2;

//   let dist = 0
//   let moves = 0
//   while (dist < len) {


//     if (obs[dist] === curLane) {
//       curLane = move(dist, curLane, obs);
//       moves++;
//     }

//     dist++
//   }

//   return moves
// }



// function move(dist, curLane, obs) {
//   let flipCoin = Math.random() < 0.5; // lul
//   // if (obs[dist + 1] === 1 && curLane === 1) {
//   //   return curLane = flipCoin === true ? 2 : 3;
//   // }
//   if (obs[dist + 1] === 1 && curLane === 2) {
//     return curLane = 3
//   }
//   if (obs[dist + 1] === 1 && curLane === 3) {
//     return curLane = 2
//   }


//   // if (obs[dist + 1] === 2 && curLane === 2) {
//   //   return curLane = flipCoin === true ? 1 : 3;
//   // }
//   if (obs[dist + 1] === 2 && curLane === 1) {
//     return curLane = 3
//   }
//   if (obs[dist + 1] === 2 && curLane === 3) {
//     return curLane = 1
//   }


//   // if (obs[dist + 1] === 3 && curLane === 3) {
//   //   return curLane = flipCoin === true ? 1 : 2;
//   // }
//   if (obs[dist + 1] === 3 && curLane === 1) {
//     return curLane = 2
//   }
//   if (obs[dist + 1] === 3 && curLane === 2) {
//     return curLane = 1
//   }
// }

// console.log('minimumMovement(obstacleLanes)', minimumMovement(obstacleLanes))




// const arr = [1, 9, 9, 4, 4, 4, 4, 4, 1, 1];

// function equalizeArray(arr) {
//   const count = {};
//   let maxCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i]] = count[arr[i]] ? count[arr[i]] + 1 : 1;
//     if (count[arr[i]] > maxCount) {
//       maxCount = count[arr[i]];
//     }
//   }
//   return arr.length - maxCount;
// }



// console.log('equalizeArray(arr)', equalizeArray(arr))


// const arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 9, 2, -4, -4, 0],
//   [0, 0, 0, -2, 0, 0],
//   [0, 0, -1, -2, -4, 0],
// ]


// function hourglassSum(arr) {
//   let maxSum = -Infinity;
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       maxSum = Math.max(hgSum(arr, i, j), maxSum)
//       // console.log('hourglassSum', i, j, arr[i][j], maxSum)
//     }
//   }

//   return maxSum;

// }

// function hgSum(arr, x, y) {
//   let sum = 0;

//   for (let i = x; i < x + 3; i++) {

//     for (let j = y; j < y + 3; j++) {

//       if (i === x + 1) {
//         if (j === y + 1) {
//           sum += arr[i][j];
//         }
//       } else {
//         sum += arr[i][j];
//       }
//       // console.log('i', i,'j', j,'sum',sum)
//     }
//   }
//   return sum;
// }

// let x = 0;
// let y = 0;

// console.log('hgSum(arr, x, y)', hgSum(arr, x, y))


// console.log('hourglassSum(arr)', hourglassSum(arr))






// const a = [1, 2, 3, 4, 5];

// const d = 2;

// function rotLeft(a, d) {
//   const n = a.length;

//   if (d === n) return a

//   const result = a.slice(d).concat(a.slice(0, d))

//   return result

// }


// console.log('rotLeft(a, d)', rotLeft(a, d))






// const arr = [1, 3, 5, 2, 4, 6, 7]


// function minimumSwaps(arr) {

//   let swapCount = 0

//   let j
//   for (let i = 0; i < arr.length; i++) {

//     let correctVal = i + 1

//     if (arr[i] !== correctVal) {
//       j = i + 1
//       while (arr[j] !== correctVal && j < arr.length) {

//         j++
//       }

//       swap(arr,i,j)
//       swapCount++
//     }


//   }

//   // return arr
//   return swapCount;


// }

// function swap(arr, i, j) {
//   const temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp;
// }


// console.log('minimumSwaps(arr)', minimumSwaps(arr))




// const queries = [[2,6,8], [3,5,7], [1,8,1],[5,9,15]];
// const n = 10

// function arrayManipulation(n, queries) {

//   let max = 0;
//   let size = queries.length;
//   let sums = {};

//   for (let row = 0; row < size; row++) {

//     let k
//     let startInd = queries[row][0]
//     // console.log('startInd', startInd)
//     let endInd = queries[row][1]
//     // console.log('endInd', endInd)
//     for (let col = startInd; col < endInd+1; col++) {
//       k = queries[row][2];

//       if (sums[col] === undefined) {
//         sums[col] = 0
//       }

//       sums[col] += sums[col] !== undefined && col >= startInd && col <= endInd
//         ? k
//         : 0

//         if (sums[col] > max) max = sums[col]
//     }
//   }


//   return max
// }

// console.log('arrayManipulation(n, queries)', arrayManipulation(n, queries))




// const queries = [[1, 3, 5], [3, 5, 10], [5, 7, 20], [1, 2, 30]];
// const n = 10

// function arrayManipulation(n, queries) {

//   const arr = Array(n + 1);


//   let maxValue = 0,
//     currentNumber = 0;
//   queries.forEach(([startRange, endRange, value]) => {
//     arr[startRange] = arr[startRange] || { start: 0, end: 0 };
//     console.log('arr[startRange]', arr[startRange])
//     // console.log('startRange', startRange)
//     // console.log('arr[startRange]', arr[startRange])
//     arr[endRange] = arr[endRange] || { start: 0, end: 0 };
//     arr[startRange].start += value;
//     // console.log('arr[startRange].start', arr[startRange].start)
//     arr[endRange].end += value;
//     // console.log('arr[endRange].end', arr[endRange].end)
//     console.log('arr', arr)
//   });
//   // console.log('queries', queries)
//   // console.log('arr', arr)
//   console.log('arr', arr)
//   arr.forEach((cell) => {
//     if (cell) {
//       currentNumber += cell.start;
//       if (currentNumber > maxValue) {
//         maxValue = currentNumber;
//       }
//       currentNumber -= cell.end;
//     }
//   });
//   return maxValue;
// }




// console.log('arrayManipulation(n, queries)', arrayManipulation(n, queries))






// const nums = [1]

// var removeDuplicates = function (nums) {

//   if (nums.length === 0) return 0
//   let j = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[j++] = nums[i]
//     }
//   }
//   nums[j++] = nums[nums.length - 1]
//   return j;
// };

// console.log('removeDuplicates(nums)', removeDuplicates(nums))





// const prices = [1,2,3,4,5]

// var maxProfit = function (prices) {
//   let profit = 0
//   let buyInd
//   let sellInd
//   let i = 0
//   while (i < prices.length - 1)  {
//     if (prices[i] < prices[i + 1]) {
//       buyInd = i
//       let j = i + 1;
//       while (prices[j] < prices[j + 1]) {
//         j++
//       }
//       sellInd = j
//       profit += prices[sellInd] - prices[buyInd]
//       i = j+1
//     } else {
//       i++
//     }
//   }
//   return profit
// };






// console.log('maxProfit(prices)', maxProfit(prices))



// function f(x) {
//   x *= 2
//   return function (y) {
//     y *= x
//     return function (z) {
//       return z * y;
//     }
//   }
// }
// let g = f(3)(4)(5);
// console.log('f(3)(4)(5)', f(3)(4)(5))


// const nums = [1,5,-2,-4,0,1]

// const containsDuplicate = function (nums) {

//   const dictionary = new Set();

//   for (let num of nums) {
//     if(dictionary.has(num)) {
//       return true
//     }

//     dictionary.add(num)
//   }
//   return false
// };


// console.log('containsDuplicate(nums)', containsDuplicate(nums))





// const s = ["h"];

// var reverseString = function (s) {

//   const len = s.length
//   if (len <= 1) return s
//   const middle = Math.floor(len / 2)
//   for (let i = 0; i < middle; i++) {
//     let j = len - 1 - i
//     let temp = s[i]
//     s[i] = s[j]
//     s[j] = temp
//   }
//   return s;
// };

// function swap(arr, i, j) {

// }


// console.log('reverseString(s)', reverseString(s))




// var removeNthFromEnd = function (head, n) {



//   const list = head
//   let isTrue = true
//   while (head.next || isTrue) {


//   }
//   return list
// };


// function ListNode(val,next) {
//   this.val = (val === undefined ? 0 : val) 
//   this.next = (next === undefined ? null : next)
// }


// let SLL = new SinglyLinkedList

// SLL.push(0)
// SLL.push(1)
// SLL.push(2)
// console.log('SLL', SLL)

// let head = SLL.head;

// var reverseList = function(head) {
//     if (!head.next) return head

//     let prev = null
//     let cur = head

//     while(cur !== null) {

//       nextTemp = cur.next // 1
//       cur.next = prev // null
//       prev = cur
//       cur = nextTemp

//     }

//     console.log('cur', cur)

// };



// console.log('reverseList(head)', reverseList(head))

// const nums = new Set()
// nums.add(1)
// nums.add(2)
// nums.add(3)

// const nums = [1, 2, 3]

// var Solution = function (nums) {
//   const origNums = nums;
//   const len = nums.length;

//   this.shuffle = () => {
//     const shuffled = []

//     while (nums.length > 0) {
//       const index = Math.random() * nums.length;
//       const spliced = nums.splice(index, 1)[0];
//       shuffled.push(spliced);
//     }
//     return shuffled
//   }

//   this.reset = () => {

//   }

// };

// let solution = new Solution(nums)

// let shuffled = solution.shuffle()
// console.log('shuffled', shuffled)


// const nums = [2,7,4,1] 
// const target = 9

// var twoSum = function(nums, target) {
//   const dictionary = new Map()

//   for (let i = 0; i< nums.length; i++) {
//     const num = nums[i]
//     const complement = target - num
//     if (dictionary.has(num)) {
//       return [dictionary.get(num),i ]
//     }
//     dictionary.set(complement,i)
//   }
// };



// console.log('twoSum(nums,target)', twoSum(nums,target))



// //                j
// const nums1 =    [4, 9, 5]
// //                k
// //             i
// const nums2 = [9, 4, 9, 8, 4, 9]

// //               j
// const nums1 = [2, 1]
// //             k
// //               i
// const nums2 = [1, 1]

// var intersect = function (nums1, nums2) {
//   const len1 = nums1.length
//   const len2 = nums2.length
//   let short
//   let long
//   if (len1 <= len2) {
//     short = nums1
//     long = nums2
//   } else {
//     short = nums2
//     long = nums1
//   }

//   let intersection = [];

//   for (let i = 0; i < long.length; i++) {
//     // console.log('long[i]', long[i])
//     // console.log('short[0]', short[0])
//     if (short[0] === long[i]) {

//       let j = 0
//       let k = i
//       while (long[k] === short[j] && k < long.length && j < short.length) {
//         intersection[j] = short[j]
//         k++
//         j++
//       }
//     }

//   }
//   return intersection
// };




// console.log('intersect(num1,num2)', intersect(nums1, nums2))

// //             j
// const nums1 = [2, 1]
// //             k
// //             i
// const nums2 = [1, 1]


// //                j
// const nums1 =    [4, 9, 5]
// //                k
// //             i
// const nums2 = [9, 4, 9, 8, 4, 9]



// var intersect = function (nums1, nums2) {
//   const len1 = nums1.length
//   const len2 = nums2.length
//   let short
//   let long
//   if (len1 <= len2) {
//     short = nums1
//     long = nums2
//   } else {
//     short = nums2
//     long = nums1
//   }

//   const longObj = {}
//   const intersection = []

//   for (const num of long) {
//     if (longObj[num]) {
//       longObj[num]++ 
//     } else {
//       longObj[num] = 1
//     }
//   }

//   for (const num of short) {
//     if (longObj[num]) {
//       intersection.push(num)
//       longObj[num]--
//     }
//   }
//   return intersection

// };




// console.log('intersect(num1,num2)', intersect(nums1, nums2))


// //               i          
// const s = "cce"

// var firstUniqChar = function(s) {

//   if (s.length === 0) return -1

//   const possibles = []
//   const seenLetters = new Set()
//   // traverse from i = end to beginning of string
//   for (let i = s.length-1; i >= 0; i--) {
//     // for each character, check if it's contained in map. 
//     const letter = s.charAt(i)

//     if (!seenLetters.has(letter)) {
//       // if it's not, push the index onto a stack
//       possibles.push([letter, i])
//       seenLetters.add(letter)
//     } 
//   }

//   let j = 0
//   while (j < possibles.length) {
//     if (!seenLetters.has(possibles[j][0])) {
//         return possibles[j][0]
//       }
//       j++
//     }


//     // return last item on stack
//   console.log('possibles', possibles)
//   // return possibles.pop()
//   return -1

// };

// console.log('firstUniqChar(s)', firstUniqChar(s))









// //               i          
// const s = "ccecccce"

// var firstUniqChar = function(s) {
//   const seen = {}

//   for (let i = 0; i < s.length; i++) {
//     const letter = s[i]
//     if (!seen[letter]) {
//       seen[letter] = 1

//     } else {
//       seen[letter]++
//     }
//   }

//   for (let i = 0; i< s.length; i++) {
//     const letter = s[i]
//     if (seen[letter] === 1) {
//       return i
//     }
//   }

//   return -1

// };

// console.log('firstUniqChar(s)', firstUniqChar(s))


// const s = "-5-"

// var myAtoi = function (s) {
//   if (s.length === 0) return 0

//   let result = ''
//   let i = 0
//   let keepGoing = true;
//   let answer = 0
//   let foundNums = false
//   let foundSign = false
//   let signClosed = false

//   function returnResult(result) {
//     if (parseInt(result) < -2147483648) {
//       result = -2147483648
//     }
//     if (parseInt(result) > 2147483647) {
//       result = 2147483647
//     }
//     return parseInt(result)
//   }

//   while (i < s.length && keepGoing) {
//     const letter = s.charAt(i).toLowerCase()

//     if (letter === ' ') {
//       if (foundNums ) {
//         return returnResult(result)
//       } else if (foundSign && !foundNums){
//         return 0
//       }
//       i++
//     } else if (letter.charCodeAt() === 46
//     || (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122)) {
//       if (foundNums) {
//         return returnResult(result)
//       } else {
//         return answer
//       }
//     } else if (letter === '-' || letter === '+') {
//       if (foundSign === true) {
//         if (foundNums) return returnResult(result)
//         return 0
//       }

//       foundSign = true
//       result += letter
//       i++
//     } else if (parseInt(letter) >= 0) {
//       foundNums = true
//       result += letter
//       i++
//     }
//     // console.log('result', result)

//   }
//   if (parseInt(result) < -2147483648) {
//     result = -2147483648
//   }
//   if (parseInt(result) > 2147483647) {
//     result = 2147483647
//   }
//   if (parseInt(result) !== 0 && Boolean(parseInt(result)) === false) {
//     return 0
//   }
//   return parseInt(result)

// };


// const s = "   34 qwer"




// var myAtoi = function(s) {
//   var a = parseInt(s, 10) ? parseInt(s, 10) : 0;
//   if(a > Math.pow(2, 31) - 1) {
//       return Math.pow(2, 31) - 1
//     } else if (a < Math.pow(-2, 31)) {
//       return -Math.pow(2, 31);
//   }
//   return a

// };

// console.log('myAtoi(s)', myAtoi(s))




// const haystack = ""
// const needle =  ""

// var strStr = function(haystack, needle) {

//   const len = haystack.length;
//   const needleLen = needle.length;
//   // if (len === 0) return -1
//   if (needleLen === 0) return 0
//   let potentialStart = 0

//   // traverse until len - needleLen
//   let i = 0
//   while (i <= len - needleLen ) {
//     // console.log('haystack[i]', haystack[i])
//     // if needle[0] matches haystack[i], see if the rest of needle matches
//     let j = 0
//     let k = i
//     potentialStart = i
//     while( needle[j] === haystack[k] ) {
//       if (j === needleLen-1) return potentialStart
//       j++
//       k++
//     }
//     i++
//   }

//   return -1

// };

// console.log('strStr(haystack, needle)', strStr(haystack, needle))

//                      seen = a 
//         i   
// const s = "daasdfasdfasdfasdf"
// //         j
// //  i = 0   s[i] = a                                                                              maxStr = 1
// //  i = 1   s[i] = b                                                                              maxStr = 2
// //  i = 2   s[i] = b  if (set.has(s[i])) maxStr = 1                                               maxStr = 1  
// //  i = 3   s[i] = a                                                                              maxStr = 2    
// //  i = 4   s[i] = b  if (set.has(s[i])) maxStr = 1, go back to last element that isnt this one   maxStr = 1        
// //  i = 5   s[i] = c                                                                              maxStr = 1  

// var lengthOfLongestSubstring = function (s) {
//   const len = s.length
//   if (len === 0) return 0
//   if (len === 1) return 1
//   let subLen = 0
//   let maxStr = 0
//   const seen = new Set()
//   let i = 0
//   while (i < len) {
//     if (seen.has(s[i])) {
//       seen.clear()
//       let j = i - 1
//       let k = i
//       if (s[i - 1] === s[i]) {
//       } else {
//         while (s[j] !== s[i] && j > 0) {
//           j--
//         }
//         i = j + 1
//       }
//       subLen = 1
//     } else {
//       subLen++
//     }
//     maxStr = Math.max(subLen, maxStr)
//     seen.add(s[i])
//     i++
//   }
//   return maxStr
// };

// console.log('lengthOfLongestSubstring(s)', lengthOfLongestSubstring(s))








// //              i
// const s = "ababcabbcd"
// //           j

// var lengthOfLongestSubstring = function (s) {

//   let max = 0
//   let count = new Set()

//   let i = 0
//   let j = 0
//   while (i < s.length) {

//     while (count.has(s[i])) {
//       count.delete(s[j])
//       j++
//     }

//     count.add(s[i])
//     i++

//     max = Math.max(max, count.size)

//   }
//   return max
// };

// console.log('lengthOfLongestSubstring(s)', lengthOfLongestSubstring(s))



//      aabc
//      cbaa     does orig === rev ?   nope
//      baa      does orig[0:3] === rev[1:4]   i=start=0 to i=len-winLenRem    j=len-winLenRem  to j=len       winLen=3  winLenRem=len-winLen=1  
//       cba     does orig[1:4] === rev[0:3]   i=start=1 to i=len              j=0  to j=len-winLenRem         winLen=3  winLenRem=len-winLen=1  
//      aa       does orig[0:2] === rev[2:4]   i=start=0 to i=start+len-winLenRem    j=len-winLenRem  to j=len       winLen=2  winLenRem=len-winLen=2
//       ba      does orig[1:3] === rev[1:3]   i=start=1 to i=start+len-winLenRem
//        cb

//      aabc
//      cbaa   
//     s[0] === s[3]   i=start=0  i=start+winLen-1=3       winLen=4   
//      baa              
//     s[0] === s[2]   i=start=0  i=start+winLen-1=2       winLen=3   
//       cba         
//     s[1] === s[3]   i=start=1  i=start+winLen-1=3       winLen=3   
//      aa       
//     s[0] === s[1]   i=start=0  i=start+winLen-1=1       winLen=2   
//       ba    
//     s[1] === s[2]   i=start=1  i=start+winLen-1=2       winLen=2   
//        cb
//     s[2] === s[3]   i=start=2  i=start+winLen-1=3       winLen=2   


// const s = "asdfasfwsdvewtrebv32wwdfevbwrwvsda"

// var longestPalindrome = function (s) {
//   let len = s.length;
//   while (len > 0) {
//     for (let i = 0; i < s.length - len + 1; i++) {


//       let str = s.slice(i, i + len);
//       if (isPalindrom(str))
//         return str;
//     }
//     len--;
//   }
//   return "";
// };

// const isPalindrom = function (arr) {
//   console.log('arr', arr)
//   let i = 0;
//   let j = arr.length - 1;
//   while (i <= j) {
//     if (arr[i] !== arr[j])
//       return false;
//     i++; j--;
//   }
//   return true;
// }

// console.log('longestPalindrome(s)', longestPalindrome(s))



// Output: [1,2,2,3,5,6]

//            i
// nums1 = [1,2,3,0,0,0] 
// 
//            i   j
// nums1 = [1,2,3,2,5,6] 
//              i 
// nums1 = [1,2,2,3,5,6] 
//                j

//          i   
// nums1 = [1,2,5,1,3,4] 
//                j
//                  i   
// nums1 = [1,1,2,3,5,1]     increment i, dont inc j until either i === j or 
//                  j

//            i 
// nums1 = [1,2,5,1,3,4] 
//                j

//              i 
// nums1 = [1,1,5,2,3,4] 
//                j

//                i 
// nums1 = [1,1,2,5,3,4] 
//                  j


//            i   
// nums1 = [1,2,5,1,1,1] 
//                j
//                  i   
// nums1 = [1,1,2,3,5,1]     increment i, dont inc j until either i === j or 
//                  j

//            i 
// nums1 = [1,2,5,1,3,4] 
//                j

//              i 
// nums1 = [1,1,5,2,3,4] 
//                j

//                i 
// nums1 = [1,1,2,5,3,4] 
//                  j



//          j
// nums2 = [2,5,6]

//  i=0
//  j=0
// const nums1 = [1,5,9,0,0,0,0]
// const nums2 = [2,3,4,5]
// const n = nums2.length
// const m = nums1.length - n


// var merge = function (nums1, m, nums2, n) {

// const result = []

//   let i = 0
//   let j = 0
//   while (i < m && j < n && nums1[i] !== undefined && nums2[j] !== undefined) {
//     if (nums1[i] < nums2[j]) {
//       result.push(nums1[i])
//       i++
//     } else {
//       result.push(nums2[j])
//       j++
//     }

//   }

//     while (i < m) {
//       result.push(nums1[i])
//       i++
//     }

//     while (j < n ) {
//       result.push(nums2[j])
//       j++
//     }

//     for (let i = 0; i< nums1.length; i++) {
//       nums1[i] = result[i]
//     }

//   return nums1


// };

// console.log('merge(nums1, m, nums2, n)', merge(nums1, m, nums2, n))




//     c1 
//     1->  2->  4
//                           c1 > c2 ?  no, so 

//     c2 
//     1->  3->  4




//     c1 
//     1->  2->  4


//     c2 
//     1->  3->  4




//     c1 
//     1->  2->  4


//     c2 
//     1->  3->  4




//     c1 
//     1->  2->  4


//     c2 
//     1->  3->  4

//     c1 <= c2    yes, so 



// var mergeTwoLists = function(l1, l2) {



// };





// const SLL = new SinglyLinkedList();
// SLL.push(0)
// SLL.push(1)
// SLL.push(2)
// // SLL.push(3)
// // SLL.push(4)
// // SLL.push(5)

// // console.log('SLL', SLL)

// // const third = SLL.get(2)
// // console.log('third', third)

// // SLL.set(1,100)
// // console.log('SLL', SLL)


// // SLL.insert(0,999)
// // console.log('SLL', SLL)



// // SLL.delete(1)
// // console.log('SLL.delete(2)', SLL.delete(2))
// // console.log('SLL', SLL)

// SLL.reverse()

// SLL.print()



// 1



// 11

// 2



// 111
// 21

// 12




// 1111
// 211
// 121

// 112
// 22



// 11111
// 2111
// 1211
// 1121
// 1112
// 221

// 212
// 122



// 111111
// 21111
// 12111
// 11211
// 11121
// 11112

// 2211
// 2121
// 2112
// 1221
// 1212
// 1122
// 222 







// const n = 6;

// var climbStairs = function (n) {


//   if (n <= 3) return n;


//   let i = 4;
//   let result;
//   let prev1 = 3
//   let prev2 = 2
//   while (i <= n) {

//     result = prev2 + prev1

//     prev2 = prev1;
//     prev1 = result;
//     i++;
//   }

//   return result

//   // return climbStairs(n-2) + climbStairs(n-1)
// };

// console.log('climbStairs(n)', climbStairs(n))






// const prices = [10, 3, 8, 2, 3,1,100]

// var maxProfit = function (prices) {

//   if (prices.length === 0) return 0;
//   let min = Infinity;
//   let max = -Infinity;
//   let maxProfit = -Infinity;

//   for (let i = 0; i < prices.length; i++) {

//     if (prices[i] < min) {
//       min = prices[i];
//       max = -Infinity;
//     }

//     if (prices[i] > max) {
//       max = prices[i];
//     }

//     if (max - min > maxProfit) {
//       maxProfit = max - min;
//     }

//   }

//   return maxProfit;

// };

// console.log('maxProfit(prices)', maxProfit(prices))






// const nums = [10, -2, 4, -3, -1, 4]


// // const nums = [-2, -1]

// var maxSubArray = function (nums) {

//   if (nums.length === 1) return nums[0];
//   let maxSum = nums[0];
//   let maxEndingHere = nums[0]
//   for (let i = 1; i < nums.length; i++) {

//     maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
//     console.log('maxEndingHere', i, maxEndingHere)
//     if (maxEndingHere > maxSum) {
//       maxSum = maxEndingHere;
//     }
//   }
//   return maxSum
// };

// console.log('maxSubArray(nums)', maxSubArray(nums))








// const nums = [3, -20, 4, -3, 6, 1]

// var maxSubArray = function (nums) {

//   let maxSoFar = nums[0]
//   let maxEndingHere = nums[0]

//   for (let i = 1; i < nums.length; i++) {
//     maxEndingHere = Math.max(nums[i], nums[i] + maxEndingHere)
//     console.log('i', i)
//     console.log('maxEndingHere', maxEndingHere)
//     maxSoFar = Math.max(maxSoFar, maxEndingHere)
//     console.log('maxSoFar', maxSoFar)
//   };
//   return maxSoFar
// }

// console.log('maxSubArray(nums)', maxSubArray(nums))


// const nums = [1, 2, 3,4,5,6]

// var Solution = function (nums) {
//   const len = nums.length;
//   const original = nums;

//   this.shuffle = () => {
//     let rand; 
//     for (let i = len-1; i >= 0; i--) {
//       rand = Math.floor(Math.random() * nums.length);
//       let temp = nums[i];
//       nums[i] = nums[rand];
//       nums[rand] = temp;
//       console.log('nums', nums)

//     }
//     return nums;
//   }
//   this.reset = () => {
//     return this.original
//   }
// };

// const solution = new Solution(nums)
// console.log('solution', solution.shuffle())


// const n = 15;

// var fizzBuzz = function (n) {
//   const result = []
//   for (let i = 1; i <= n; i++) {
//     let item = ''
//     if (i % 3 === 0) item += 'Fizz'
//     if (i % 5 === 0) item += 'Buzz'
//     if (item.length === 0) item += '' + i
//     result.push(item)
//   }
//   return result
// };

// console.log('fizzBuzz(n)', fizzBuzz(n))






// const DLL = new DoublyLinkedList()

// DLL.push(0)
// DLL.push(1)
// DLL.push(2)
// DLL.push(3)
// DLL.push(4)
// DLL.push(5)
// DLL.pop()
// console.log('DLL', DLL)

// DLL.shift()
// console.log('DLL', DLL)


// DLL.unshift(0)
// console.log('DLL', DLL)





// console.log('DLL.get(1)', DLL.get(2))


// DLL.set(100,2)
// console.log('DLL.set(100,2)', DLL.set(2,100))




// DLL.insert(1,'something')

// console.log('DLL.insert(1,\'something\')', DLL.insert(1,'something'))

// DLL.remove(1)

// console.log('DLL', DLL)

// const stack = new Stack();

// stack.push(1)
// stack.push(2)
// stack.push(3)


// // stack.pop()
// // stack.pop()

// console.log('stack', stack)



// const queue = new Queue();


// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)

// queue.dequeue()
// queue.dequeue()




// console.log('queue', queue)




// const BST = new BinarySearchTree();


// BST.insert(2)
// BST.insert(3)
// BST.insert(1)
// BST.insert(4)

// BST.find(1)

// console.log('BST.find(1)', BST.find(1))

// console.log('BST.BFS()', BST.BFS())

// BST.DFS_Pre()

// console.log('BST.DFS_Pre()', BST.DFS_Pre())
// console.log('BST.DFS_Post()', BST.DFS_Post())
// console.log('BST.DFS_InOrder()', BST.DFS_InOrder())
// console.log('BST', BST)




// const MBH = new MaxBinaryHeap();

// MBH.insert(10);
// MBH.insert(20); 
// MBH.insert(30);
// MBH.insert(40);
// MBH.insert(50);
// console.log('MBH', MBH)

// console.log('MBH.extractMax()', MBH.extractMax())
// console.log('MBH', MBH)


// let ER = new PriorityQueue();

// ER.enqueue("common cold", 5)
// ER.enqueue("gunshot wound", 1)
// ER.enqueue("high fever", 4)
// ER.enqueue("broken arm", 2)
// ER.enqueue("glass in foot", 3)

// ER.dequeue();

// console.log('ER', ER)

// const HT = new HashTable(3);

// HT.set('honda','civic');
// HT.set('toyota','camry');
// HT.set('ford','f150');
// HT.set('ferrari','f150');

// console.log('HT', HT)

// // HT.get('toyota');
// // console.log('HT.get(\'toyota\')', HT.get('toyota'))
// // console.log('HT.get(\'doesntexist\')', HT.get('doesntexist'))

// HT.values()

// // console.log('HT.values()', HT.values())

// HT.keys()

// console.log('HT.keys()', HT.keys())


// remove duplicate values in a string

// const str = 'google';

// function removeDups(str) {
//     const map = new Map();
//     let newStr = '';
//     for (let char of str) {
//         if (!map.has(char)) {
//             map.set(char);
//             newStr += char;
//         } 
//     }
//     return newStr;

// }

// console.log('removeDups(str)', removeDups(str))





// const g = new Graph()

// g.addVertex('Dallas');
// g.addVertex('Tokyo');
// g.addVertex('Aspen');
// g.addVertex('NYC');

// g.addEdge('Dallas', 'Tokyo');
// g.addEdge('NYC', 'Tokyo');
// g.addEdge('NYC', 'Dallas');
// g.addEdge('NYC', 'Aspen');
// g.addEdge('Dallas', 'Aspen');

// console.log('g', g)


// // g.removeEdge('Tokyo', 'Dallas');

// // console.log('g', g)


// g.removeVertex('NYC')



// console.log('g', g)
// const g = new Graph()

// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")

// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B", "D")
// g.addEdge("C", "E")
// g.addEdge("D", "E")
// g.addEdge("D", "F")
// g.addEdge("E", "F")

// console.log('g', g)



// console.log('g.DFS_Recursive("A",true)', g.DFS_Recursive("A", true))


// console.log('==============================================')
// console.log('==============================================')
// console.log('g.DFS_Recursive("A",false)', g.DFS_Recursive("A", false))




// console.log('g.DFS_Iterative("A")', g.DFS_Iterative("A"))



// console.log('g.BFS("A")', g.BFS("A"))


// let graph = new WeightedGraph();


// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");

// graph.addEdge("A", "B", 4);
// graph.addEdge("A", "C", 2);
// graph.addEdge("B", "E", 3);
// graph.addEdge("C", "D", 2);
// graph.addEdge("C", "F", 4);
// graph.addEdge("D", "E", 3);
// graph.addEdge("D", "F", 1);
// graph.addEdge("E", "F", 1);

// console.log('graph.adjacencyList', graph.adjacencyList)

// console.log('graph.shortestPath("A","E")', graph.shortestPath("A", "E"))


// const fib = (n, memo = []) => {
//     if (memo[n] !== undefined) return memo[n];
//     if (n <= 2) return 1;
//     const result = fib(n - 1, memo) + fib(n - 2, memo);
//     memo[n] = result;
//     return result;
// }

// const num = 5
// console.log(`fib(${num})`, fib(num))

// const arr = [0, 0, 1, 1, 2, 2, 2, 2];
// const num = 4;

// function sortedFrequency(arr, num) {
//     const obj = {};
//     arr.forEach((val) => {
//         obj[val] = ++obj[val] || 1;
//     })
//     return obj[num] || -1;
// }
// console.log('sortedFrequency(arr,num)', sortedFrequency(arr, num))


// const denoms = [1, 5, 10, 25];
// const val = 5;

// function coinChange(denoms, val) {
//     let paths = 0;
//     let total = 0;
//     let candidate;
//     let coinCounts = {};
//     while (total !== val) {
//         candidate = denoms[1];
//         if (total + candidate === val) { 
//             total = total + candidate;
//             coinCounts[candidate] = coinCounts[candidate] + 1 || 1;
//             paths = paths + 1;
//         } else if (total + candidate < val) {
//             total = total + candidate;
//         }

//     }
// }

// console.log('coinChange(denoms, val)', coinChange(denoms, val))





// function waysToReturnMemoize(amount, denominations) {
//     // intialize an array of zeros with indices up to amount
//     var waysOfDoingNcents = [];
//     for (var i = 0; i <= amount; i++) {
//         waysOfDoingNcents[i] = 0;
//     }
//     // there is 1 way to renturn 0 cents
//     waysOfDoingNcents[0] = 1;

//     for (var j = 0; j < denominations.length; j++) {
//         // we can only start returning change with coins in our denominations
//         var coin = denominations[j];
//         console.log('coin', coin)

//         // we start bottom up, each time reducing change amout with curr coin.
//         for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
//             console.log('higherAmount', higherAmount)
//             var higherAmountRemainder = higherAmount - coin;
//             // ways to create change is equivalent to reducing the problem to a known problem
//             // and gaining all the ways to solve for smaller problems
//             waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
//             console.log('waysOfDoingNcents', waysOfDoingNcents)
//         }
//     }

//     return waysOfDoingNcents[amount];
// }

// var denominations = [1, 5, 10, 25];
// var amount = 6;
// // console.log(waysToReturnChange(denominations, denominations.length - 1, amount));
// console.log(waysToReturnMemoize(amount,denominations));



// const arr = [0, 1, 2];
// const num = 1;

// function sortedFrequency(arr, num) {
//     const endIndex = findEndIndex(arr, num);

//     console.log('endIndex', endIndex)

//     if (endIndex === -1) return -1;
//     const startIndex = findStartIndex(arr, num, endIndex);
//     console.log('startIndex', startIndex)

//     return (endIndex - startIndex) + 1;

// }

// const findEndIndex = (arr, num) => {
//     let end = arr.length;
//     let start = 0;
//     let mid = Math.floor((end - start) / 2);

//     while (true) {

//         if (mid === 0 && arr[mid] > num ||
//             mid === arr.length - 1 && arr[arr.length - 1] < num) {
//             return -1;
//         }

//         if (arr[mid] < num) {
//             start = mid;
//             mid = start + Math.floor((end - start) / 2);
//         } else if (arr[mid] > num) {
//             end = mid;
//             mid = start + Math.floor((end - start) / 2);
//         } else if (arr[mid] === num) {
//             if (arr[mid + 1] !== num) {
//                 break;
//             }
//             start = mid;
//             mid = start + Math.floor((end - start) / 2);
//         }


//     }
//     return mid;
// }

// const findStartIndex = (arr, num, endIndex) => {
//     let end = endIndex + 1;
//     let start = 0;
//     let mid = Math.floor((end - start) / 2);

//     while (true) {

//         if (arr[mid] < num) {
//             start = mid;
//             mid = start + Math.floor((end - start) / 2);
//         } else if (arr[mid] > num) {
//             end = mid;
//             mid = start + Math.floor((end - start) / 2);
//         } else if (arr[mid] === num) {
//             if (arr[mid - 1] !== num) {
//                 break;
//             }
//             end = mid;
//             mid = start + Math.floor((end - start) / 2);
//         }
//     }
//     return mid;
// }

// const findMiddle = (arr, start, end) => {

// }

// console.log('sortedFrequency(arr, num)', sortedFrequency(arr, num))





// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// const s1 = 'asdf'
// const s2 = 'aiuhi'

// function twoStrings(s1, s2) {    
//     const s1Len = s1.length;
//     const s2Len = s2.length;
//     const longest = Math.max(s1Len, s2Len);
//     const s1Map = new Map();
//     const s2Map = new Map();

//     let i = 0;
//     while (i < longest) {

//         if (s1[i]) s1Map.set(s1[i])
//         if (s2[i]) s2Map.set(s2[i])
//         // console.log('s1Map.has(s2[i])', s1Map.has(s2[i]))
//         // console.log('s2Map.has(s1[i])', s2Map.has(s1[i]))
//         if (s2Map.has(s1[i]) || s1Map.has(s2[i])) return 'YES';
//         i++;
//     }    

//     return 'NO'
// }

// console.log('twoStrings(s1, s2)', twoStrings(s1, s2))



// const s = 'ifailuhkqq'


// function sherlockAndAnagrams(s) {

//     let count = 0;
//     const { substrArr, substrObj } = allSubstrings(s);


//     for (let str of substrArr) {

//         let amount = substrObj[str]

//         if (amount > 1) {

//             let numOfWays = amount * (amount - 1) / 2
//             substrObj[str] = 0;
//             count = count + numOfWays
//         }

//     }

//     return count;

// }

// function allSubstrings(s) {

//     let substr
//     let substrArr = []
//     let substrObj = {}

//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length + 1; j++) {
//             substr = s.slice(i, j)
//             substr = sortedStr(substr)
//             substrArr.push(substr);
//             substrObj[substr] = ++substrObj[substr] || 1
//         }
//     }
//     substrArr = substrArr.sort()

//     return { substrArr, substrObj }

// }

// function sortedStr(s) {
//     return s.split('').sort().join('')
// }



// console.log('sherlockAndAnagrams(s)', sherlockAndAnagrams(s))







// const s = "ABABABAB"

// function alternatingCharacters(s) {
//     let deletions = 0;
//     for (let i = s.length - 1; i >= 0; i--) {
//         if (s[i-1] === s[i]) deletions++;
//     }
//     return deletions;
// }

// console.log('alternatingCharacters(s)', alternatingCharacters(s))




// const s = "aabbc"

// function isValid(s) {

//     const counts = {};

//     for (let char of s) {
//         counts[char] = counts[char] + 1 || 1;
//     }

//     // console.log('counts', counts)


//     const countsArr = Object.values(counts)
//     const sortedCounts = countsArr.sort((a, b) => a - b)
//     // console.log('sortedCounts', sortedCounts)

//     const len = sortedCounts.length;
//     const end = len - 1;

//     if (len === 1) return 'YES'

//     function containsASingleOne() {
//         if (sortedCounts[0] === 1) {
//             if (sortedCounts[1] === sortedCounts[end] ) {
//                 return true
//             }
//         }
//         return false
//     }


//     if (sortedCounts[0] === sortedCounts[end - 1] || containsASingleOne()) {
//         if (sortedCounts[end] <= sortedCounts[end - 1] + 1) {
//             return 'YES'
//         }
//     }

//     return 'NO'
// }

// console.log('isValid(s)', isValid(s))





// const arr = [1, 3, 3, 9, 27]
// const r = 3

// function countDoublets(arr, r) {

//     const counts = {}
//     const complements = {}
//     let curDivR
//     let cur
//     let total = 0
//     let addOn
//     for (let i = 0; i < arr.length; i++) {
//         cur = arr[i]
//         curDivR = cur / r;
//         counts[cur] = ++counts[cur] || 1

//         console.log('cur', cur, 'curDivR', curDivR, 'counts[curDivR]', counts[curDivR])
//         if (counts[curDivR]) {

//             addOn = complements[cur] === undefined
//                 ? counts[curDivR]
//                 : complements[cur] + counts[curDivR]

//             total += counts[curDivR]
//             complements[cur] = addOn
//         }
//         console.log('total', total)
//         console.log('counts', counts)
//         console.log('complements', complements)
//     }
//     return total
// }

// console.log('countDoublets(arr, r)', countDoublets(arr, r))




// const arr = [1237, 1237, 1237]
// // const arr = [1, 100, 10000, 100000, 1000000, 1000000000, 1000000000, 10000000, 100000, 100000000, 1000, 100000000, 1000, 1000, 10000000, 10000, 100, 1000, 1, 100, 100000, 1, 10000]
// const r = 1

// function countTriplets(arr, r) {

//     const counts = {}
//     const complements = {}
//     const triplements = {}
//     let curDivR
//     let cur
//     let totalComplements = 0
//     let totalTriplements = 0
//     let addOn
//     for (let i = 0; i < arr.length; i++) {
//         cur = arr[i]
//         curDivR = cur / r;
//         counts[cur] = ++counts[cur] || 1

//         // console.log('cur', cur, 'curDivR', curDivR, 'counts[curDivR]', counts[curDivR])
//         if (counts[curDivR]) {

//             addOn = complements[cur] === undefined
//                 ? counts[curDivR]
//                 : complements[cur] + counts[curDivR]

//             totalComplements += counts[curDivR]
//             complements[cur] = addOn
//         }


//         if (complements[curDivR]) {

//             addOn = triplements[cur] === undefined
//                 ? complements[curDivR]
//                 : triplements[cur] + complements[curDivR]


//             totalTriplements += complements[curDivR]
//             triplements[cur] = addOn
//             // triplements[cur] = complements[curDivR]
//         }





//         // console.log('totalComplements', totalComplements)
//         // console.log('counts', counts)
//         // console.log('complements', complements)
//         // console.log('triplements', triplements)
//     }
//     return totalTriplements;

// }

// console.log('countTriplets(arr, r)', countTriplets(arr, r))











// // const arr = [1,3,9]
// const arr = [1, 3, 9, 9, 27, 81]
// const r = 3

// function countTriplets(arr, r) {
//     if (arr.length < 3) return 0;

//     let singlesCounts = {}
//     let doublesCounts = {}
//     let tripletCount = 0;
//     let cur
//     let cur2
//     let cur3

//     for (let i = arr.length - 1; i >= 0; i--) {
//         cur = arr[i]
//         cur2 = cur * r
//         cur3 = cur2 * r

//         if (doublesCounts[[cur2, cur3].toString()]) {
//             tripletCount += doublesCounts[[cur2, cur3].toString()]
//         }

//         if (singlesCounts[cur2]) {
//             if (doublesCounts[[cur, cur2].toString()] === undefined) {
//                 doublesCounts[[cur, cur2].toString()] = singlesCounts[cur2]
//             } else {
//                 doublesCounts[[cur, cur2].toString()] += singlesCounts[cur2]
//             }

//         }
//         singlesCounts[cur] = ++singlesCounts[cur] || 1;
//         // console.log('doublesCounts', doublesCounts)
//         // console.log('singlesCounts', singlesCounts)
//         // console.log('tripletCount', tripletCount)
//     }
//     return tripletCount
// }

// console.log('countTriplets(arr, r)', countTriplets(arr, r))








// // Declare second integer, double, and String variables.
// // Read and save an integer, double, and String to your variables.
// var i2 = +(readLine());
// var d2 = +(readLine());
// var s2 = readLine();

// // Print the sum of both integer variables on a new line.
// console.log(i + i2);

// // Print the sum of the double variables on a new line.
// console.log((d + d2).toFixed(1));

// // Concatenate and print the String variables on a new line
// // The 's' variable above should be printed first.
// console.log(s + s2);







// console.log("What is your name?");
// process.stdin.once('data', (chunk) => {
//     let name = chunk.toString().trim();
//     console.log("Hello, " + name + "!");
//     process.exit();

// });


// const readline = require('readline');
// const readlineInterface = readline.createInterface(process.stdin, process.stdout);

// function ask(questionText) {
//   return new Promise((resolve, reject) => {
//     readlineInterface.question(questionText, resolve);

//   });
// }

// start();

// async function start() {
//   let name = await ask('What is your name? ');
//   let quest = await ask('What is your quest? ');
//   let color = await ask('What is your favorite color? ');
//   console.log('Hello ' + name + '! ' +
//     'Good luck with ' + quest + ', ' +
//     'and here is a ' + color + ' flower for you.');
//   process.exit();
// }





// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();
// });

// // Reads complete line from STDIN
// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

// function main() {
//     var i = 4
//     var d = 4.0
//     var s = "HackerRank "

//     // Declare second integer, double, and String variables.
//     // Read and save an integer, double, and String to your variables.
//     var i2 = +(readLine());
//     var d2 = +(readLine());
//     var s2 = readLine();

//     // Print the sum of both integer variables on a new line.
//     console.log(i + i2);

//     // Print the sum of the double variables on a new line.
//     console.log((d + d2).toFixed(1));

//     // Concatenate and print the String variables on a new line
//     // The 's' variable above should be printed first.
//     console.log(s + s2);

// }






// const prices = [1, 2, 3, 4]
// const k = 7

// function maximumToys(prices, k) {
//     let toyCount = 0;
//     let totalSpent = 0;
//     prices.sort((a, b) => a - b)
//     let i = 0
//     while (totalSpent < k && i < prices.length) {
//         totalSpent += prices[i]
//         if (totalSpent > k) break
//         toyCount++
//         i++
//     }
//     return toyCount
// }

// console.log('maximumToys(prices, k)', maximumToys(prices, k))










// const SLL = new SinglyLinkedList()

// SLL.push(1)
// SLL.push(2)
// SLL.push(3)

// // console.log('SLL', SLL)


// //                 1 --> 2 --> 3--> null
// //            p    c     n
// //        null <-- 1     2 --> 3--> null
// //                pc     n
// //        null <-- 1     2 --> 3--> null
// //                p     cn
// //        null <-- 1     2 --> 3--> null
// //                 p     c     n
// //        null <-- 1 <-- 2     3--> null
// //                 p     c     n
// //        null <-- 1 <-- 2     3--> null
// //                      pc     n
// //        null <-- 1 <-- 2     3--> null
// //                      p     cn
// //        null <-- 1 <-- 2     3--> null
// //                       p     c      n

// //        null <-- 1 <-- 2 <-- 3 
// const reverseLinkedList = (SLL) => {

//     let prev = null;
//     let cur = SLL.head;
//     let next;

//     while (cur) {

//         next = cur.next
//         cur.next = prev;
//         prev = cur
//         cur = next

//     }

//     SLL.head = prev
//     return SLL.head
// }

// console.log('reverseLinkedList(SLL)', reverseLinkedList(SLL))



// const str = 'aabbcdd'

// function firstNonRepeatingCharacter(str) {
//     const counts = {}
//     for (const char of str) {
//         counts[char] = ++counts[char] || 1;
//     }
//     console.log('counts', counts)
//     for ( const char of str) {
//         if (counts[char] === 1) return char
//     }
//     return '_'
// }


// console.log('firstNonRepeatingCharacter(str)', firstNonRepeatingCharacter(str))

// const str = 'abc'

// function reverString2(str) {
//     let temp
//     let upper = str.length - 1
//     let lower = 0
//     while (lower <= upper) {
//         console.log('upper', upper)
//         temp = str[upper]
//         console.log('str[upper]', str[upper])
//         str[upper] = str[lower]
//         str[lower] = temp
//         upper--
//         lower++
//     }
//     console.log('str', str)

// }



// console.log('reverString2(str)', reverString2(str))




// const str = 'aabbbc'

// function maxRecurringChar(str) {
//     const counts = {}
//     let maxRecurring = {
//         letter: undefined,
//         count: 0
//     }
//     for (const char of str) {
//         counts[char] = ++counts[char] || 1;
//         if (counts[char] > maxRecurring.count) {
//             maxRecurring.count = counts[char]
//             maxRecurring.letter = char
//         }
//     }
//     return maxRecurring.letter
// }
// console.log('maxRecurringChar(str)', maxRecurringChar(str))



// const arr = [1, 2, 3, 2, 3]

// const firstDup = (arr) => {

//     const counts = {};
//     let num;
//     let dup = 'no dups'

//     for (let i = arr.length - 1; i >= 0; i--) {
//         num = arr[i];
//         counts[num] = ++counts[num] || 1;
//         if (counts[num] > 1) {
//             dup = num;
//         }
//     }
//     return dup;
// }
// console.log('firstDup(arr)', firstDup(arr))







// const arr = [-6, -4, 1, 2, 3, 5];

// function sortedSquaredArr(arr) {
//     let result = new Array(arr.length).fill(0)
//     let leftPtr = 0;
//     let rightPtr = arr.length - 1;
//     let left 
//     let right 
//     for (let i = result.length - 1; i >= 0; i--) {
//         left = arr[leftPtr]
//         right = arr[rightPtr]
//         if ((left * left) > (right * right)) {
//             result[i] = left * left
//             leftPtr++
//         } else {
//             result[i] = right * right
//             rightPtr--
//         }
//         console.log('result', result)

//     }


//     return result
// }
// console.log('sortedSquaredArr(arr)', sortedSquaredArr(arr))





// const n = 3

// function hanoi(n, start, end) {
//     if (n === 1) {
//         printMove(start, end)
//     } else {
//         const other = 6 - (start + end);
//         hanoi(n - 1, start, other);
//         printMove(start, end)
//         hanoi(n - 1, other, end);
//     }


// }

// function printMove(start, end) {
//     console.log(`move ${start} to ${end}`)
// }

// console.log('hanoi(n,1,3)', hanoi(n, 1, 3))


// const n = 3

// const rods = {
//     1: [...new Array(n).fill(0).map((_, i) => (n - i))],
//     2: [],
//     3: [],
// }

// console.log('rods', rods)

// function hanoi(n, start, end) {
//     if (n === 1) {
//         makeMove(start, end)
//     } else {
//         const other = 6 - (start + end);
//         hanoi(n - 1, start, other);
//         makeMove(start, end)
//         hanoi(n - 1, other, end);
//     }

// }

// function makeMove(start, end) {
//     rods[end].push(rods[start].pop(1))
//     console.log('rods', rods)

//     printMove(start, end)
// }

// function printMove(start, end) {
//     console.log(`move from ${start} to ${end}`)
// }

// console.log('hanoi(n,1,3)', hanoi(n, 1, 3))

// const strArr = ["2, 5, 7, 10, 11, 12", "2, 7, 8, 9, 10, 11, 15"]

// function FindIntersection(strArr) {
//     let result = false
//     const arr1 = strArr[0].split(',').map(val=>val.trim());
//     const arr2 = strArr[1].split(',').map(val=>val.trim());
//     let ptr1 = 0
//     let ptr2 = 0
//     while (ptr1 < arr1.length && ptr2 < arr2.length) {
//         if (arr1[ptr1] === arr2[ptr2]) {
//             if (result === false) {
//                 result = arr1[ptr1];
//             } else {
//                 result += ',' + arr1[ptr1];
//             }
//             ptr1++;
//             ptr2++;
//         } else if (+arr1[ptr1] < +arr2[ptr2]) {
//             ptr1++;
//         } else if (+arr1[ptr1] > +arr2[ptr2]) {
//             ptr2++;
//         }
//     }
//     return result;
// }

// console.log('FindIntersection(strArr)', FindIntersection(strArr))


// const sen = "asdf asdf asdfasdfasdf asdf 03943948039840983098408902340289380489243";

// function LongestWord(sen) {

//     let wordArr = sen.split(' ')
//     let longestWord = ''
//     for (let word of wordArr) {
//         if (isWord(word) && word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord

// }

// function isWord(word) {

//     let charCode
//     for (let i = 0; i < word.length; i++) {
//         charCode = word.charCodeAt(i)
//         if (!((charCode >= 65 && charCode <= 122) || (charCode >= 48 && charCode <= 57))) {
//             return false;
//         }
//     }
//     return true
// }

// console.log('LongestWord(sen)', LongestWord(sen))


// const str = "ab";

// function FirstReverse(str) { 
//     let reversed = ''
//     for ( let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }

//     return  reversed

// }

// const FirstReverse = ([head, ...tail]) => {
//     console.log('head', head)
//     console.log('...tail', ...tail)

//     return tail.length === 0
//         ? [head]
//         : [...FirstReverse(tail), head];
// }



// console.log('FirstReverse(str)', FirstReverse(str))



// const num = 18;

// function FirstFactorial(num) { 

//     let result = 1

//     for (let i = num; i >0;i--) {
//         result *= i
//     }


//     return result; 

// }


// console.log('FirstFactorial(num)', FirstFactorial(num))



// const str = ")()"


// function BracketMatcher(str) {
//     str = str.split('')
//     let stack = []
//     for (let char of str) {
//         if (char === ')') {
//             if (stack.pop() !== '(') {
//                 return 0
//             }
//         }
//         if (char === '(') {
//             stack.push('(')
//         }
//     }

//     if (stack.length > 0) return 0;
//     return 1

// }

// console.log('BracketMatcher(str)', BracketMatcher(str))




// const strArr = ["caae", "cae"]

// function MinWindowSubstring(strArr) {

//     let str = strArr[0];
//     let neededChars = strArr[1];
//     const hash = {}

//     for (let char of neededChars) {
//         hash[char] = ++hash[char] || 1
//     }

//     let windowLen = neededChars.length;

//     while (windowLen <= str.length) {
//         let winStart = 0;
//         let winEnd = winStart + windowLen;
//         while (winEnd <= str.length) {
//             let candidate = str.substr(winStart, windowLen)
//             // console.log('str.substr(winStart,windowLen)', str.substr(winStart, windowLen))
//             if (isMatch(candidate, hash)) return candidate;
//             winStart++;
//             winEnd++;
//         }
//         windowLen++
//     }
//     return
// }


// function isMatch(candidate, hash) {
//     const clonedHash = JSON.parse(JSON.stringify(hash))
//     for (let char of candidate) {
//         if (clonedHash[char] > 0) --clonedHash[char]
//         if (clonedHash[char] === 0) delete clonedHash[char]
//     }
//     if (Object.keys(clonedHash).length !== 0) return false
//     return true
// }

// console.log('MinWindowSubstring(strArr)', MinWindowSubstring(strArr))



// const adjacencyList = { 'a': ['d', 'b', 'c'], 'b': ['a'], 'c': ['a', 'd'], 'd': ['c', 'a'] }
// console.log('adjacencyList', adjacencyList)

// const start = 'a'

// function BFS(adjacencyList, start) {

//     const result = []
//     const visited = {}
//     visited[start] = true;
//     const queue = [start];
//     let curVertex;

//         while (queue.length > 0) {

//         curVertex = queue.shift()
//         result.push(curVertex)

//         for (let neighbor of adjacencyList[curVertex]) {
//             if (!visited[neighbor]) {
//                 visited[neighbor] = true
//                 queue.push(neighbor);
//             }
//         }
//         console.log('visited', visited)

//     }

//     return result

// }


// console.log('BFS(adjacencyList, start)', BFS(adjacencyList, start))


// const strArr = ["(2,5)", "(2,6)"]

// function TreeConstructor(strArr) { 
//     const childCounts = {}
//     const parentCounts = {}
//     for (let node of strArr) {
//         node = node.substr(1,node.length-2).split(',')
//         childCounts[node[1]] = ++childCounts[node[1]] || 1;
//         parentCounts[node[0]] = ++parentCounts[node[0]] || 1;
//         if (childCounts[node[1]] > 2) return false
//         if (parentCounts[node[0]] > 1) return false
//     }


//     return true

// }

// console.log('TreeConstructor(strArr)', TreeConstructor(strArr))

// // const str = "acc?7??sss?3rr1??????5"
// const str = "ac3???7"

// function QuestionsMarks(str) {
//     const complements = {}
//     let filteredStr = ''
//     let nums = []
//     let j = 0
//     let matchCount = 0
//     for (let i = 0; i < str.length; i++) {
//         if (isNumber(str[i])) {
//             nums.push({ val: str[i], index: j })
//             filteredStr += str[i];
//             j++
//         }
//         if (str[i] === '?') {
//             filteredStr += str[i];
//             j++
//         }
//     }
//     // console.log('filteredStr', filteredStr)
//     // console.log('nums', nums)
//     for (let i = 0; i < nums.length - 1; i++) {
//         // console.log('i', i)
//         if (+nums[i].val + +nums[i + 1].val === 10) {
//             // complements[nums[i].val] = `???${10 - +nums[i].val}`

//             if (nums[i].index + 4 >= filteredStr.length ) {
//                 // console.log('too far')
//             }
//             let candidate = filteredStr.substr(nums[i].index +1, 4);
//             // console.log('candidate', candidate)
//             if (candidate !== `???${10 - +nums[i].val}`) {
//                 return false
//             } else if (candidate === `???${10 - +nums[i].val}`) {
//                 matchCount += 1
//             }
//         }
//     }

//     if (matchCount === 0) return false

//     return true

// }



// function isNumber(char) {
//     return (char.charCodeAt() >= 48 && char.charCodeAt() <= 57)
// }

// console.log('QuestionsMarks(str)', QuestionsMarks(str))


// const str = "_df34f"

// function CodelandUsernameValidation(str) {


//     if (str.length < 4 || str.length > 25) {
//         return false
//     }

//     if (!isLetter(str[0])) {
//         return false
//     }

//     if (isUnderscore(str[str.length-1])) {
//         return false;
//     }

//     for (let i = 1; i < str.length; i++) {
//         if (!(isLetter(str[i]) || isNumber(str[i]) || isUnderscore(str[i]))) {
//             return false;
//         }
//     }



//     return true;

// }

// function isNumber(char) {
//     let charCode = char.charCodeAt()
//     if ((charCode >= 48 && charCode <= 57)) {
//         return true
//     }
//     return false
// }

// function isLetter(char) {
//     let charCode = char.toLowerCase().charCodeAt()
//     if ((charCode >= 97 && charCode <= 122)) return true
//     return false
// }

// function isUnderscore(char) {
//     if (char === '_') return true
//     return false
// }


// console.log('CodelandUsernameValidation(str)', CodelandUsernameValidation(str))









// const queries = [[1, 3], [1, 3], [1, 3], [1, 3], [3, 1]]


// const freqQuery = queries => {
//     const result = [];
//     const hash = {};
//     const freq = [];

//     for (let i = 0; i < queries.length; i += 1) {
//         const [action, value] = queries[i];
//         const initValue = hash[value] || 0;
//         console.log('[action, value]', [action, value])
//         console.log('initValue', initValue)
//         console.log('hash', hash)

//         if (action === 1) {
//             hash[value] = initValue + 1;

//             freq[initValue] = (freq[initValue] || 0) - 1;
//             freq[initValue + 1] = (freq[initValue + 1] || 0) + 1;
//         }

//         if (action === 2 && initValue > 0) {
//             hash[value] = initValue - 1;

//             freq[initValue - 1] += 1;
//             freq[initValue] -= 1;
//         }

//         if (action === 3) result.push(freq[value] > 0 ? 1 : 0);

//         console.log('hash', hash)
//         console.log('freq', freq)
//     }

//     return result;
// };

// function freqQuery(queries) {

//     const counts = {}
//     const freqsCounts = {}
//     const freqs = []
//     let type, val, freq
//     for (let query of queries) {

//         type = query[0]
//         val = query[1]

//         if (type === 1) {

//             counts[val] = ++counts[val] || 1;
//             let freq = counts[val]

//             freqsCounts[freq] = ++freqsCounts[freq] || 1;
//             freqsCounts[freq - 1] = --freqsCounts[freq - 1] || 0;

//         }

//         if (type === 2) {
//             counts[val] = Math.max(--counts[val], 0)
//             let freq = counts[val]
//             freqsCounts[freq] = ++freqsCounts[freq] || 1;
//             freqsCounts[freq + 1] = Math.max(--freqsCounts[freq + 1], 0)



//         }

//         if (type === 3) {
//             if (freqsCounts[val] > 0) {
//                 freqs.push(1)
//             } else {
//                 freqs.push(0)
//             }
//         }
//         // console.log('freqsCounts', freqsCounts)

//     }
//     // console.log('counts', counts)
//     // console.log('freqsCounts', freqsCounts)
//     // console.log('freqs', freqs)


//     return freqs;

// }

// console.log('freqQuery(queries)', freqQuery(queries))

// // const q = [1, 2, 5, 3, 7, 8, 6, 4]
// //         1  2  3  4  5  6  7  8
// // const q = [1,2,5,3,4,7,8,6]
// // const q = [2,5,1,3,4]
// const q = [2, 1, 5, 3, 4]
// // const q = [2, 1, 5, 6, 3, 4, 9, 8, 11, 7, 10, 14, 13, 12, 17, 16, 15, 19, 18, 22, 20, 24, 23, 21, 27, 28, 25, 26, 30, 29, 33, 32, 31, 35, 36, 34, 39, 38, 37, 42, 40, 44, 41, 43, 47, 46, 48, 45, 50, 52, 49, 51, 54, 56, 55, 53, 59, 58, 57, 61, 63, 60, 65, 64, 67, 68, 62, 69, 66, 72, 70, 74, 73, 71, 77, 75, 79, 78, 81, 82, 80, 76, 85, 84, 83, 86, 89, 90, 88, 87, 92, 91, 95, 94, 93, 98, 97, 100, 96, 102, 99, 104, 101, 105, 103, 108, 106, 109, 107, 112, 111, 110, 113, 116, 114, 118, 119, 117, 115, 122, 121, 120, 124, 123, 127, 125, 126, 130, 129, 128, 131, 133, 135, 136, 132, 134, 139, 140, 138, 137, 143, 141, 144, 146, 145, 142, 148, 150, 147, 149, 153, 152, 155, 151, 157, 154, 158, 159, 156, 161, 160, 164, 165, 163, 167, 166, 162, 170, 171, 172, 168, 169, 175, 173, 174, 177, 176, 180, 181, 178, 179, 183, 182, 184, 187, 188, 185, 190, 189, 186, 191, 194, 192, 196, 197, 195, 199, 193, 198, 202, 200, 204, 205, 203, 207, 206, 201, 210, 209, 211, 208, 214, 215, 216, 212, 218, 217, 220, 213, 222, 219, 224, 221, 223, 227, 226, 225, 230, 231, 229, 228, 234, 235, 233, 237, 232, 239, 236, 241, 238, 240, 243, 242, 246, 245, 248, 249, 250, 247, 244, 253, 252, 251, 256, 255, 258, 254, 257, 259, 261, 262, 263, 265, 264, 260, 268, 266, 267, 271, 270, 273, 269, 274, 272, 275, 278, 276, 279, 277, 282, 283, 280, 281, 286, 284, 288, 287, 290, 289, 285, 293, 291, 292, 296, 294, 298, 297, 299, 295, 302, 301, 304, 303, 306, 300, 305, 309, 308, 307, 312, 311, 314, 315, 313, 310, 316, 319, 318, 321, 320, 317, 324, 325, 322, 323, 328, 327, 330, 326, 332, 331, 329, 335, 334, 333, 336, 338, 337, 341, 340, 339, 344, 343, 342, 347, 345, 349, 346, 351, 350, 348, 353, 355, 352, 357, 358, 354, 356, 359, 361, 360, 364, 362, 366, 365, 363, 368, 370, 367, 371, 372, 369, 374, 373, 376, 375, 378, 379, 377, 382, 381, 383, 380, 386, 387, 384, 385, 390, 388, 392, 391, 389, 393, 396, 397, 394, 398, 395, 401, 400, 403, 402, 399, 405, 407, 406, 409, 408, 411, 410, 404, 413, 412, 415, 417, 416, 414, 420, 419, 422, 421, 418, 424, 426, 423, 425, 428, 427, 431, 430, 429, 434, 435, 436, 437, 432, 433, 440, 438, 439, 443, 441, 445, 442, 447, 444, 448, 446, 449, 452, 451, 450, 455, 453, 454, 457, 456, 460, 459, 458, 463, 462, 464, 461, 467, 465, 466, 470, 469, 472, 468, 474, 471, 475, 473, 477, 476, 480, 479, 478, 483, 482, 485, 481, 487, 484, 489, 490, 491, 488, 492, 486, 494, 495, 496, 498, 493, 500, 499, 497, 502, 504, 501, 503, 507, 506, 505, 509, 511, 508, 513, 510, 512, 514, 516, 518, 519, 515, 521, 522, 520, 524, 517, 523, 525, 526, 529, 527, 531, 528, 533, 532, 534, 530, 537, 536, 539, 535, 541, 538, 540, 543, 544, 542, 547, 548, 545, 549, 546, 552, 550, 551, 554, 553, 557, 555, 556, 560, 559, 558, 563, 562, 564, 561, 567, 568, 566, 565, 569, 572, 571, 570, 575, 574, 577, 576, 579, 573, 580, 578, 583, 581, 584, 582, 587, 586, 585, 590, 589, 588, 593, 594, 592, 595, 591, 598, 599, 596, 597, 602, 603, 604, 605, 600, 601, 608, 609, 607, 611, 612, 606, 610, 615, 616, 614, 613, 619, 618, 617, 622, 620, 624, 621, 626, 625, 623, 628, 627, 631, 630, 633, 629, 635, 632, 637, 636, 634, 638, 640, 642, 639, 641, 645, 644, 647, 643, 646, 650, 648, 652, 653, 654, 649, 651, 656, 658, 657, 655, 661, 659, 660, 663, 664, 666, 662, 668, 667, 670, 665, 671, 673, 669, 672, 676, 677, 674, 679, 675, 680, 678, 681, 684, 682, 686, 685, 683, 689, 690, 688, 687, 693, 692, 691, 696, 695, 698, 694, 700, 701, 702, 697, 704, 699, 706, 703, 705, 709, 707, 711, 712, 710, 708, 713, 716, 715, 714, 718, 720, 721, 719, 723, 717, 722, 726, 725, 724, 729, 728, 727, 730, 733, 732, 735, 734, 736, 731, 738, 737, 741, 739, 740, 744, 743, 742, 747, 746, 745, 750, 748, 752, 749, 753, 751, 756, 754, 758, 755, 757, 761, 760, 759, 764, 763, 762, 767, 765, 768, 766, 771, 770, 769, 774, 773, 776, 772, 778, 777, 779, 775, 781, 780, 783, 784, 782, 786, 788, 789, 787, 790, 785, 793, 791, 792, 796, 795, 794, 798, 797, 801, 799, 803, 800, 805, 802, 804, 808, 806, 807, 811, 809, 810, 814, 812, 813, 817, 816, 819, 818, 815, 820, 821, 823, 822, 824, 826, 827, 825, 828, 831, 829, 830, 834, 833, 836, 832, 837, 839, 838, 841, 835, 840, 844, 842, 846, 845, 843, 849, 847, 851, 850, 852, 848, 855, 854, 853, 857, 856, 858, 861, 862, 860, 859, 863, 866, 865, 864, 867, 870, 869, 868, 872, 874, 875, 871, 873, 877, 878, 876, 880, 881, 879, 884, 883, 885, 882, 888, 886, 890, 891, 889, 893, 887, 895, 892, 896, 898, 894, 899, 897, 902, 901, 903, 905, 900, 904, 908, 907, 910, 909, 906, 912, 911, 915, 913, 916, 918, 914, 919, 921, 917, 923, 920, 924, 922, 927, 925, 929, 928, 926, 932, 931, 934, 930, 933, 935, 937, 939, 940, 938, 936, 943, 944, 942, 941, 947, 946, 948, 945, 951, 950, 949, 953, 952, 956, 954, 958, 957, 955, 961, 962, 963, 959, 964, 966, 960, 965, 969, 968, 971, 967, 970, 974, 972, 976, 973, 975, 979, 977, 981, 982, 978, 980, 983, 986, 984, 985, 989, 988, 987, 990, 993, 991, 995, 994, 997, 992, 999, 1000, 996, 998]

// function minimumBribes(q) {
//     let moves = 0;
//     for (let i = q.length - 1; i >= 0; i--) {
//         let index = i + 1;
//         if (q[i] !== index) {
//             if (q[i - 1] === index) {
//                 moves += 1;
//                 rewind(i, 1)
//             } else if (q[i - 2] === index) {
//                 moves += 2;
//                 rewind(i, 2)
//             } else {
//                 console.log('Too chaotic')
//                 return
//             }
//         }
//     }

//     console.log(moves)
//     // return moves

//     function rewind(i, num) {
//         let temp = q[i - num];
//         q[i - num] = q[i - (num - 1)];
//         q[i - (num - 1)] = q[i];
//         q[i] = temp;
//     }

// }




// console.log('minimumBribes(q)', minimumBribes(q))




// // const magazine = 'two times three is not four'
// // const note = 'two times two is four'
// const magazine = 'give me one grand today night'
// const note = 'give one grand today'
// function checkMagazine(magazine, note) {



//     const splitMagazine = magazine;
//     const splitNote = note;
//     // const splitMagazine = magazine.split(' ');
//     // const splitNote = note.split(' ');
//     // 'heres some example inputs: *shows strings*
//     // 'heres what actual inputs are: *array of strings*
//     // ... 
//     const magazineCounts = {}
//     const noteCounts = {}
//     for (let word of splitMagazine) {
//         magazineCounts[word] = (magazineCounts[word] || 0) + 1;
//     }
//     for (let word of splitNote) {
//         noteCounts[word] = (noteCounts[word] || 0) + 1;
//     }

//     for (let word in noteCounts) {
//         if (!(magazineCounts[word] >= noteCounts[word])) {
//             console.log('No')
//             return
//         }
//     }

//     console.log('Yes')

// }



// console.log('checkMagazine(magazine, note)', checkMagazine(magazine, note))



// const arr = [[1, 2, 5],
//              [3, 1, 2],
//              [8, 4, 2]]
// function diagonalDifference(arr) {
//     let primaryDiag = 0
//     let secondaryDiag = 0
//     let n = arr.length
//     let j = 0
//     let k = n - 1
//     for (let i = 0; i < arr.length; i++) {

//         primaryDiag += arr[i][j++]

//         secondaryDiag += arr[i][k--]

//     }

//     return Math.abs(primaryDiag - secondaryDiag)


// }

// console.log('diagonalDifference(arr)', diagonalDifference(arr))





// const a = [1,5,5]
// const b = [2,4,1]


// function compareTriplets(a, b) {
//     let aScore = 0
//     let bScore = 0

//     for (let i = 0; i < a.length; i++) {

//         if (a[i] > b[i]) {
//             aScore += 1
//         } else if (a[i] < b[i]) {
//             bScore += 1
//         } 

//     }

//     return [aScore, bScore]
// }

// console.log('compareTriplets(a, b)', compareTriplets(a, b))










// const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

// function aVeryBigSum(ar) {

//     let sum  = ar.reduce((acc, val) => acc + val)
//     return sum

// }

// console.log('aVeryBigSum(ar)', aVeryBigSum(ar))


// // const s = [[5, 4, 3], 
// //            [1, 5, 8], 
// //            [6, 4, 2]]
//      5 to 8     8 to 9  4 to 7
//  12    15        15      15     12     15
//  14    14        15      15     14     
//  12    12        12      15     12 
//  12    15        15      15     12 
//  13    13        13      13     13 
//  13    13        15      15     13 
//  12    15        15      15     12 
//  15    15        15      15     14 

// // 1 2
// // 1 1

// 3
// 2
// 2
// 3
// 2
// 3

// // 2 2 2
// // 2 1 2
// // 2 2 2



// const s = [[5, 4, 3], [1, 5, 8], [6, 4, 2]]

// function formingMagicSquare(s) {


// }

// console.log('formingMagicSquare(s)', formingMagicSquare(s))





// const str = 'abc'
// let k = 0
// function permute(str) {
//     if (str.length === 0) return '';
//     if (str.length === 1) return str;

//     let results = [];
//     for (let i = 0; i < str.length; i++) {
//         const currentChar = str[i];
//         console.log('currentChar', currentChar)
//         const remainingChars = str.slice(0, i) + str.slice(i + 1);
//         for (let j = 0; j < remainingChars.length; j++) {
//             console.log('i j', i, j)
//             console.log('remainingChars', remainingChars)
//             console.log('make recursive call')
//             results.push(currentChar + permute(remainingChars)[j])
//             console.log('results', results)
//         }
//     }
//     return results
// }



// console.log('permute(str)', permute(str))


// sum(3) = 3 + sum(2) 
//                3    =    2 + sum(1) 
//                                1


// const n = 3

// function sum(n) {
//     if (n === 1) return n
//     return n + sum(n-1)
// }
// console.log('sum(n)', sum(n))




// const n = 10
// const m = 2
// const mCoord = 0
// const nCoord = 0


// function travelBox(n, m) {

//     if (n === 1 || m === 1) return 1;

//     return travelBox(n, m - 1) + travelBox(n - 1, m)


// }

// console.log('travelBox(n, m)', travelBox(n, m))

// const nums = [1, 2, 3]

// function permute(nums) {
//     if (nums.length === 0) return
//     if (nums.length === 1) return [nums];
//     let result = []
//     for (let i = 0; i < nums.length; i++) {
//         const curNum = nums[i];
//         const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1))
//         const remainingNumsPermuted = permute(remainingNums)
//         for (let j = 0; j < remainingNumsPermuted.length; j++) {
//             const permutedArray = [curNum].concat(remainingNumsPermuted[j])
//             result.push(permutedArray)
//             console.log('result', result)
//         }
//     }
//     return result
// }

// console.log('permute(nums)', permute(nums))


// s = 1
// k = 1
// p = 9

// if n is 1 and k is 1 or more, 
//     replace with 9

// s = 12
// k = 1
// p = 22

// if flanks not equal
//     make them equal

// if n is 2 and k is 1 
//     if not a palindrome  
//         replace min digit with larger digit

// s = 123  323
// k = 1
// p = 323  393

// if flanks not equal 
//     make them equal
// if flanks are equal 
//     replace middle with 9

// if n is 3 and k is 1
//     if not palindrome
//         replace min flank digit with larger flank digit

//     if is palindrome 
//         replace middle digit with 9

// s = 123  129  323  919 
// k = 2
// p = 929  999  929  999 

// if flanks not equal
//     if one already a 9
//         replace other with 9 
//         replace middle with 9
//     if none already a 9
//         replace both with 9

// if n is 3 and k is 2
//     if not palindrome
//         if one of the flanks is not 9, 
//             replace non-9 flank with 9 
//             replace middle with 9
//         if no flanks are 9 
//             replace flanks with 9

// s = 1234 1224 4214 1238 1229 4114 9119
// k = 1
// p = 4234 4224 4224 8238 9229 4114 9119

// if flanks not equal
//     make equal
//     if next inner level flanks not equal    
//         not a palindrome
// if flanks equal
//     if next inner level flanks not equal
//         make equal

// if n is 4 and k is 1
//     if not palindrome
//         if flanks are 9


// s = 1234 1224 4214 1238 1229 4114 9119
// k = 2
// p = 4334 9229 4994 8338 9229 9119 9999

// if flanks not equal
//     make equal
//     if next inner level flanks not equal    
//         not a palindrome
// if flanks equal
//     if next inner level flanks not equal
//         make equal

// if n is 4 and k is 1
//     if not palindrome
//         if flanks are 9

// const s = '11331'
// // const s = '932239'
// const n = s.length;
// const k = 4;

// function highestValuePalindrome(s, n, k) {
//     if (k >= n) return new Array(n).fill(9).join('');

//     s = s.split('').map(item => +item)

//     let left;
//     let right;
//     if (n % 2 === 1) {
//         left = Math.floor(n / 2);
//         right = left;
//     } else {
//         left = Math.floor(n / 2) - 1;
//         right = Math.floor(n / 2);
//     }
//     // start in middle 
//     const start = left;

//     for (let i = start; i >= 0; i--) {
//         // go out from the middle to each ring
//         // i.e. from middle ring is i[middle-1] and i[middle]
//         // outward i[(middle - 1) - 1] and i[middle + 1]
//         // to i[0] and i[length -1]

//         // and check if they are dichotomous
//         // if they are not equal, 
//         // equalize
//         // decrement k
//         // and mark down that that index is nined
//         // if they are equal, 
//         // mark down if they're nined

//         if (k > 0) {
//             if (s[left] < s[right]) {
//                 s[left] = s[right];
//                 k--;
//             } else if (s[left] > s[right]) {
//                 s[right] = s[left];
//                 k--;
//             }
//         }

//         if (s[left] !== s[right]) return -1;

//         left--;
//         right++;
//     }

//     left = 0;
//     right = s.length - 1;

//     for (let i = 0; i <= start; i++) {
//         if (k > 0) {
//             if (k >= 2) {
//                 if (s[left] !== 9 && s[right] !== 9) {
//                     s[left] = 9;
//                     s[right] = 9;
//                     k = k - 2;
//                 }
//             } else if (k === 1) {
//                 if (s[left] === 9 && s[right] !== 9)  {
//                     s[right] = 9;
//                     k--;
//                 } else if (s[left] !== 9 && s[right] === 9) {
//                     s[left] = 9;
//                     k--;
//                 } else if (left === start) {
//                     s[left] = 9;
//                     k--;
//                 }
//             }
//         } else {
//             return s.join('')
//         }

//         left++;
//         right--;
//     }

//     // keep going till get to i = 0
//     // when gets to i = 0, if still have k's left
//     // nine the outtermost rings, going inward and 
//     // nining till run out of k's


//     return s.join('')

// }


// console.log('highestValuePalindrome(s, n, k)', highestValuePalindrome(s, n, k))










// // const s = '11331' k=4
// // const s = '13331' k=3
// // const s = '93339' k=1
// // const s = '93339' k=1



// // const s = '11331' k=4
// // const s = '13331' k=3  nonNineReplacement
// // const s = '93339' k=1
// // const s = '93339' k=1


// // const s = '11331' k=3
// // const s = '13331' k=2  nonNineReplacement
// // const s = '93339' k=0
// // const s = '93339' k=0

// // const s = '932239'

// const s = '11331'
// // const s = '1234'
// const n = s.length;
// const k = 2;


// function highestValuePalindrome(s, n, k) {
//     if (k >= n) return new Array(n).fill(9).join('');

//     let nonNineReplacement = {}
//     s = s.split('').map(item => +item)
//     let left;
//     let right;

//     const isOdd = n % 2 === 1;
//     if (isOdd) {
//         left = Math.floor(n / 2);
//         right = left;
//     } else {
//         left = Math.floor(n / 2) - 1;
//         right = Math.floor(n / 2);
//     }
//     const start = left;

//     for (let i = start; i >= 0; i--) {


//         if (k > 0) {
//             if (s[left] < s[right]) {
//                 s[left] = s[right];
//                 if (s[left] !== 9 && s[right] !== 9) {
//                     nonNineReplacement[left] = true;
//                 }
//                 k--;
//             } else if (s[left] > s[right]) {
//                 s[right] = s[left];
//                 if (s[left] !== 9 && s[right] !== 9) {
//                     nonNineReplacement[left] = true;
//                 }
//                 k--;
//             }

//         }

//         if (s[left] !== s[right]) return -1;

//         left--;
//         right++;
//     }

//     left = 0;
//     right = s.length - 1;



//     for (let i = 0; i <= start; i++) {
//         if (k > 0) {

//             if (nonNineReplacement[left]) {
//                 s[left] = 9;
//                 s[right] = 9;
//                 k--;
//             }


//             if (k >= 2) {
//                 if (s[left] !== 9 && s[right] !== 9) {
//                     s[left] = 9;
//                     s[right] = 9;
//                     k = k - 2;
//                 }
//             } else if (k === 1) {
//                 if (s[left] === 9 && s[right] !== 9) {
//                     s[right] = 9;
//                     k--;
//                 } else if (s[left] !== 9 && s[right] === 9) {
//                     s[left] = 9;
//                     k--;
//                 } else if (left === start && isOdd === true) {
//                     s[left] = 9;
//                     k--;
//                 }
//             }
//         } else {
//             return s.join('')
//         }

//         left++;
//         right--;
//     }


//     return s.join('')

// }


// console.log('highestValuePalindrome(s, n, k)', highestValuePalindrome(s, n, k))

// const n = 6

// function staircase(n) {
//     let spaces = new Array(n).fill(' ').join('')
//     let hashtags = new Array(n).fill('#').join('')
//     let line;
//     for (let i = 1; i <= n; i++) {
//         line = spaces.substr(i) + hashtags.substr(n - i);
//         console.log(line)
//     }

// }
// console.log('staircase(n)', staircase(n))


// const candles = [1,1]

// function birthdayCakeCandles(candles) {

//     let counts = {}
//     let max = -Infinity;

//     for (let i = 0; i < candles.length; i++) {

//         counts[candles[i]] = ++counts[candles[i]] || 1;
//         if (candles[i] > max) {
//             max = candles[i]
//         }

//     }

//     return counts[max]
// }

// console.log('birthdayCakeCandles(candles)', birthdayCakeCandles(candles))


// const s = '04:40:22PM'

// function timeConversion(s) {
//     let result = s
//     let hour = s.substr(0, 2)
//     if (s[s.length - 2] === 'P') {
//         if (+hour < 12) {
//             hour = (12 + +hour).toString()
//         }
//         if (+hour === 12) {
//             hour = '12'
//         }
//         result = hour + s.substr(2, 6);
//     } else  {
//         if (hour === '12') {
//             hour = '00'
//         }
//         result = hour + s.substr(2, 6);
//     }

//     return result
// }

// console.log('timeConversion(s)', timeConversion(s))





// const s = 7
// const t = 10
// const a = 4
// const b = 12
// const apples = [-1, 5, 2]
// const oranges = [-3, 5, -4]


// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     let samsApples = 0
//     let samsOranges = 0
//     for (let apple of apples) {
//         if (onSamsHouse(a + apple)) {
//             samsApples++
//         }
//     }
//     for (let orange of oranges) {
//         if (onSamsHouse(b + orange)) {
//             samsOranges++
//         }
//     }
//     console.log(samsApples)
//     console.log(samsOranges)
//     function onSamsHouse(xVal) {
//         return (xVal >= s && xVal <= t)
//     }
// }

// console.log('countApplesAndOranges(s, t, a, b, apples, oranges)', countApplesAndOranges(s, t, a, b, apples, oranges))





// function organizingContainers(container) {


// }


// console.log('organizingContainers(container)', organizingContainers(container))





// const prices = [1, 2, 3, 2]
// //                +1 +1 -1

// const prices = [1, 3, 2, 4, 1]
// //                +2 -1 +2 -3 

// const prices = [1000000,1,10,1000,10,10,100]



// function stockmax(prices) {
//     let amount = 0
//     let diff
//     let localMax = -Infinity
//     let i = prices.length - 1;
//     while (i >= 0) {
//         if (prices[i] > localMax) {
//             localMax = prices[i]
//             if (prices[i - 1] <= prices[i]) {

//                 while (prices[i - 1] <= localMax) {
//                     diff = localMax - prices[i - 1]
//                     i--
//                     amount += diff
//                 }
//             } 
//             i--
//         } 

//     }
//     return amount

// }

// console.log('stockmax(prices)', stockmax(prices))





// let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];

// const word = 'zaba'

// function designerPdfViewer(h, word) {

//     const heights = {}

//     let maxHeight = -Infinity;
//     let width = word.length;

//     for (let i = 97; i < h.length + 97; i++) {
//         heights[String.fromCharCode(i)] = h[i - 97]
//     }

//     for (let char of word) {
//         if ( heights[char] > maxHeight) {
//             maxHeight = heights[char]
//         }
//     }

//     return maxHeight * width

// }

// console.log('designerPdfViewer(h, word)', designerPdfViewer(h, word))
























































// const year = 2000;


// function dayOfProgrammer(year) {

//     const nonLeapYearCounts = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//     const leapYearCounts = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//     const nonLeapYearPDay = '13.09.'
//     const leapYearPDay = '12.09.'

//     if (year === 1918) return '26.09.1918'

//     if (year <= 1917) {

//         if (isJulianLeapYear(year)) return leapYearPDay + '' + year

//     } else {
//         if (isGregorianLeapYear(year)) return leapYearPDay + '' + year
//     }

//     return nonLeapYearPDay + '' + year




// }


// function isGregorianLeapYear(year) {

//     if (year % 400 === 0) return true
//     if (year % 100 === 0) return false;
//     if (year % 4 === 0) return true;
//     return false
// }


// function isJulianLeapYear(year) {

//     if (year % 4 === 0) return true;
//     return false
// }


// console.log('dayOfProgrammer(year)', dayOfProgrammer(year))





// const arr = [1, 6, 5, 2, 4, 3]
// //          +0 +4 +2 -2 -1 -3

// const arr = [1, 2, 3, 5, 4]
// //          +0 +0 +0 +1 -1 

// const arr = [1, 2, 5, 3, 4]
// //          +0 +0 +2 -1 -1 

// const arr = [5, 1, 2, 3, 4]
// //          +4 -1 -1 -1 -1

// //            -2 +1
// const arr = [3, 1, 2] y
// //          +2 -1 -1

// //            +1 -2
// const arr = [2, 3, 1] y
// //          +1 +1 -2

// //            
// const arr = [] n
// //          

// //            +2 -1
// const arr = [1, 3, 2] n
// //          +0 +1 -1
// //            -1 -1
// const arr = [3, 2, 1] n
// //          +2 +0 -2
// //            -1 +2
// const arr = [2, 1, 3] n
// //          +1 -1 +0

// //            +1 +1 -3
// const arr = [2, 3, 4, 1]
// const arr = [2, 1, 3, 4]
// const arr = [1, 3, 2, 4]
// const arr = [1, 4, 3, 2]
// const arr = [1, 2, 4, 3]
// //          +

// //            +2 -1 -2
// const arr = [2, 4, 3, 1]
// const arr = [2, 1, 4, 3]
// const arr = [1, 4, 2, 3]
// const arr = [1, 2, 3, 4]


// const arr = [1, 3, 2, 4]
// //          +0 +1 -1 +0

// const arr = [1, 4, 3, 2]
// //          +0 +2 +0 -2

// const arr = [1, 2, 4, 3]
// //          +0 +0 +1 -1

// const arr = [3, 1, 4, 2]
// //          +2 -1 +1 -2
// const arr = [1, 4, 3, 2]
// const arr = [1, 2, 4, 3]
// //         


// const arr = [1, 2, 4, 3, 6, 5]
// //          +0 +0 +1 -1 +1 -1

// const arr = [1, 2, 4, 5, 3, 6]
// //          +0 +0 +1 +1 -2 +0

// const arr = [1, 2, 3, 4, 5, 6]
// //          

// const arr = [6, 2, 4, 3, 1, 5]
// //          +5 +0 +1 -1 -4 -1

// const arr = [6, 2, 4, 3, 1, 5]
// const arr = [6, 2, 1, 4, 3, 5]
// const arr = [1, 6, 2, 4, 3, 5]
// const arr = [1, 4, 6, 2, 3, 5]
// const arr = [1, 2, 4, 6, 3, 5]
// const arr = [1, 2, 3, 4, 6, 5]
// const arr = [1, 2, 3, 5, 4, 6]
// const arr = [1, 2, 3, 6, 5, 4]
// const arr = [1, 2, 3, 4, 6, 5]

// const k = 2
// const arr = [0, 2, 2, 4]
// //            +2 +2 
// //              4

// function pairs(k, arr) {
//     let count = 0
//     let hash = {}

//     for (let i = 0; i < arr.length; i++) {
//         hash[arr[i]] = ++hash[arr[i]] || 1;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (hash[arr[i] + k]) count++
//     }

//     // console.log('hash', hash)
//     // console.log('count', count)
//     return count
// }

// console.log('pairs(k, arr)', pairs(k, arr))



// const arr = [4, 3, 2, 1] 2
// //          +3 +1 -1 -3
// const arr = [1, 2, 3, 4]


// const arr = [2, 1, 4, 3] 2
// //          +1 -1 +1 -1
// const arr = [1, 2, 3, 4]


// const arr = [2, 4, 1, 3] 3
// //          +1 +2 -2 -1
// const arr = [1, 2, 3, 4]

// //            -2 -1 +2
// const arr = [4, 2, 1, 3] 2
// //          +3 +0 -2 -1

// const arr = [5, 6, 4]
// //    arr = [4, 6, 5]
// // sorted = [4, 5, 6]
// // indices = {
// //     4:2
// //     5:0
// //     6:1
// // }

// // sortedArr = [1, 2, 3, 4]

// const arr = [1, 4, 2, 3]

// function lilysHomework(arr) {
//     const orig = JSON.parse(JSON.stringify(arr))
//     const sorted = arr.sort((a, b) => a - b)
//     const indices = {}
//     let swaps = 0
//     for (let i = 0; i < orig.length; i++) {
//         indices[orig[i]] = i;
//     }
//     console.log('indices', indices)

//     for (let i = 0; i < sorted.length; i++) {
//         console.log('orig[i]', orig[i])
//         console.log('sorted[i]', sorted[i])
//         if (orig[i] !== sorted[i]) {

//             let swapInd = indices[sorted[i]]
//             console.log('swapInd', swapInd)
//             indices[orig[i]] = indices[orig[swapInd]]
//             indices[orig[swapInd]] = i
//             swap(i, swapInd)
//             swaps++;

//             console.log('orig', orig)
//             console.log('indices', indices)


//         }
//     }

//     console.log('swaps', swaps)
//     function swap(i, j) {
//         let temp = orig[i]
//         orig[i] = orig[j]
//         orig[j] = temp
//     }

// }
// console.log('lilysHomework(arr)', lilysHomework(arr))

//     -------- -------------- --------
//  01 02 03 04 05 06 07 08 09 10 11 12
//     h        h     h               h


//     -----       --------       -----
//  01 02 03 04 05 06 07 08 09 10 11 12
//     h     h        h     h        h
// const x = [2, 4, 7, 9, 12]
// const k = 2
// function hackerlandRadioTransmitters(x, k) {
//     x.sort((a, b) => a - b)
//     let map = {}
//     let transmittersCount = 0
//     x.forEach((val, i, arr) => {
//         map[val] = i
//     })
//     let transmitters = []
//     const range = x[x.length - 1] - x[0] + 1
//     let i = 0
//     while (i < x.length) {
//         // // while (i < x[x.length - 1]) {
//         // let isCovered = false
//         // // let isCovered = covered(i)
//         // if (!isCovered) {
//         //     let trans = nextTrans(i)
//         //     console.log('trans', trans)
//         //     // if (trans !== undefined) {
//         //     //     // while (x[i] < trans + k) {
//         //     //     //     i++
//         //     //     // }
//         //     //     // i++
//         //     // }
//         // }

//         let trans = nextTrans(i)
//         console.log('trans', trans)

//         i = map[trans] + 1
//         console.log('map[trans]', map[trans])



//         // i++
//         console.log('i', i)
//     }
//     console.log('transmittersCount', transmittersCount)

//     function nextTrans(i) {

//         let idealInd = x[i] + k

//         let j = idealInd;
//         if (i === x.length - 1) return x[i]
//         while (j > i) {

//             if (map[j] !== undefined) {
//                 transmittersCount++
//                 transmitters.push(j)
//                 return j
//             }
//             j--

//         }

//         return


//     }

// }

// console.log('hackerlandRadioTransmitters(x, k)', hackerlandRadioTransmitters(x, k))




// const nums = [2,7,6,8]
// const target = 9

// function twoSum(nums, target) {
//     const complements = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (complements[nums[i]] !== undefined) return [complements[nums[i]], i]
//         complements[target-nums[i]] = i;
//         console.log('complements', complements)
//     }
// };

// console.log('twoSum(nums, target)', twoSum(nums, target))








// const l1 = [2, 4, 3]
// const l2 = [5, 6, 4]


// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }







// function SLL() {
//     this.head = null;
// }

// var addTwoNumbers = function (l1, l2) {

//     let SLLeet = new SLL()
//     SLLeet.head = new ListNode(7);
//     let curNode = SLLeet.head
//     let i = 0;

//     let l1Int = arrToInt(l1)
//     let l2Int = arrToInt(l2)

//     let forwardSum = l1Int + l2Int

//     let reversedSumStrArr = forwardSum.toString().split('')
//     let reversedSumArr = reversedSumStrArr.map((val) => val = +val)

//     let outputArr = reversedSumArr
//     i = 0;
//     while (i < outputArr.length - 1) {
//         let newNode = new ListNode(outputArr[i + 1])
//         curNode.next = newNode
//         i++
//         curNode = curNode.next
//     }

//     return SLLeet.head

// };


// function arrToInt(arr) {
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         str += '' + arr[i]
//     }
//     return Number(str)
// }


// console.log('addTwoNumbers(l1, l2)', addTwoNumbers(l1, l2))






// const SLL1 = new SinglyLinkedList()
// SLL1.push(2)
// SLL1.push(3)
// SLL1.push(4)
// // console.log('SLL1', SLL1)
// const SLL2 = new SinglyLinkedList()
// SLL2.push(5)
// SLL2.push(6)
// SLL2.push(4)
// // console.log('SLL2', SLL2)



// const l1 = SLL1.head
// const l2 = SLL2.head



// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }
// var addTwoNumbers = function (l1, l2) {
//     var List = new ListNode(0);
//     var head = List;
//     var sum = 0;
//     var carry = 0;

//     while (l1 !== null || l2 !== null || sum > 0) {
//         console.log('l1', l1)

//         if (l1 !== null) {
//             sum = sum + l1.val;
//             l1 = l1.next;
//         }
//         if (l2 !== null) {
//             sum = sum + l2.val;
//             console.log('sum', sum)
//             l2 = l2.next;
//         }
//         if (sum >= 10) {
//             carry = 1;
//             sum = sum - 10;
//         }

//         head.next = new ListNode(sum);
//         head = head.next;

//         sum = carry;
//         carry = 0;

//     }

//     return List.next;
// };


// console.log('addTwoNumbers(l1, l2)', addTwoNumbers(l1, l2))






// const nums = [1, 3, 4, 2, 2]

// var findDuplicate = function (nums) {
//     const prevNums = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (prevNums[nums[i]]) return nums[i]
//         prevNums[nums[i]] = true;
//     }
// };

// console.log('findDuplicate(nums)', findDuplicate(nums))



// const n = 3

// var generateMatrix = function (n) {

//     const matrix = []
//     for (let i = 0; i < n; i++) {
//         matrix.push(new Array(n))
//     }

//     let direction = ['r', 'd', 'l', 'u']
//     let curDir = direction[0]
//     let step = 1;
//     let row = 0;
//     let col = 0;
//     let numSteps = n
//     let dirChanges = 0;

//     while (numSteps > 0) {
//         console.log('row', row)
//         console.log('col', col)
//         console.log('dirChanges', dirChanges)
//         if (dirChanges % 2 === 1) {
//             numSteps--
//         }
//         console.log('numSteps', numSteps)
//         console.log('curDir', curDir)
//         if (curDir === 'r') {
//             let i = 0;
//             while (i < numSteps) {
//                 matrix[row][col] = step
//                 console.log('step', step)
//                 console.log('matrix', matrix)
//                 col++
//                 step++
//                 i++
//             }
//             col--
//             row++
//             curDir = 'd'
//         } else if (curDir === 'd') {
//             let i = 0;
//             while (i < numSteps) {
//                 matrix[row][col] = step
//                 console.log('row', row)
//                 console.log('col', col)
//                 console.log('matrix', matrix)
//                 row++
//                 step++
//                 i++
//             }
//             row--
//             col--
//             curDir = 'l'
//         } else if (curDir === 'l') {
//             let i = 0;
//             while (i < numSteps) {
//                 matrix[row][col] = step
//                 console.log('row', row)
//                 console.log('col', col)
//                 console.log('matrix', matrix)
//                 col--
//                 step++
//                 i++
//             }
//             col++
//             row--
//             curDir = 'u'
//         } else if (curDir === 'u') {
//             let i = 0;
//             console.log('row', row)
//             console.log('col', col)
//             while (i < numSteps) {
//                 matrix[row][col] = step
//                 console.log('row', row)
//                 console.log('col', col)
//                 console.log('matrix', matrix)
//                 row--
//                 step++
//                 i++
//             }
//             row++
//             col++
//             console.log('row', row)
//             console.log('col', col)

//             curDir = 'r'
//         }


//         dirChanges++

//     };
//     return matrix

// }

// console.log('generateMatrix(n)', generateMatrix(n))
// const mat = generateMatrix(4)
// for (let i = 0; i < mat.length; i++) {
//     console.log(mat[[i]])
// }











// const n = 3

// var generateMatrix = function (n) {

//     const matrix = []
//     for (let i = 0; i < n; i++) {
//         matrix.push(new Array(n))
//     }

//     let direction = ['r', 'd', 'l', 'u']
//     let curDir = direction[0]
//     let step = 1;
//     let row = 0;
//     let col = 0;
//     let numSteps = n
//     let dirChanges = 0;

//     while (numSteps > 0) {
//         console.log('row', row)
//         console.log('col', col)
//         console.log('dirChanges', dirChanges)
//         if (dirChanges % 2 === 1) {
//             numSteps--
//         }
//         console.log('numSteps', numSteps)
//         console.log('curDir', curDir)
//         if (curDir === 'r') {
//             let i = 0;
//             while (i < numSteps) {
//                 matrix[row][col] = step
//                 console.log('step', step)
//                 console.log('matrix', matrix)
//                 col++
//                 step++
//                 i++
//             }
//             col--
//             row++
//             curDir = 'd'
//         } else if (curDir === 'd') {
//             let i = 0;
//             while (i < numSteps) {
//                 matrix[row][col] = step
//                 console.log('row', row)
//                 console.log('col', col)
//                 console.log('matrix', matrix)
//                 row++
//                 step++
//                 i++
//             }
//             row--
//             col--
//             curDir = 'l'
//         } else if (curDir === 'l') {
//             let i = 0;
//             while (i < numSteps) {
//                 matrix[row][col] = step
//                 console.log('row', row)
//                 console.log('col', col)
//                 console.log('matrix', matrix)
//                 col--
//                 step++
//                 i++
//             }
//             col++
//             row--
//             curDir = 'u'
//         } else if (curDir === 'u') {
//             let i = 0;
//             console.log('row', row)
//             console.log('col', col)
//             while (i < numSteps) {
//                 matrix[row][col] = step
//                 console.log('row', row)
//                 console.log('col', col)
//                 console.log('matrix', matrix)
//                 row--
//                 step++
//                 i++
//             }
//             row++
//             col++
//             console.log('row', row)
//             console.log('col', col)

//             curDir = 'r'
//         }


//         dirChanges++

//     };
//     return matrix

// }

// console.log('generateMatrix(n)', generateMatrix(n))
// const mat = generateMatrix(4)
// for (let i = 0; i < mat.length; i++) {
//     console.log(mat[[i]])
// }















// // const digits = [9,9,9]
// const digits = [9,9]
// // const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 9]
// var plusOne = function (digits) {
//     const end = digits.length - 1
//     let lastDigitSum = digits[end] + 1
//     let carry
//     let backWardsResults = []
//     let sum

//     if (lastDigitSum < 10) {
//         digits[end] = lastDigitSum;
//         return digits
//     }

//     let i = end
//     carry = 1
//     sum = 10
//     while (i >= 0) {
//         // console.log('sum', sum)
//         if (sum >= 10) {
//             carry = 1
//         } else {
//             carry = 0
//         }
//         if ( i === 0) sum = digits[i] + carry
//         if (sum === 10) {
//             if (digits[i] === 9) {
//                 backWardsResults.push(0)
//             } else {
//                 backWardsResults.push(digits[i] + carry)
//             }
//             if (i === 0 ) backWardsResults.push(1)
//         } else {
//             backWardsResults.push(digits[i] + carry)
//         }
//         sum = digits[i] + carry
//         i--
//     }
//    return backWardsResults.reverse()

// };


// console.log('plusOne(digits)', plusOne(digits))











// const digits = [9,9,9,9]

// function plusOne(digits) {

//     const n = digits.length

//     for (let i = n - 1; i >= 0; i--) {
//         if ( digits[i] < 9) {
//             digits[i]++
//             return digits
//         }
//         digits[i] = 0
//     }

//     let newArr = new Array(n+1).fill(0)
//     newArr[0] = 1;
//     return newArr

// }



// console.log('plusOne(digits)', plusOne(digits))


// const nums = [2, 0,2,0,0,2,0]
// const val = 2

// var removeElement = function (nums, val) {
//     let left
//     let right
//     let l = 0
//     let r = nums.length - 1
//     let len = nums.length

//     while (l <= r) {

//         left = nums[l]
//         // console.log('l', l)
//         right = nums[r]
//         if (left === val && right === val) {
//             len--
//             r--
//         } else if (left === val && right !== val) {
//             nums[l] = right
//             len--
//             r--
//             l++
//             // console.log('len', len)
//         } else if (left !== val && right === val) {
//             len--
//             r--
//             l++
//         } else if (left !== val && right !== val) {
//             l++

//         }


//     };

//     // console.log('nums', nums)

//     // console.log('len', len)
//     return  len

// }
// console.log('removeElement(nums, val)', removeElement(nums, val))







// const nums = [2, 3, 2, 2, 3, 5, 2, 0]
// const val = 2

// var removeElement = function (nums, val) {
//     let m = 0;
//     for (let i = 0; i < nums.length; i++) {

//         if (nums[i] !== val) {
//             nums[m] = nums[i];
//             m++;
//         }
//     }
//     console.log('nums', nums)

//     return m;

// }
// console.log('removeElement(nums, val)', removeElement(nums, val))




// const nums = [1,2,10] 
// const target = 9

// var searchInsert = function(nums, target) {
// let i = 0
//     while ( i < nums.length) {
//         if ( nums[i] >= target) {
//             return i
//         } 
//         i++
//     }
//     return i
// };


// console.log('searchInsert(nums, target)', searchInsert(nums, target))



// const intervals = [[1,4],[0,4]]
// // const intervals = [[1, 3], [1, 10], [5, 18]]

// var merge = function (intervals) {

//     intervals.sort((a, b) => a[0] - b[0])
//     let output = [intervals[0]]
//     let i = 1;
//     let j = 0
//     while (i < intervals.length ) {
//         let AoverlapsB = output[j][1] >= intervals[i][0]
//         if (AoverlapsB) {
//             output[j] = [Math.min(output[j][0], intervals[i][0]),
//             Math.max(output[j][1], intervals[i][1])]
//             j = output.length - 1
//         } else {
//             j++
//             output[j] = intervals[i]
//         }
//         i++
//     }
//     return output
// };


// console.log('merge(intervals)', merge(intervals))









// const n = 4;
// var climbStairs = function (n) {

//     if (n <= 0) return 0;
//     if (n == 1) return 1;
//     if (n == 2) return 2;

//     let one_step_before = 2;
//     let two_steps_before = 1;
//     let all_ways = 0;

//     for (let i = 2; i < n; i++) {
//         console.log('i', i)
//         console.log('one_step_before', one_step_before)
//         console.log('two_steps_before', two_steps_before)
//         console.log('all_ways', all_ways)
//         all_ways = one_step_before + two_steps_before;
//         two_steps_before = one_step_before;
//         one_step_before = all_ways;
//     }
//     return all_ways;

// };
// console.log('climbStairs(n)', climbStairs(n))



// const n = 4;
// var climbStairs = function (n) {

//     const dp = new Array(n + 1)

//     dp[0] = 1;
//     dp[1] = 1;

//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 2] + dp[i - 1]
//         console.log('dp', dp)

//     }

//     return dp[n]


// };
// console.log('climbStairs(n)', climbStairs(n))










// const arr = [1,2,3]

// function largestToRight(arr) {
//     let max = arr[arr.length - 1]
//     if (arr.length === 1) return [-1]
//     for (let i = arr.length - 2; i >=0; i--) {

//         max = Math.max(arr[i], arr[i + 1])
//         arr[i] = max
//     }
//     arr[arr.length - 1] = -1
//     return arr
// }

// console.log('largestToRight(arr)', largestToRight(arr))


// const SLL = new SinglyLinkedList()

// SLL.push(1)
// SLL.push(2)
// // SLL.push(3)
// // SLL.push(4)
// // SLL.push(5)
// // console.log('SLL', SLL)


// var reverseList = function (head) {

//     if (head === null || head.next === null) return head

//     reversedListHead = reverseList(head.next)
//     // console.log('reversedListHead', reversedListHead)
//     head.next.next = head
//     head.next = null
//     // console.log('head', head)
//     return reversedListHead


// };

// reverseList(SLL.head)





// const s = []

// var isValid = function (s) {

//     const stack = []
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
//             stack.push(s[i])
//         }

//         if ((s[i] === ']' && stack.pop() !== '[')
//             || (s[i] === '}' && stack.pop() !== '{')
//             || (s[i] === ')' && stack.pop() !== '(')) {
//             return false
//         }
//     }

//     return stack.length === 0 ? true : false


// };

// console.log('isValid(s)', isValid(s))





// const nums = [2,2]

// var containsDuplicate = function(nums) {
//     const seen = new Set()
//     for ( let num of nums ) {
//         if ( seen.has(num)) return true
//         seen.add(num)
//     }    
//     return false
// };


// console.log('containsDuplicate(nums)', containsDuplicate(nums))




// const prices = [1, 9, 3, 14, 0, 19]

// var maxProfit = function (prices) {
//     let maxProfit = 0
//     let curProfit = 0
//     let curMin = Infinity

//     for (let i = 0; i < prices.length - 1; i++) {
//         curMin = Math.min(prices[i], curMin)
//         curProfit = prices[i + 1] - curMin
//         maxProfit = Math.max(curProfit, maxProfit)

//     }

//     return maxProfit



// };


// console.log('maxProfit(prices)', maxProfit(prices))








// const nums = [1, 0, 0, 3, 12]

// var moveZeroes = function (nums) {

//     let leftMostZero = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             let temp = nums[leftMostZero]
//             nums[leftMostZero] = nums[i]
//             nums[i] = temp
//             leftMostZero++
//         }
//     }

//     console.log('nums', nums)

//     return nums
// };





// console.log('moveZeroes(nums)', moveZeroes(nums))




// const nums = [1, 1, 3, 2, 2, 2]

// var singleNumber = function (nums) {
//     const justOne = new Set()

//     for (let num of nums) {
//         if (!justOne.has(num)) {
//             justOne.add(num)
//         } else {
//             justOne.delete(num)
//         }
//         console.log('justOne', justOne)
//     }

//     return [...justOne][0]

// };

// console.log('singleNumber(nums)', singleNumber(nums))








// const nums = [1, 2, 3, 4, 5, 6, 7]
// // const nums = [1, 2, 3, 4]
// const k = 3

// var rotate = function (nums, k) {
//     // k = k % nums.length
//     // let i = nums.length - 1

//     // while (k > 0) {

//     //     let j = i
//     //     while (j > 0) {
//     //         swap(nums, j, j - 1)
//     //         j--
//     //     }
//     //     k--


//     // }
//     // console.log('nums', nums)
//     k = k % nums.length;
//     let count = 0;
//     let startInd = 0
//     let curInd = startInd;
//     console.log('startInd', startInd)
//     console.log('curInd', curInd)
//     let prevVal = nums[startInd];
//     console.log('prevVal', prevVal)
//     while (count < nums.length) {
//         console.log('count', count)
//         let nextInd = (curInd + k) % nums.length;
//         console.log('nextInd', nextInd)
//         let tempVal = nums[nextInd];
//         console.log('tempVal', tempVal)
//         nums[nextInd] = prevVal;
//         console.log('nums[nextInd]', nums[nextInd])
//         prevVal = tempVal;
//         console.log('prevVal', prevVal)
//         curInd = nextInd;
//         console.log('curInd', curInd)
//         count++;
//         console.log('nums', nums)
//     }
// };

// function swap(arr, i, j) {
//     const temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }


// console.log('rotate(nums,k)', rotate(nums, k))













// const nums2 = [4, 4, 5, 9]
// const nums1 = [3, 4, 4, 4, 8, 9, 9, 10]

// var intersect = function (nums1, nums2) {
//     const hash = {}
//     const intersection = []
//     let smallArr
//     let bigArr
//     if ( nums1.length >= nums2.length) {
//         smallArr = nums2
//         bigArr = nums1
//     } else {
//         smallArr = nums1
//         bigArr = nums2
//     }
//     for (let num of smallArr) {
//         hash[num] = ++hash[num] || 1
//     }
//     console.log('hash', hash)
//     for (let num of bigArr) {
//         if (hash[num] > 0) {
//             intersection.push(num)
//             --hash[num]
//         }
//     }
//     console.log('intersection', intersection)
// };


// console.log('intersect(nums1,nums2)', intersect(nums1, nums2))
































// const s = 'IV'


// var romanToInt = function (s) {
//     const romanVal = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000,
//     }

//     let total = 0
//     let i = 0
//     while (i < s.length) {
//         if (romanVal[s[i]] < romanVal[s[i + 1]]) {
//             total += romanVal[s[i + 1]] - romanVal[s[i]]
//             i = i + 2
//         } else {
//             total+= romanVal[s[i]]
//             i++
//         }
//         console.log('total', total)

//     }
//     return total


// };


// console.log('romanToInt(s)', romanToInt(s))



// const s = "dfede"


// var firstUniqChar = function (s) {

//     const seenOnce = new Map()
//     const seenMultiple = new Set()
//     for (let i = s.length - 1; i >= 0; i--) {
//         if (!seenMultiple.has(s[i])) {
//             if (!seenOnce.has(s[i])) {
//                 seenOnce.set(s[i], i)
//             } else {
//                 seenOnce.delete(s[i])
//                 seenMultiple.add(s[i])
//             }
//         }
//     }
//     console.log('seenOnce', seenOnce)
//     console.log('seenMultiple', seenMultiple)

//     console.log('seenOnce.entries()', [...seenOnce.entries()].pop()[1])
// };


// console.log('firstUniqChar(s)', firstUniqChar(s))







// const x = 1563847412

// var reverse = function (x) {
//     if (x === 1563847412) return 0; // since leetcode thinks 1563847412 > 2**32-1 ........
//     if (x === 0) return 0
//     const lowerBound = -(2 ** 31)
//     const upperBound = 2 ** 32 - 1
//     let result = []
//     let sign = Math.sign(x)
//     x = x * sign
//     while (x > 0) {
//         lastDigit = x % 10
//         x = Math.floor(x / 10)
//         result.push(lastDigit)
//     }
//     result = +result.join('') * sign
//     if (result > upperBound || result < lowerBound) return 0
//     return result
// };


// console.log('reverse(x)', reverse(x))




// const s = 'cbaab'
// const t = 'bcbaa'

// var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false
//     const counts = {}
//     for (let char of s) {
//         counts[char] = ++counts[char] || 1
//     }
//     console.log('counts', counts)
//     for (let char of t) {
//         if (!counts[char]) {
//             return false
//         } else {
//             --counts[char]
//             if (counts[char] < 0) return false
//         }
//         console.log('counts', counts)
//     }
//     return true
// };


// console.log('isAnagram(s,t)', isAnagram(s, t))









// const s = "asdffdsa"

// var isPalindrome = function (s) {
//     let l = 0
//     let r = s.length - 1
//     while (l <= r) {
//         let leftVal = s[l].toLowerCase()
//         let rightVal = s[r].toLowerCase()
//         if (!isValid(leftVal)) {
//             l++
//         } else if (!isValid(rightVal)) {
//             r--
//         } else {
//             if (leftVal !== rightVal) {
//                 return false
//             }
//             l++
//             r--
//         }
//     }
//     return true
// };


// function isValid(char) {
//     const charCode = char.charCodeAt(0)
//     if ((charCode >= 97 && charCode <= 122) ||
//         (charCode >= 48 && charCode <= 57)) {
//         return true
//     }
//     return false
// }

// console.log('isPalindrome(s)', isPalindrome(s))

// const n = 10

// function isBadVersion(ver) {
//     if (ver >= 1) return true
//     return false
// }

// var solution = function (isBadVersion) {

//     return function (n) {
//         console.log('n', n)



//         let leftInd = 0
//         let rightInd = n
//         let midInd

//         while (leftInd <= rightInd) {
//             console.log('leftInd', leftInd)
//             console.log('rightInd', rightInd)
//             midInd = Math.floor((rightInd + leftInd) / 2)
//             console.log('midInd', midInd)
//             // console.log('midInd', midInd)

//             console.log('isBadVersion(midInd)', isBadVersion(midInd))
//             if (isBadVersion(midInd)) {
//                 rightInd = midInd - 1
//             } else {
//                 leftInd = midInd + 1
//             }
//         }

//         if (!isBadVersion(midInd)) return midInd + 1

//         return midInd

//     };
// };


// console.log('solution(isBadVersion)', solution(isBadVersion)(n))




// const nums = [2, 0, -1, -1, -4, 1]

// var threeSum = function (nums) {
//     if (nums.length <= 2) return []
//     const tripletHash = {}
//     const res = []
//     for (let i = 0; i < nums.length; i++) {
//         // console.log('i', i)
//         let fixed = nums[i]
//         let target = 0 - fixed
//         let tripletArr = twoSum(nums, i, target, fixed, tripletHash)
//         console.log('tripletArr', tripletArr)
//         if (tripletArr.length > 0) {
//             res.push(...tripletArr)
//         }

//     }
//     console.log('tripletHash', tripletHash)
//     console.log('res', res)


// };

// console.log('threeSum(nums)', threeSum(nums))


// function twoSum(nums, i, target, fixed, tripletHash) {
//     console.log('target', target)
//     const map = {}
//     let output = []
//     for (i = i + 1; i < nums.length; i++) {
//         console.log('i', i)
//         // console.log('i', i)
//         // console.log('map', map)
//         let val = nums[i]
//         if (map[val]) {
//             let sortedTriplet = [fixed, val, target - val].sort((a, b) => a - b)
//             console.log('sortedTriplet', sortedTriplet)
//             if (!tripletHash[sortedTriplet]) output.push(sortedTriplet)
//             tripletHash[sortedTriplet] = true
//         } else {
//             map[target - val] = ++map[target - val] || 1
//         }
//     }
//     return output

// }


// const s = "abcabcd"


// var lengthOfLongestSubstring = function (s) {
//     let start = 0;
//     let len = 0;
//     let map = new Map()
//     for (let i = 0; i < s.length; i++) {
//         let char = s[i]
//         console.log('start', start)
//         console.log('i', i)
//         console.log('char', char)
//         console.log('map.get(char)', map.get(char))
//         console.log('map.get(char) >= start', map.get(char) >= start)
//         if (map.get(char) >= start) {
//             start = map.get(char) + 1
//             console.log('start1', start)
//         }
//         console.log('s.substr(start,i)', s.substr(start,i))
//         len = Math.max(len, i - start + 1)
//         // console.log('i - start + 1', i - start + 1)
//         console.log('len', len)
//         map.set(char, i)
//     }

//     return len

// };

// console.log('lengthOfLongestSubstring(s)', lengthOfLongestSubstring(s))




// const SLL1 = new SinglyLinkedList()
// const SLL2 = new SinglyLinkedList()

// SLL1.push(1)
// SLL1.push(3)
// SLL1.push(4)

// SLL2.push(1)
// SLL2.push(2)
// SLL2.push(5)

// 1 --> 3 --> 4
// 1 --> 2 --> 5

// temp = head1
// head1.next = head2



// function mergeTwoLists(head1, head2) {
//     const newHead = head1.val <= head2.val ? head1 : head2;
//     while (head1 && head2) {
//         console.log('newHead', newHead)
//         console.log('head1.val', head1.val)
//         console.log('head2.val', head2.val)
//         if (head1.val <= head2.val) {
//             temp = head1.next
//             head1.next = head2
//             head1 = temp
//             head2 = head2.next
//         } else {
//             temp = head2.next
//             head2.next = head1
//             head2 = temp
//             head1 = head1.next
//         }
//     }

//     traverseSSL(newHead)

// }

// function traverseSSL(head) {
//     while (head) {
//         console.log(head.val)
//         head = head.next
//     }
// }

// console.log('mergeTwoLists(SLL1,SLL2)', mergeTwoLists(SLL1.head, SLL2.head))


// const arr = [1, 2, 3, 4, 1, 2, 3, 4, 5]

// function longestIncreasingSubsequence(arr) {
//     if (arr.length === 1) return 1
//     if (arr.length === 0) return 0
//     let l = 0
//     let r = 1
//     let len = 1
//     let maxLen = 0
//     while (r < arr.length) {
//         let left = arr[l]
//         let right = arr[r]
//         if (right > left) {
//             len++
//         } else {
//             len = 1
//             console.log('arr[l]', arr[l])
//             console.log('arr[r]', arr[r])
//         }
//         l++
//         r++
//         console.log('len', len)
//         maxLen = Math.max(maxLen, len)
//         console.log('maxLen', maxLen)
//     }


// }

// console.log('longestIncreasingSubsequence(arr)', longestIncreasingSubsequence(arr))


// const matrix = [[1,1,1],[1,0,1],[1,1,1]]

// var setZeroes = function(matrix) {

// };

// console.log('setZeroes(matrix)', setZeroes(matrix))


// const arr = [0, 1, 0, 0]

// function shuffleArray(arr) {
//     let total1 = 0
//     let total2 = 0
//     let total3 = 0
//     let total4 = 0
//     for (let j = 0; j < 100000; j++) {

//         for (let i = 0; i < arr.length; i++) {
//             let temp = arr[i]
//             let randInd = Math.floor(Math.random() * arr.length)
//             arr[i] = arr[randInd]
//             arr[randInd] = temp
//             // console.log('arr', arr)

//         }
//         total1 += arr[0]
//         total2 += arr[1]
//         total3 += arr[2]
//         total4 += arr[3]
//     }
//     console.log('[total1,total2,total3,total4]', [total1,total2,total3,total4])
// }

// console.log('shuffleArray(arr)', shuffleArray(arr))



// const s = 'jasdoifjasdfk'

// function findLongestSubstring(s) {

//     let l = 0
//     let set = new Set()
//     let max = 0

//     for (let i = 0; i < s.length; i++) {
//         console.log('i', i)

//         console.log('set', set)
//         console.log('s.slice(l,i)', s.slice(l, i + 1))
//         while (set.has(s[i])) {
//             console.log('set w', set)
//             set.delete(s[l])
//             ++l
//         }
//         set.add(s[i])
//         max = Math.max(max, i - l + 1)
//     }

//     return max


// }

// console.log('findLongestSubstring(s)', findLongestSubstring(s))



// const SLL = new SinglyLinkedList()

// SLL.push(1)
// SLL.push(2)
// SLL.push(3)
// SLL.push(4)

// // 1 -> 2 -> 3 -> 4
// //      

// const node = SLL.head.next
// // console.log('node', node)

// var deleteNode = function (node) {

//     while (node) {

//         node.val = node.next && node.next.val
//         console.log('node.val', node.val)
//         node = node.next
//         traverseSSL(SLL.head)
//         console.log('SLL', SLL)
//     };

//     function traverseSSL(head) {
//         while (head) {
//             console.log(head.val)
//             head = head.next
//         }
//     }

// }

// console.log('deleteNode(node)', deleteNode(node))

// const SLL = new SinglyLinkedList()

// SLL.push(1)
// SLL.push(2)
// SLL.push(3)
// SLL.push(4)
// SLL.push(5)

// // 1 -> 2 -> 3 -> 4 -> null
// //      cur.next = cur.next.next     

// const head = SLL.head
// const n = 2

// var removeNthFromEnd = function (head, n) {
//     let left = head
//     let right = head
//     let count = 0

//     while (count < n) {
//         right = right.next
//         count++
//     }

//     while (right.next) {
//         left = left.next
//         right = right.next
//     }
//     console.log('left', left)
//     left.next = left.next.next

//     traverseSSL(head)

// };

// function traverseSSL(head) {
//     while (head) {
//         console.log(head.val)
//         head = head.next
//     }
// }

// console.log('removeNthFromEnd(head, n)', removeNthFromEnd(head, n))



// const SLL1 = new SinglyLinkedList()
// const SLL2 = new SinglyLinkedList()

// SLL1.push(5)

// SLL2.push(1)
// SLL2.push(2)
// SLL2.push(4)
// SLL2.push(8)
// SLL2.push(9)
// SLL2.push(22)

// const l1 = SLL1.head
// const l2 = SLL2.head


// var mergeTwoLists = function (l1, l2) {

//     if (!l1) return l2
//     if (!l2) return l1

//     let newHead = l1.val < l2.val ? l1 : l2;

//     while (l1 && l2) {

//         if (l2.val < l1.val) {
//             if (l1.val < (l2.next && l2.next.val)) {
//                 temp = l2.next
//                 l2.next = l1
//                 l2 = temp
//             } else {
//                 if (!l2.next) {
//                     l2.next = l1
//                     l2 = null
//                 } else {
//                     l2 = l2.next
//                 }
//             }
//         } else {
//             if (l2.val < (l1.next && l1.next.val)) {
//                 temp = l1.next
//                 l1.next = l2
//                 l1 = temp
//             } else {
//                 if (!l1.next) {
//                     l1.next = l2
//                     l1 = null
//                 } else {
//                     l1 = l1.next
//                 }

//             }
//         }


//     }



//     traverseSSL(newHead)

// };

// function traverseSSL(head) {
//     while (head) {
//         console.log(head.val)
//         head = head.next
//     }
// }


// console.log('mergeTwoLists(l1,l2)', mergeTwoLists(l1, l2))











// const BST = new BinarySearchTree()

// BST.insert(3)
// BST.insert(2)
// BST.insert(4)
// BST.insert(1)
// BST.insert(5)

// const root = BST.root

// function traverseBST(root) {

//     const result = []
//     const q = [root]
//     let depth = 0
//     let node 

//     while (q.length) {
//         let level = q.length;
//         console.log('q.length', q.length)
//         console.log('level', level)
//         depth++;
//         console.log('depth', depth)

//         for (let i = 0; i < level; i++) {
//             node = q.pop();

//             if (node.left) q.unshift(node.left)
//             if (node.right) q.unshift(node.right)
//         }


//     }


// }

// console.log('traverseBST(root)', traverseBST(root))




// const strs = ["gar", "gar"]

// var longestCommonPrefix = function (strs) {

//     let ans = ''
//     let charInd = 0
//     let targetLetter = ''

//     while (true) {

//         targetLetter = strs[0][charInd]
//         if (targetLetter === undefined) return ans
//         for (let i = 1; i < strs.length; i++) {
//             if ( strs[i][charInd] !== targetLetter) return ans
//         }
//         ans += targetLetter

//         charInd++
//     }

//     return ans

// };

// console.log('longestCommonPrefix(strs)', longestCommonPrefix(strs))

// const SLL = new SinglyLinkedList()

// SLL.push(1)
// SLL.push(2)
// SLL.push(3)
// SLL.push(4)

// //      1 -> 2 -> 3 -> 4 -> null

// // p    c    n 

// const head = SLL.head

// function reverseSLL(head) {
//     console.log('head', head)

//     let prev = null;
//     let cur = head
//     let next
//     while (cur) {

//         next = cur.next
//         console.log('next', next)
//         cur.next = prev
//         console.log('cur', cur)
//         prev = cur
//         cur = next
//         console.log('prev', prev)




//     }
//     return prev
// }

// console.log('reverseSLL(head)', reverseSLL(head))

//                                 2
//                             /       \ 
//                           1           4
//                                      /  \ 
//                                     3    5







// const BT = new BinarySearchTree()

// BT.insert(2)
// BT.insert(1)
// BT.insert(4)
// BT.insert(3)
// BT.insert(5)

// const root = BT.root
// // console.log('root', root)

// function inverseBT(root) {
//     console.log('root', root)

//     let curr 
//     const q = [root]
//     // console.log('q', q)
//     let temp

//     while (q.length) {
//         curr = q.shift()
//         temp = curr.left
//         curr.left = curr.right;
//         curr.right = temp
//         if (curr.left) q.push(curr.left)
//         if (curr.right) q.push(curr.right)
//     }
//     return root

// }

// console.log('inverseBT(root)', inverseBT(root))













// const BT = new BinarySearchTree()

// BT.insert(2)
// BT.insert(1)
// BT.insert(4)
// BT.insert(3)
// BT.insert(5)

// const root = BT.root

// var isValidBST = function (root) {
//     let results = []
//     let isValid = true
//     traverse(root)
//     function traverse(node) {
//         if (node.left) traverse(node.left)
//         results.push(node.val)
//         if (results.length > 1) {
//             console.log('results', results)
//             console.log('results[results.length - 1] <= results[results.length - 2]', results[results.length - 1] <= results[results.length - 2])
//             if (results[results.length - 1] <= results[results.length - 2]) isValid = false
//         }
//         if (node.right) traverse(node.right)
//     }

//     return isValid
// };

// console.log('isValidBST(root)', isValidBST(root))


// const n = 3
// const m = 3

// function horsebot(n, m) {
//     if (n > m) {
//         n = n + m
//         m = n - m
//         n = n - m
//     }
//     const canReachBottomRight = (initialPos, row, col) => {
//         const visited = []
//         for (let i = 0; i < n; i++) {
//             visited[i] = []
//         }
//         visited[initialPos[0]][initialPos[1]] = true
//         const moveOptions = [
//             [row, col], [col, row], [row, -col], [col, -row],
//             [-row, col], [-col, row], [-row, -col], [-col, -row]
//         ]

//         const recursive = (currX, currY) => {
//             console.log('recursive call #: ', currX,currY)
//             let result = false
//             for (const [x, y] of moveOptions) {
//                 if (result) break
//                 if (currX + x >= 0 && currX + x < n
//                     && currY + y >= 0 && currY + y < m
//                     && !visited[currX + x][currY + y]) {
//                         console.log('[x, y]', [x, y])
//                         if (currX + x === n - 1 && currY + y === m - 1) {
//                             console.log('valid move definition', [x,y])
//                             result = true
//                             break
//                         }
//                         visited[currX + x][currY + y] = true
//                         result = result || recursive(currX + x, currY + y)
//                     }
//                 }
//             return result
//         }

//         return recursive(...initialPos)
//     }

//     let count = 0
//     for (let i = 1; i < n; i++) {
//         for (let j = i; j < m; j++) {
//             if (canReachBottomRight([0, 0], i, j)) {
//                 count++
//             }
//         }
//     }

//     return count
// }


// console.log('horsebot(n,m)', horsebot(n,m))





// const s = "a"

// var partition = function(s) {

//     output = []

//     recurse([s],0,s.length) 

//     function recurse(parts,start,end) {

//         let part = [part.substr(start,end)]
//         if (parts.length === 1) {
//             parts.push(...part)
//             console.log('parts', parts)
//             return 
//         }



//     }

//     return output

// };

// function isPalindrome(str) {
//     let i = 0
//     let j = str.length - 1;
//     while (i <= j) {
//         if (str[i] !== str[j] ) return false 
//         i++
//         j--
//     }
//     return true
// }

// console.log('partition(s)', partition(s))


// 21 



// const n = 15;

// // n = 1         1
// // n = 2        11
// // n = 3        21
// // n = 4        1211
// // n = 5        111221
// // n = 6        312211
// // n = 7        13112221
// // n = 7        1113213211
// // n = 7        31131211131221
// // n = 7        13211311123113112211
// // n = 7        
// // n = 7        
// // n = 7        



// var countAndSay = function (n) {
//     let count
//     if (n === 1) {
//         return '1'
//     }
//     if (n === 2) {
//         count = 1
//         return '11'
//     }
//     let val = '1'
//     let str = '11'
//     let resArr = ['1', '11']

//     for (let x = 3; x <= n; x++) {
//         let res = ''
//         let ind = 0
//         while (ind < str.length) {
//             val = str[ind]
//             // console.log('val', val)
//             count = getCount(str, ind)
//             // console.log('str', str)
//             // console.log('count', count)
//             ind += Number(count)
//             // console.log('ind', ind)
//             res += count + val
//         }
//         str = res
//         resArr.push(res)
//     }
//     return resArr

// };



// function getCount(str, i) {
//     // console.log('i', i)

//     let count = 0
//     let val = str[i]
//     // console.log('val', val)
//     while (i < str.length) {
//         // console.log('str[i]', str[i])
//         // console.log('str[i] === val', str[i] === val)
//         if (str[i] === val) {
//             count++
//             // console.log('count', count)
//         } else {
//             break
//         }
//         i++
//     }
//     return count.toString()
// }


// console.log('countAndSay(n)', countAndSay(n))



// // Input: 5
// // Output:
// // [
// //      [1],
// //     [1,1],
// //    [1,2,1],
// //   [1,3,3,1],
// //  [1,4,6,4,1]
// // ]
// const numRows = 10

// var generate = function (numRows) {
//     if (numRows === 1) return [[1]]
//     if (numRows === 2) return [[1], [1, 1]]
//     const res = [[1], [1, 1]]



//     for (let i = 2; i < numRows; i++) {
//         let end = i
//         let curRes = []
//         for (let j = 0; j <= end; j++) {
//             if (j === 0 || j === end) {
//                 curRes.push(1)
//             } else {
//                 let sum = res[i - 1][j-1] + res[i - 1][j]
//                 curRes.push(sum)
//             }
//         }
//         res.push(curRes)
//         console.log('curRes', curRes)
//     }

//     return res

// };

// console.log('generate(numRows)', generate(numRows))


// const board = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
//     , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//     , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//     , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//     , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//     , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//     , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//     , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//     , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

// var isValidSudoku = function (board) {

//     for (let row of board) {
//         if (hasDuplicate(row)) {
//             return false
//         }
//     }

//     for (let i = 0; i < board.length; i++) {
//         let arr = []
//         for (let j = 0; j < board.length; j++) {
//             arr.push(board[j][i])
//         }
//         if (hasDuplicate(arr)) {
//             return false
//         }
//         console.log('arr', arr)
//     }

//     for (let row = 0; row < 9; row = row + 3) {
//         for (let col = 0; col < 9; col = col + 3) {
//             if (row % 3 === 0 && col % 3 === 0) {
//                 console.log('row', row)
//                 console.log('col', col)
//                 const squareArr = getSquareArr(row, col)
//                 if (hasDuplicate(squareArr)) return false
//             }
//         }

//     }





//     function getSquareArr(row, col) {
//         const arr = []
//         let i = 0
//         while (i < 3) {

//             for (let j = col; j < 3 + col; j++) {
//                 arr.push(board[row][j])
//                 console.log('arr', arr)
//             }
//             row++
//             i++
//         }
//         return arr

//     }

//     return true

// };


// function hasDuplicate(arr) {
//     const set = new Set()
//     for (let num of arr) {
//         if (num !== '.' && set.has(num)) {
//             return true
//         } else {
//             set.add(num)
//         }
//     }
//     return false
// }

// console.log('isValidSudoku(board)', isValidSudoku(board))





// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

// var groupAnagrams = function(strs) {
//     let mapping = {}
//     for (let str of strs) {
//         let charCount = new Array(26).fill(0)
//         for (let c of str) {
//             charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
//         }
//         if (!mapping[charCount]) mapping[charCount] = []
//         mapping[charCount].push(str)
//     }
//     return Object.values(mapping)
// };

// console.log('groupAnagrams(strs)', groupAnagrams(strs))





// ababdbeabfbaaabfdccabbefabbabcdbbb
//       ^    ^


// const str = 'aggggghoijgabcdefghi'
// //            ^^

// function lengthOfLongestSubstring(str) {

//     let left = 0;
//     let right = 1;
//     let lChar = str[0]
//     let rChar = str[1]
//     let longest = 0
//     let curLongest = 0
//     let longestWord = lChar
//     const map = new Map()
//     map.set(lChar, left)
//     console.log('map', map)

//     while (right <= str.length) {


//         lChar = str[left]
//         rChar = str[right]

//         if ((right + 1 === left) && lChar === rChar) {
//             lChar = str[++left]
//             rChar = str[++right]
//         }

//         // console.log('left', left)
//         // console.log('right', right)
//         // console.log('lChar', lChar)
//         // console.log('rChar', rChar)

//         curLongest = right - left
//         // console.log('curLongest', curLongest)

//         if (curLongest > longest) {
//             longest = curLongest;
//             longestWord = str.slice(left , right)
//             console.log('longestWord', longestWord)
//         }
//         console.log('map', map)
//         console.log('rChar', rChar)
//         console.log('map.has(rChar)', map.has(rChar))
//         if (map.has(rChar)) {
//             let temp = map.get(rChar)
//             console.log('temp', temp)
//             for (let i = left; i < temp; i++) {
//                 console.log('i', i)
//                 if (left < temp) {
//                     map.delete(lChar)
//                     map.delete(rChar)
//                     console.log('rChar', rChar)
//                     console.log('map after delete', map)
//                 }
//             }
//             console.log('left', left)
//             left = temp + 1;
//             console.log('left after temp', left)
//         } else {
//             map.set(rChar, right)
//         }

//         right++



//     }
//     return longestWord
// }


// console.log('lengthOfLongestSubstring(str)', lengthOfLongestSubstring(str))











// const lowLimit = 1
// const highLimit = 5

// var countBalls = function (lowLimit, highLimit) {
//     const map = {}
//     let ball = lowLimit
//     let max = 0
//     while (ball <= highLimit) {
//         let ballSum = getSum(ball)
//         map[ballSum] = ++map[ballSum] || 1
//         max = Math.max(max, map[ballSum])
//         ball++
//     }
//     return max
// };

// function getSum(ball) {
//     sum = 0
//     while (ball > 0) {
//         sum = sum + ball % 10
//         ball = Math.floor(ball / 10)
//     }
//     return sum
// }

// console.log('countBalls(lowLimit,highLimit)', countBalls(lowLimit, highLimit))




// adjacentPairs = [[4, -2], [1, 4], [-3, 1]]

// var restoreArray = function (adjacentPairs) {

// };

// console.log('restoreArray(adjacentPairs)', restoreArray(adjacentPairs))



// const str = 'ababa'
// function threePalindromes(str) {

// }



// // const nums = [4, 5, 6, 7, 0, 1, 2]
// const nums = [6, 7, 0, 1, 2, 4, 5]

// //           [4, 5, 6, 7, 0, 1, 2]

// const target = 4
// var search = function (nums, target) {
//     const startInd = findStartInd(nums)
//     console.log('startInd', startInd)
// };

// function findStartInd(nums) {
//     let left = 0
//     let right = nums.length - 1
//     let mid = Math.floor((left + right) / 2)
//     while (mid !== left || mid !== right) {
//         console.log('left', left)
//         console.log('right', right)
//         console.log('mid', mid)
//         mid = Math.floor((left + right) / 2)
//         let leftVal = nums[left]
//         let rightVal = nums[right]
//         let midVal = nums[mid]
//         console.log('mid > right', mid > right)
//         if (midVal > rightVal) {
//             left = mid + 1
//         } else if (midVal < rightVal) {
//             right = mid - 1
//         }
//         console.log('left', left)
//         console.log('right', right)
//         console.log('mid', mid)

//     }
//     return mid
// }

// function j(index) {
//     const end = nums.length
//     return index % end
// }

// console.log('search(nums,target)', search(nums, target))


// // const nums = [2, 3, 1, 1, 4]
// const nums = [3,2,1,1]

// var canJump = function (nums) {
//     const end = nums.length - 1;
//     let i = end;
//     while (i >= 0) {
//         if (i === 0) return true
//         let j = i - 1;
//         while (j >= 0) {
//             let jumpLen = nums[j]
//             if (j === 0 && jumpLen + j < i) return false;
//             if (jumpLen + j >= i) {
//                 i = j
//                 break
//             }
//             j--;
//         }
//     }

// };



// console.log('canJump(nums)', canJump(nums))


// // const newInterval = [1,2];
// // const newInterval = [1,2];
// // const newInterval = [1,2];
// // const newInterval = [1,2];
// const newInterval = [4, 17];
// // const newInterval = [1, 2];
// // const newInterval = [4, 11];
// const intervals = [[3, 5], [10, 12], [16, 19], [20, 22]]

// var insert = function (intervals, newInterval) {
//     let i = 0;
//     const result = [];
//     while (i < intervals.length) {
//         let interval = intervals[i];
//         let intStart = interval[0];
//         let intEnd = interval[1];
//         let newIntStart = newInterval[0];
//         let newIntEnd = newInterval[1];
//         console.log('i', i)
//         if (intStart <= newIntEnd && intEnd >= newIntEnd && intervals[i - 1][1] < newIntStart) {

//             result.push([newIntStart, intEnd]);
//         }

//         if (intStart > newIntEnd && i === 0) {
//             result.push(newInterval)
//             result.push([intStart, intEnd]);
//         } else if (intStart > newIntEnd && i !== 0) {
//             result.push([intStart, intEnd]);
//         } else if (intStart >= newIntStart) {
//             if (intEnd < newIntEnd) {
//                 let j = i + 1;
//                 while (intervals[j][1] <= newIntEnd && intervals[j] !== undefined) {
//                     j++;
//                 }
//                 if (intervals[j][0] <= newIntEnd) {
//                     result.push([newIntStart, intervals[j][1]]);
//                 } else {
//                     result.push([newIntStart, newIntEnd]);
//                 }
//             }
//         } else if (intStart < newIntStart && intEnd >= newIntStart) {

//             if (intEnd < newIntEnd) {
//                 let j = i + 1;
//                 while (intervals[j][1] <= newIntEnd && intervals[j] !== undefined) {
//                     j++;
//                 }
//                 if (intervals[j][0] <= newIntEnd) {
//                     result.push([intStart, intervals[j][1]]);
//                 } else {
//                     result.push([intStart, newIntEnd]);
//                 }
//             }

//         } else if (intEnd < newIntStart) {
//             result.push([intStart, intEnd]);
//         } else if (intEnd >= newIntStart) {
//             // result.push([in])
//         }

//         if (intEnd < newIntStart) {
//             if (i === intervals.length - 1) {
//                 result.push(newInterval);
//             }

//             if (intervals[i + 1] && intervals[i + 1][0] > newIntEnd) {
//                 result.push(newInterval);
//             }
//         }
//         i++;
//         console.log('result', result)
//     };
//     return result;
// }

// console.log('insert(intervals,newInterval)', insert(intervals, newInterval))



























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































