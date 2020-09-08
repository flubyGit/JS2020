/**
 * Types e Interfaces são quase a mesma coisa
 * Nos types eu não posso ter declaration merges e na interface eu posso
 *
 * Types - Não tem Readonly
 * Interface - Pode usar
 */

type Localization = Array<string> | undefined;
export type People = {
  name: string;
};
interface I_People {
  // Posso duplicar interface porque elas se juntam - Declaration Merges
  readonly name: string;
}

interface I_People {
  age: number;
  readonly address: readonly string[];
  localization?: Localization;
}

const people: I_People = {
  age: 19,
  name: 'Felipe',
  address: ['Av. Brasil'],
};

// people.name = 'Outro'
// people.address.push('Rua nova');
console.log(people);
