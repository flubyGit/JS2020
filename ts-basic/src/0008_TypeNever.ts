// Never é um tipo que nunca retorna nada

function createError(): never {
  throw new Error('Error');
}
console.log(createError());
