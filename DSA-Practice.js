const nodemon = require('nodemon')
// const { LinkedList, _Node } = require('./LinkedList')
const { SinglyLinkedList, Node } = require('./LinkedList')



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
//             obj[filteredStr[i]] = 1
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

//   const sSlice = s.slice(0,remainder);
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


function ListNode(val,next) {
  this.val = (val === undefined ? 0 : val) 
  this.next = (next === undefined ? null : next)
}


let SLL = new SinglyLinkedList

SLL.push(0)
SLL.push(1)
SLL.push(2)
console.log('SLL', SLL)

let head = SLL.head;

var reverseList = function(head) {
    if (!head.next) return head

    let curNode = head
    
    while(curNode.next) {


      
      
    }
    
    console.log('curNode', curNode)
    
};



console.log('reverseList(head)', reverseList(head))













































































































































































































































































































































































































































































































