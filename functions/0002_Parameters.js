function parameters() {
  // console.log(arguments[0]);
}
parameters("Valor");

// Arguments sustenta todos os argumentos enviados
// a palavra arguments só funciona com a palavra function
function sum() {
  let total = 0;

  for (let argument of arguments) {
    total += argument;
  }
  // console.log(total);
}
sum(1, 2, 3, 4, 5, 6, 7);

function defaults(a, b = 0) {
  // b = b || 0;
  console.log(a + b);
}

defaults(2);

function destructuringObject({ name, surname, age }) {
  console.log(name, age, surname);
}
function destructuringArray([v1, v2, v3]) {
  console.log(v1, v2, v3);
}
let obj = { name: "Felipe", age: 18, surname: "André" };
let array = [1, 2, 3];
// destructuringObject({ name: "Felipe", age: 18, surname: "André" });
// destructuringObject(obj);
// destructuringArray(array);
// destructuringArray([3, 2, 1]);

// function count(op, ac, ...numbers) {
//   for (let n of numbers) {
//     if (op === "+") ac += n;
//     if (op === "-") ac -= n;
//     if (op === "/") ac /= n;
//     if (op === "*") ac *= n;
//   }
//   console.log(ac);
// }
const account = function (op, ac, ...numbers) {
  console.log(arguments); // Se mudar para arrow function, isso nao existe

  // for (let n of numbers) {
  //   if (op === "+") ac += n;
  //   if (op === "-") ac -= n;
  //   if (op === "/") ac /= n;
  //   if (op === "*") ac *= n;
  // }
  // console.log(ac);
};
account("*", 2, 20, 30, 40, 50);
