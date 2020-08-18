let x = 50;

function out() {
  let x = 1000; // Aqui o escopo local será mais forte que o escopo de cima
  return function sumX() {
    return x + 3;
  };
}

module.exports = out();
