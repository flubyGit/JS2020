// Constructora - molde (Classe)

function People(name, surname) {
  this.name = name;
  this.surname = surname;
  // this.completeName = () => `${this.name} ${this.surname}`;
}

People.prototype.nameComplete = function () {
  return `${this.name} ${this.surname}`;
};

const instancePeople = new People("Felipe", "André");
const instancePeople2 = new People("Maria", "Luiza");
const date = new Date();

console.dir(instancePeople);
console.dir(date);
