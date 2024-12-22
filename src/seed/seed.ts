const productos = require("./seed.json").productos;

export function getAll() {
  return productos;
}
