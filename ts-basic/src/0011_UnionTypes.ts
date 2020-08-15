// Colocar um ou mais tipos

function addOrConcat(a: number | string, b: number | string): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));

// Usando types
type Props = string | number;

function concatOrAdd(a: Props, b: Props): Props {
  if (typeof a === 'number' && typeof b == 'number') return a + b;

  return `${a}`.concat(`${b}`);
}

console.log(concatOrAdd(20, 20));
console.log(concatOrAdd('20', 20));
console.log(concatOrAdd('20', '20'));
console.log(concatOrAdd(20, '20'));
