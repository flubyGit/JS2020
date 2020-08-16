let x;
if (typeof x === 'undefined') x = 20;
console.log(x * x);

function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2);
const squareOfThoStr = squareOf('');

if (squareOfTwo === null) {
  console.log('Invalid');
} else console.log(squareOfTwo);
