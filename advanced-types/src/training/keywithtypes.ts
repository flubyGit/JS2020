/**
 * Consigo utilizar chaves como tipagem
 */

interface Mouse {
  name: string;
  price: number;
  properties?: Array<string>;
}

export interface People {
  name: Mouse["name"]; // Pegando o tipo da interface Mouse = string
  age: Mouse["price"];
  propertiesBody: Mouse["properties"];
}

const people: People = {
  name: "Felipe",
  age: 18,
  propertiesBody: ["body", "head", "heart"],
};

if (0 in people) {
  console.log(people, "Pessoa");
}
