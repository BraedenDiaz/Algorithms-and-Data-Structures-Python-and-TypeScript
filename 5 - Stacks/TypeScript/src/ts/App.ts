import { Stack } from "./Stack";

const pizzaStack = new Stack(6);

pizzaStack.push("pizza #1");
pizzaStack.push("pizza #2");
pizzaStack.push("pizza #3");
pizzaStack.push("pizza #4");
pizzaStack.push("pizza #5");
pizzaStack.push("pizza #6");

// Stack is full
pizzaStack.push("pizza #7");

console.log("The first pizza to deliver is " + pizzaStack.peek());

pizzaStack.pop();
pizzaStack.pop();
pizzaStack.pop();
pizzaStack.pop();
pizzaStack.pop();
pizzaStack.pop();

// Stack is empty
pizzaStack.pop();