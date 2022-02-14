import { LinkedList } from "./LinkedList";
import { LLHashMap } from "./LLHashMap";

const numList : LinkedList = new LinkedList();

numList.addToBeginning(1);
numList.addToBeginning(2);
numList.addToBeginning(3);
numList.addToBeginning(4);

console.log("\nLoop over list using a for/of Loop:");

for (let num of numList)
{
    console.log(`Number: ${num}`);
}


console.log(`\nList is empty: ${numList.isEmpty()}`);
console.log(`List Size: ${numList.size}`);
console.log("\nList:");
console.log(numList.toString());

console.log("Remove 2 and 3:\n");
console.log("Removed: " + numList.remove(2));
console.log("Removed: " + numList.remove(3));
console.log(`\nList is empty: ${numList.isEmpty()}`);
console.log(`List Size: ${numList.size}`);
console.log(numList.toString());

console.log("LLHashMap Tests");
console.log("---------------");

const myHashMap = new LLHashMap();

myHashMap.set("Hello", "World");
myHashMap.set("Apple", "Red");
myHashMap.set(2022, "Year");

console.log(myHashMap.get("Hello"));
console.log(myHashMap.get("Apple"));
console.log(myHashMap.get(2022));

console.log("\nRemove Apple...");
myHashMap.remove("Apple");
console.log("Get Apple: " + myHashMap.get("Apple"));