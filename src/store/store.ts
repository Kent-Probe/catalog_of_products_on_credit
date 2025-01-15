import seed from "@/seed/seed.json";
import { atom } from "nanostores";

const productsValues = seed.products;

export const products = atom(productsValues);
export const productsWithFilters = atom(productsValues);

export const loginValues = atom({
  token: "",
  user: {
    username: "",
    name: "",
    rol: "",
  },
});

export const filters = atom({
  search: "",
  financials: ["Celya", "Krediya", "Alo Cred"],
  ram: {
    min: 2,
    max: 512,
  },
  rom: {
    min: 8,
    max: 1024,
  },
  camera: {
    min: 5,
    max: 299,
  },
  battery: {
    min: 2000,
    max: 10000,
  },
});
