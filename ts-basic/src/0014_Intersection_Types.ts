type HasName = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };
type Blood = 'A' | 'B';
type newBlood = 'A' | 'C';

type Bloods = Blood & newBlood;

// No union types, os tipos são opcionais
type People_ = HasName | HasSurname | HasAge;

// Com o intersection types eu preciso passar explicitamente os tipos
type IntersectionType = HasName & HasSurname & HasAge;

const object: IntersectionType = {
  age: 80,
  name: 'Mauricio', // Passei os 3 parametros
  surname: '',
};
const object1: People_ = {
  age: 10, // Não vai dar erro, por que eu utilizei o operador "'OR'"
};
console.log(object);

export { object };
