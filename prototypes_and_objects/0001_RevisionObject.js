const people = {
  name: "Felipe",
  surname: "André",

  //key:value
};

// . notation
// console.log(people.name, people.surname);

const key = "name";
// colchete notation
// console.log(people["name"]);
// console.log(people[key]);

const people1 = new Object();

(people1.name = "Felipe"), (people1.surname = "André");
// delete people1.name;
people1.age = 18;
people1.getDataNasc = function () {
  const dateNow = new Date();
  return dateNow.getFullYear() - this.age;
};

people1.talkName = function () {
  // console.log(`${this.name} talk your name`);
};

people1.talkName();
// console.log(people1.getDataNasc());

for (let key in people1) {
  // console.log(key, people1[key], "chave and value");
}

// Factory Functions
function createPeople(name, surname) {
  return {
    name,
    surname,

    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  };
}
const p1 = createPeople("Felipe", "André");
console.log(p1.fullName);

// Constructor Functions

function People(name, surname) {
  this.name = name;
  this.surname = surname;

  Object.freeze(this);
}

const peopleByNew = new People("Felipe", "André");

// delete peopleByNew.name;
Object.freeze(peopleByNew);
console.log(peopleByNew);
