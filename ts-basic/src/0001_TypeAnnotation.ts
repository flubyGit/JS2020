/**
 * Type annotations são os tipos básicos de inferencia do TS
 *
 * String, number, boolean, Symbol, bigint[es2020], Arrays, Objetos, Funções
 */
const name = 'Felipe';

// Arrays

const arrayNumbers: Array<number> = [1, 2];
const _arrayNumbers: number[] = [1, 3];
const arrayString: Array<string> = ['Hi', 'Welcome'];
const _arrayString: string[] = ['Mouse', 'Computer'];

// Objects
const people: { name: string; age: number; isChild?: boolean } = {
  name: 'Felipe',
  age: 18,
};

// Functions

function sum(x: number, y: number): number {
  return x + y;
}
// const result: number = sum(2, 2)
const result = sum(2, 2);

const sum2: (x: number, y: number) => number = (x, y) => x + y;

export default name;