const { LinkedList, _Node } = require('./LinkedList')



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



const arr = [1,  2, 3, 0]

function areThereDuplicates(arr) {

    if (arr.length <= 1) return false

    arr.sort()

    let i = 0;

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] === arr[j]) {
            return true
        }
        i++
        
    }

    return false
}


console.log('areThereDuplicates(arr)', areThereDuplicates(arr))










