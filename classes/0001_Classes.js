class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  talk() {
    console.log(`${this.name} it its talking`);
  }
  eat() {
    console.log(`${this.name} it its eating`);
  }
  drink() {
    console.log(`${this.name} it its drinking`);
  }
}

const people = new People("Felipe", "André");
const people2 = new People("Julia", "Moreira");
const people3 = new People("João", "kids");

const fullPeoples = {
  p1: people,
  p2: people2,
  p3: people3,
};

// Mesma coisa com funções constructoras
function People2(name, surname) {
  this.name = name;
  this.surname = surname;
}
People2.prototype.talk = function () {
  console.log(`${this.name} it its talking`);
};
People2.prototype.eat = function () {
  console.log(`${this.name} it its eating`);
};
People2.prototype.drink = function () {
  console.log(`${this.name} it its drinking`);
};
