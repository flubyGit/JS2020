type Age = number;
const age: Age = 12;

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYk = 'Ciano' | 'Magenta' | 'Yellow' | 'Black';

type Color = ColorRGB | ColorCMYk;

type _People = {
  name: string;
  age: Age;
  salary: number;
  color?: Color;
};
const peopleData: _People = {
  age: 30,
  name: 'Cristiana',
  salary: 1500,
  color: 'Ciano',
};

export function setColorPreferred(people: _People, color: Color): _People {
  return { ...people, color };
}

console.log(setColorPreferred(peopleData, 'Magenta'));

// Mesmo depois da alteração da cor, o objeto peopleData se mantém
console.log(peopleData);

// Aula 2

type Aged = number;
type Person = {
  name: string;
  age: Aged;
  salary: number;
  color?: string;
};

type ColorsRGB = 'Red' | 'Green' | 'Blue';
type ColorsCMK = 'Ciano' | 'Magenta' | 'Preto';

type PreferColor = ColorsRGB | ColorsCMK;

const my: Person = {
  age: 18,
  name: 'Júnior',
  salary: 2000,
  color: 'Red',
};

export function setMyColorPrefer(people: Person, color: PreferColor): Person {
  return {
    ...people,
    color,
  };
}

console.log(setMyColorPrefer(my, 'Preto'));
