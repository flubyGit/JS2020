/**
 * Product - Increase, Discount
 * Camiseta = Cor
 * Caneca = Material
 * @param {string} name
 * @param {number} price
 */

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increase = function (quantity) {
  this.price += quantity;
};
Product.prototype.descount = function (quantity) {
  this.price -= quantity;
};

function Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}
Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

Shirt.prototype.increase = function (percent) {
  this.price = this.price + (this.price * percent) / 100;
};

function Mug(name, material, color = "Green", stock) {
  Shirt.call(this, name, material, color);
}

Mug.prototype = Object.create(Shirt.prototype);
Mug.prototype.constructor = Mug;

Mug.prototype.increase = function (value) {
  this.name = value;

  Object.defineProperty(this, "stock", {
    enumerable: true,
    configurable: false,
    get: function () {
      return stock;
    },
    set: function (value) {
      if (typeof value !== "number") return new TypeError("Erro de tipagem");
      return value;
    },
  });
};

const product = new Product("Genérico", 20);
const shirt = new Shirt("Regata", 7.5, "Preta");
const mug = new Mug("Caneca de Vidro", "Porcelana");

shirt.increase(100);

console.log(product);
console.log(shirt);
console.log(mug);
mug.increase("Caneca de plástico");
