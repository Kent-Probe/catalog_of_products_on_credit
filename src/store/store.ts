import type { ProductsType } from "@/type/products";
import { atom } from "nanostores";

export const isLoading = atom(false);

export const products = atom<ProductsType[]>([]);
export const productsWithFilters = atom(products);

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
