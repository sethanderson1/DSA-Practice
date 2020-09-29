




class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
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
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            this.tail.next = new Node(val);
            this.tail = this.tail.next;
        }
        this.length++
    }

    pop() {
        if (!this.head) return undefined;
        
        let curNode = this.head;
        if (!curNode.next) {
            this.head = null;
            this.tail = null;
            this.length--;
            return undefined
        }
        while ( curNode.next.next) {
            curNode = curNode.next;
        }
        curNode.next = null;
        this.tail = curNode;
        this.length--;
        return this.tail;
    }

    shift() {
        if (!this.head) return undefined;
        const oldHead = this.head;
        this.head = this.head.next;
        if (!this.head) this.tail=null
        this.length--;
        return oldHead;
    }

    unshift(val) {

        if (!this.head) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }
}





















module.exports = {
    SinglyLinkedList,
    Node
}










































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
//             console.log("Item not found");
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
