function* generator() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

const g1 = generator();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());

for (let value of g1) {
  console.log(value);
}

function* counter() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}
const counterVar = counter();
// console.log(counterVar.next().value);
// console.log(counterVar.next().value);
// console.log(counterVar.next().value);
// console.log(counterVar.next().value);
// console.log(counterVar.next().value);

function* generatorOther() {
  yield 0;
  yield 1;
  yield 2;
}
function* generatorSon() {
  yield* generatorOther();
  yield 3;
  yield 4;
  yield 5;
}
const result = generatorSon();

// for (let res of result) {
//   console.log(res);
// }

function* generators() {
  yield () => {
    console.log("Vim do yield 1");
  };
  return () => {
    console.log("Yield 2 não sera executada");
  };
  // yield () => {
  //   console.log("Vim do yield 2");
  // };
}
const g5 = generators();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
