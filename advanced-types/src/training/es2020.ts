/**
 * // Encadeamento opcional - ?
 * Serve pra checar pra direita se eu vou ter alguma propriedade
 *
 *
 * // Operador de coalescência nula
 */

const object = {
  array: [{ name: "Felipe", age: [{ now: 19, before: 18 }] }],
};

const optionalChaning = object.array.map(iteration => iteration?.name);
const iteration = object?.array.map(f => f.age).map(sec => sec?.map(item => item.before));

console.log(optionalChaning ?? Error("OptionalChaning is null or a undefined"));
console.log(iteration ?? Error("Iteration is null or a undefined"));
