// Returna um valor e termina a funcao

function sum(a, b) {
  return a + b;
}

// document.addEventListener("click", () => {
//   document.body.style.backgroundColor = "red";
// });

function createPeople(name, surname) {
  return {
    name,
    surname,
  };
}
const p1 = createPeople("Felipe", "André");
// console.log(p1);

// function talkPhrase(start) {
//   function talkRest(rest) {
//     return start + "" + rest;
//   }
//   return talkRest;
// }
// const helloWorld = talkPhrase("Hi ");
// const res = helloWorld("Opa");
// console.log(res);

function createMultiply(multi) {
  // function double(n) {
  //   return n * multi;
  // }
  // return double;

  return function (n) {
    return n * multi;
  };
}

const triplicate = createMultiply(3);
const response = triplicate(10);
console.log(response);
