type whoAddress = {
  street: string;
  city: string;
  postalCode: string;
};

type yoEmployee = {
  id: number;
  name: string;
  address: whoAddress;
};

const employee: yoEmployee = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    postalCode: "12345",
  },
};
