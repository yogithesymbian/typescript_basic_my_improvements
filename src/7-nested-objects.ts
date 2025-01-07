interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface Person {
  name: string;
  address: Address;
}

const person: Person = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
  },
};
