/**
 * Type annotations são os tipos básicos de inferencia do TS
 *
 * String, number, boolean, Symbol, bigint[es2020], Arrays, Objetos, Funções
 */
const name = 'Felipe';

// Arrays

const arrayNumbers: Array<number> = [1, 2, 3];
const arrayStrings: Array<string> = ['1, 2, 3'];
const arrayStrings1: string[] = ['1, 2, 3'];
const arrayNumbers1: number[] = [1, 2, 3];

// Objetos

interface People {
  name: string;
  age: number;
  child?: boolean;
}

const people: People = {
  name: 'Felipe',
  age: 18,
};

console.log(people.name);

function sum(x: number, y: number) {
  return x + y;
}
const sum2: (x: number, y: number) => number = (x, y) => x + y;

export default name;
