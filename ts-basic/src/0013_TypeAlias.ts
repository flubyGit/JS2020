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
