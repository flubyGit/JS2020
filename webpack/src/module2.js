export class Phones {
  constructor(price, age) {
    this.price = price;
    this.age = age;
  }

  priceAndAge(price, age) {
    return `${price}-${age}`;
  }
}

export class Fruits {
  constructor(name, good) {
    this.name = name;
    this.good = good;
  }
  everyFruit(name, good = true) {
    console.log(`${name} is  ${good === true ? "boa" : "estragada"}`);
  }
}
