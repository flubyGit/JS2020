const arrayFruits = ["Maça", "Pera", "Goiaba"];

// classico
// for(let i =0;i<arrayFruits.length;i++) {
//   console.log(arrayFruits)
// }
for (let i in arrayFruits) {
  console.log(i); // Indice dos array
  console.log(arrayFruits[i]); // Nome das frutas
}

const people = {
  name: "Lucas",
  age: 12,
  like: "Javascript",
  surname: "Moura",
};

for (let keys in people) {
  console.log(keys, people[keys]);
}
