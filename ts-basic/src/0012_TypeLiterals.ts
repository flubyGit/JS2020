let x = 10; // eslint-disable-line
x = 0b1010;

let six: 6 = 6 //eslint-disable-line
// six = 120; // Erro. six nao pode ser atribuido para outro valor

let five = 5 as const //eslint-disable-line
// Module mode
export default x;

const person = {
  name: 'Luiz' as const,
  age: 12,
  surname: 'André',
};

function choiseColors(color: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return color;
}

console.log(choiseColors('Amarelo'));

// person.name = 'Julia'; // Erro pq o tipo é Luiz
