// Conversão de um tipo para o outro

const body = document.querySelector('body'); // Condicional [ RECOMENDADO ]
if (body) body.style.background = 'red';

const body1 = document.querySelector('body')!; //[NAO MT RECOMENDADO] non-null assertion para remover o null e deixar so o tipo HTMLBodyElement

const body3 = document.getElementById('id') as HTMLBodyElement; // type assertion [RECOMENDADO]
body3.style.background = 'red';

// Saindo do tipo default pro tipo vazio pro número [ NADA RECOMENDADO ]
const input = (document.querySelector('input') as unknown) as number;

// input.* - Input é um numero, quando na real ele deveria ser um HTMLInputElement
