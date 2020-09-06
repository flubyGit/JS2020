/**
 * Object.assign - Clonagem de tipos
 * Object.keys - Retorna as chaves
 * Object.freeze - Congela as propriedades do objeto
 * Object.getOwnPropertyDescriptor - Ver propriedades de um objeto [enumerable, configurable, value]
 * Object.entries - Retorna chave e valor, porém, em array para cada key
 * Object.assign - A mesma coisa que spread operador
 */
const products = {
  name: "Xícara",
  price: 1.8,
};

const newProducts = { ...products, material: "Porcelana" };
newProducts.name = "Outra xícara";
const newProjectsAssign = Object.assign({}, products, {
  material: "porcelana",
});
// console.log(products);
// console.log(newProjectsAssign);
// console.log(newProducts);

// console.log(Object.keys(newProducts));
Object.freeze(newProducts);

const getOwnProducts = { ...products };

Object.defineProperty(getOwnProducts, "name", {
  writable: false,
  configurable: false,
  value: "Qualquer coisa",
});

// console.log(Object.getOwnPropertyDescriptor(getOwnProducts, "name"));

getOwnProducts.name = "Outro nome";

// console.log(getOwnProducts);
// console.log(Object.values(products));

for (let [key, value] of Object.entries(products)) {
  console.log(key, value);
}
