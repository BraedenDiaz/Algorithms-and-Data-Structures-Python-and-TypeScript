
import { binarySearch, iterativeBinarySearch, copyBinarySearch } from "./binarySearch";
import { BinarySearchTree } from "./BinarySearchTree";

/******************* Binary Search Testing Code *******************/

const sortedValues : number[] = [13, 14, 15, 16, 17];

console.log("\nCopy Binary Search Test:");
console.log(`Searching for 16, Index: ${copyBinarySearch(sortedValues, 16)}`);
console.log(`Searching for 13, Index: ${copyBinarySearch(sortedValues, 13)}`);
console.log(`Searching for 15, Index: ${copyBinarySearch(sortedValues, 15)}`);
console.log(`Searching for 99, Index: ${copyBinarySearch(sortedValues, 99)}`);

console.log("\nOptimized Binary Search Test:");
const values : number[] = [77, 80, 102, 123, 288, 300, 540];
const result : number = binarySearch(values, 0, values.length, 288);
const result2 : number = binarySearch(values, 0, values.length, 77);
const result3 : number = binarySearch(values, 0, values.length, 123);
const result4 : number = binarySearch(values, 0, values.length, 540);
const result5 : number = binarySearch(values, 0, values.length, 69);

console.log(`Element 288 is located at index ${result}`);
console.log(`Element 77 is located at index ${result2}`);
console.log(`Element 123 is located at index ${result3}`);
console.log(`Element 540 is located at index ${result4}`);
console.log(`Element 69 is located at index ${result5}`);

console.log("\nTrying Binary Search with Letters:");
const letters : string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'L', 'O', 'P', 'U', 'X', 'Z'];

console.log("\nLook for letters that spell 'CATS':");
console.log(binarySearch(letters, 0, letters.length, 'C'));
console.log(binarySearch(letters, 0, letters.length, 'A'));
console.log(binarySearch(letters, 0, letters.length, 'T'));
console.log(binarySearch(letters, 0, letters.length, 'S'));

console.log("\nLook for letters that spell 'DOG':");
console.log(binarySearch(letters, 0, letters.length, 'D'));
console.log(binarySearch(letters, 0, letters.length, 'O'));
console.log(binarySearch(letters, 0, letters.length, 'G'));


console.log("\nIterative Binary Search Test:");
console.log(iterativeBinarySearch([5,6,7,8,9], 9));
console.log(iterativeBinarySearch([5,6,7,8,9], 10));
console.log(iterativeBinarySearch([5,6,7,8,9], 8));
console.log(iterativeBinarySearch([5,6,7,8,9], 4));
console.log(iterativeBinarySearch([5,6,7,8,9], 6));

/******************* Binary Search Tree Testing Code *******************/

function randomNumBetween(min : number, max : number) : number
{
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log("\nCreating Binary Search Tree rooted at value 15:");
const tree : BinarySearchTree = new BinarySearchTree(15);

// Insert 10 random values into the BST
for (let i = 0; i < 10; i++)
{
    tree.insert(randomNumBetween(0, 101));
}

console.log("\nPrinting the inorder depth-first trversal;");
tree.depthFirstTraversal();

console.log("\nGet Some Nodes by Value:");
console.log(tree.getNodeByValue(33));
console.log(tree.getNodeByValue(18));
console.log(tree.getNodeByValue(99));
console.log(tree.getNodeByValue(100));
console.log(tree.getNodeByValue(42));
console.log(tree.getNodeByValue(69));