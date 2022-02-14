import { DoublyLinkedList } from "./DoublyLinkedList";

const subway : DoublyLinkedList = new DoublyLinkedList();

subway.addToHead("Times Square");
subway.addToHead("Grand Central");
subway.addToHead("Central Park");
console.log(subway.toString());

subway.addToTail("Penn Station");
subway.addToTail("Wall Street");
subway.addToTail("Brooklyn Bridge");
console.log(subway.toString());

subway.removeHead();
subway.removeTail();
console.log(subway.toString());

subway.removeByValue("Times Square");
console.log(subway.toString());