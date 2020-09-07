// Tupla é um Array com tipos e tamanhos fixos

// Cada [arg,arg1] é referente a posição atual do array

// [number] = posicao[0]
// [string] = posicao[1]

const clients: [number, string, boolean?] = [1, 'Luiz'];

clients[0] = 100; // Ok
// clients[1] = 100; // Error, indice da pos é string
// clients[2] = false // Error, pois não informe um tipo
clients[2] = false;

// Readonly Array
// Com o readonly, metodos de adicionar, remover do Array não funcionam
const imutable: readonly [number, boolean, string] = [1, false, '8'];
const ts_imutable: ReadonlyArray<boolean> = [false];

console.log(imutable, ts_imutable);

// Aula 2
// Tuplas
const dataClient: [number, string] = [1, 'Júlia'];
const dataClient2: [Array<string>, Array<number>, boolean?] = [
  ['Olá', 'Welcome'],
  [1, 2, 3],
  true,
];
// const dataClient3: readonly [Array<string>, Array<number>, ...string[]] = [
//   ['Olá', 'Welcome'],
//   [1, 2, 3],
// ];

// dataClient3.unshift(); // Não pode pq a dupla é imutável

dataClient[0] = 12;
dataClient2[0] = ['Fruits', 'Animals'];

const imutableArr: ReadonlyArray<string> = ['Luiz', 'Otávio'];
// ReadonlyArray

const peopleRocketseat: readonly [string, string, string] = [
  'Diego',
  'Mayke',
  'Guilherme',
];
