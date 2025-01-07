function throwError(message: string): never {
  throw new Error(message); // Function never returns a value
}

throwError("Something went wrong!");
