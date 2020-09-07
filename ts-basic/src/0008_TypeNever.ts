// Never é um tipo que nunca retorna nada

function createError(): never {
  throw new Error('Error');
}
console.log(createError());

// Aula 2

function createError_(): never {
  throw new TypeError('Type incorrect');
}

console.log(createError_());
