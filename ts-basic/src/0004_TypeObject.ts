// const objectA: Record<string, unknown> = {
//   key: 'Value A',
//   keyB: 'Value B',
// };

const objectA = {
  // Inferencia de tipos, passar o mouse
  apple: 'Good',
  banana: 'Bad',
};

const objects: {
  readonly key: string;
  keyB: string;
  [key: string]: unknown;
} = {
  key: 'A',
  keyB: 'B',
};

objects.keyC = 'Outro valor';
console.log(objects);
