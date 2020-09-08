/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */

/**
 * instanceof - Algo foi imstanciado por uma classe?
 * in - Saber se algo está dentro de um objeto, array ou algo
 */

export default function add(a: unknown, b: unknown): string | number {
  return typeof a === "number" && typeof b === "number" ? a + b : `${a}${b}`;
}

console.log(add(1, 2));
console.log(add("1", "2"));

type People = {
  name: string;
  type: "People";
};
type Animal = {
  color: string;
  type: "Animal";
};
type PeopleOrAnimal = People | Animal;

class Student implements People {
  type: "People" = "People";

  constructor(public name: string) {}
}

function showName(object: PeopleOrAnimal): void {
  if ("name" in object) console.log(object.name);
  if (object instanceof Student) console.log(object.name);
}

showName(new Student("João"));
showName({ type: "Animal", color: "Purple" });
