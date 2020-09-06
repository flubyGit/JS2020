// // new Object -> Object.prototype
// const objectA = {
//   keyA: "valueA",
//   // __proto__
// };
// // objectA.__proto__ == Object.prototype

// const objectB = {
//   keyB: "valueB",
//   // __proto__
// };
// // objectA.__proto__ == Object.prototype

// const objectC = new Object();
// objectC.keyC = "valueC";

// Object.setPrototypeOf(objectB, objectA);
// Object.setPrototypeOf(objectC, objectB);

// console.log(objectC.keyA);

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function (percent) {
  this.price = this.price - this.price * (percent / 100);
};
Product.prototype.increase = function (percent) {
  this.price = this.price + this.price * (percent / 100);
};

const p1 = new Product("Geladeira", 50);
// p1.discount(100);
p1.increase(100);

const p2 = {
  name: "Caneca",
  price: 15,
};

Object.setPrototypeOf(p2, Product.prototype);

p2.increase(15);

const p3 = Object.create(Product.prototype);
p3.price = 100;
p3.discount(50);

const p4 = Object.create(Product.prototype, {
  price: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 42,
  },
  weight: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 90,
  },
});

console.log(p1, p2, p3, p4);
