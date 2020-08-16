// Array<T>, T[]

function multipleArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

// Não precisaria inferir o tipo já que o retorno da função é um número
const result: number = multipleArgs(1, 2, 3);
console.log(result);

function concatString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

const concat = concatString('Hi', 'Welcome');
console.log(concat);

function toUpperCase(...args: Array<string>): string {
  return args.toString().toUpperCase().trim();
}

const upper = toUpperCase('My name is Felipe');
console.log(upper);

// Retorno pode ser array de tipos

export function toUpperCaseByMap(...args: string[]): Array<string> {
  return args.map((arg) => arg.toUpperCase().trim());
}
const upperByMap = toUpperCase('Nice to meet you');
console.log(upperByMap);
