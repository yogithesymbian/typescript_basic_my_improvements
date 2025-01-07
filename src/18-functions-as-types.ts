// Define a type for a function that takes two numbers and returns a number
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => a + b;

console.log(add(5, 10)); // Output: 15
