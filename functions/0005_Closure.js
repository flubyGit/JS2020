function createOtherFunction() {
  const name = "Luiz";
  return function () {
    return name;
  };
}

const func = createOtherFunction();
console.log(func);
