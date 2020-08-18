// Escopo global
function createOtherFunction() {
  // Escopo pai
  const name = "Luiz";
  return function () {
    // Escopo Local
    return name;
  };
}

const func = createOtherFunction();
console.log(func);
