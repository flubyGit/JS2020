// Declaração (function hoisting)
talkOi();
function talkOi() {
  console.log("Oi");
}
talkOi(); // Posso chamar ela aqui ou antes, pq o hoisting vai elevar a func

// First-class objects (Objetos de primeira classe)
// Function expression
const talkData = function () {
  console.log("I'm a data");
};
talkData();

function exec(func) {
  func();
}
exec(talkData);

// Arrow Function

const arrowFunc = () => {
  console.log("I'm a arrow function");
};
arrowFunc();

// Dentro de um objeto

const object = {
  people() {
    console.log("People");
  },
};

object.people();
