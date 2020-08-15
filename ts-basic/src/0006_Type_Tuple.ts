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
