// Callback function type
type Callback = (message: string) => void;

function greetWithCallback(name: string, callback: Callback): void {
  const message = `Hello, ${name}`;
  callback(message);
}

greetWithCallback("Alice", (message) => {
  console.log(message); // Output: Hello, Alice
});
