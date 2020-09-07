const _velocity = Symbol("velocity");

class Car {
  constructor(name) {
    this.name = name;
    this[_velocity] = 0;
  }
  set velocity(value) {
    if (typeof value !== "number") return new TypeError("Type incorrect!");
    if (value >= 100 || value <= 0) return;

    this[_velocity] = value;
  }
  get velocity() {
    return this[_velocity];
  }
  speedUp() {
    if (this[_velocity] >= 100) return;
    this[_velocity]++;
  }

  brake() {
    if (this[_velocity] <= 0) return;
    this[_velocity]--;
  }
}

const c1 = new Car("Fusca");

c1.velocity = 99; // Setter
console.log(c1.velocity); // Getter

class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  get fullNameComplete() {
    return `${this.name} ${this.surname}`;
  }

  set nameComplete(value) {
    name = value.split(" ");
    this.name = value.shift();
    this.sobrenome = value.join();
  }
}

const people = new People("Luiz", "Otávio");

console.log(
  people.fullNameComplete,
  people.nameComplete,
  people.name,
  people.surname
);
