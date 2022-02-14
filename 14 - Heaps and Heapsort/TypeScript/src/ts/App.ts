
import { MaxHeap } from "./MaxHeap";
import { heapsort } from "./heapSort";

function randomNumBetween(min : number, max : number) : number
{
    return Math.floor(Math.random() * (max - min)) + min;
}

/******************* MaxHeap Testing Code *******************/


const myMaxHeap : MaxHeap = new MaxHeap();

for (let i = 0; i < 6; i++)
{
    myMaxHeap.add(randomNumBetween(1, 101));
}

console.log("Max Heap:\n");
console.log(myMaxHeap.toString());

/******************* heapsort Testing Code *******************/

console.log();

const myMaxHeap2 : MaxHeap = new MaxHeap();

for (let i = 0; i < 6; i++)
{
    myMaxHeap2.add(randomNumBetween(1, 101));
}

console.log(`Max Heap 2: ${myMaxHeap2.toString()}`);

const unorderedList : number[] = [99, 22, 61, 10, 21, 13, 23];
const sortedList : number[] = heapsort(unorderedList);

console.log(`List Sorted by HeapSort: [${sortedList}]`);