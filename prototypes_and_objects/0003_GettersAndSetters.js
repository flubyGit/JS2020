/**
 * Getters e Setters são metódos especiais para buscar e alterar valores
 */

function Product(name = "Felipe", price = 0, stock) {
  this.name = name;
  this.price = price;

  let privateStock = stock;

  Object.defineProperty(this, "stock", {
    configurable: true,
    enumerable: true,
    get: function () {
      return stock;
    },
    set: function (value) {
      if (typeof value !== "number") return new TypeError("Tipo errado");
      privateStock = value;
    },
  });
}

const product = new Product("Julio", 20, 3);
console.log(product.stock, " 1");
product.stock = 500;
console.log(product.stock, " 2");
