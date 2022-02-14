import { Queue } from "./Queue";

console.log("Creating a deli line with up to 10 orders...\n------------");
const deli_line = new Queue(10);
console.log("Adding orders to our deli line...\n------------");

deli_line.enqueue("egg and cheese on a roll");
deli_line.enqueue("bacon, egg, and cheese on a roll");
deli_line.enqueue("toasted sesame bagel with butter and jelly");
deli_line.enqueue("toasted roll with butter");
deli_line.enqueue("bacon, egg, and cheese on a plain bagel");
deli_line.enqueue("two fried eggs with home fries and ketchup");
deli_line.enqueue("egg and cheese on a roll with jalapeos");
deli_line.enqueue("plain bagel with plain cream cheese");
deli_line.enqueue("blueberry muffin toasted with butter");
deli_line.enqueue("bacon, egg, and cheese on a roll");

// Queue is full
deli_line.enqueue("western omelet with home fries");

console.log("------------\nOur first order will be " + deli_line.peek());
console.log("------------\nNow serving...\n------------");

deli_line.dequeue();
deli_line.dequeue();
deli_line.dequeue();
deli_line.dequeue();
deli_line.dequeue();
deli_line.dequeue();
deli_line.dequeue();
deli_line.dequeue();
deli_line.dequeue();
deli_line.dequeue();

// Queue already empty
deli_line.dequeue();