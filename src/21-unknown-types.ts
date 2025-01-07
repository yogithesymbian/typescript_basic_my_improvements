let broValue: unknown = 42;

if (typeof broValue === "number") {
  console.log(broValue.toFixed(2)); // Safe to call methods on value after narrowing the type
}
