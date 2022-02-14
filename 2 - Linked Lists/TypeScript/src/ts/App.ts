import { LinkedList } from "./LinkedList";

const myLinkedList = new LinkedList(69);

console.log("\nAfter Adding to the LinkedList:\n");
myLinkedList.insertBeginning(5);
myLinkedList.insertBeginning(70);
myLinkedList.insertBeginning(5675);
myLinkedList.insertBeginning(98);
console.log(myLinkedList.toString());

console.log("Remove 5675 from the LinkedList:\n");
myLinkedList.removeNode(5675);
console.log(myLinkedList.toString());

console.log("Remove 1 (which doesn't exist) from the LinkedList:\n");
myLinkedList.removeNode(1);
console.log(myLinkedList.toString());

console.log("Swap 70 and 5:\n");
myLinkedList.swapNodes(70, 5);
console.log(myLinkedList.toString());

console.log("Swap 98 and 5:\n");
myLinkedList.swapNodes(98, 5);
console.log(myLinkedList.toString());

console.log("Swap 70 and 69:\n");
myLinkedList.swapNodes(70, 69);
console.log(myLinkedList.toString());

console.log("Swap 5 and 69:\n");
myLinkedList.swapNodes(5, 69);
console.log(myLinkedList.toString());

console.log("Swap 100 (doesn't exist) and 5:\n");
myLinkedList.swapNodes(100, 5);
console.log(myLinkedList.toString());

console.log("Swap 69 and 69 (Same Values):\n");
myLinkedList.swapNodes(69, 69);
console.log(myLinkedList.toString());