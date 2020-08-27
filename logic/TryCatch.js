// try {
//   console.log("Tente executar");
//   console.log(variavel);
// } catch (error) {
//   console.log(error, "Deu erro");
// }

function sum(x, y) {
  try {
    if (typeof x === "number" && typeof y === "number") return x + y;
  } catch (error) {
    console.log(error);
    throw new TypeError("X e Y precisam ser números");
  }
}

console.log(sum(15, 4));
console.log(sum("15", "4"));
