export type Supplier = {
  id?: number;
  name: string;
  description: string;
  contacts: { name: string; number: string }[];
  addressCep: string;
  addressState: string;
  addressCity: string;
  address: string;
  addressNumber: number;
  addressReference: string;
};

export type Login = {
  email: string;
  password: string;
};

export type Register = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
