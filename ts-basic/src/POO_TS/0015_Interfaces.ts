interface TypePeople {
  name: string;
  surname: string;
}
interface TypeCompleteName {
  completeName(): string;
}

interface Peoples extends TypePeople, TypeCompleteName {}

export class People implements Peoples {
  constructor(public name: string, public surname: string) {}

  completeName(): string {
    return `${this.name} ${this.surname}`;
  }
}

const peopleObject: Peoples = {
  name: 'Bruno',
  surname: 'Santos',
  completeName: function () {
    return this.name;
  },
};
console.log(peopleObject, peopleObject.completeName());
const people = new People('Felipe', 'André');
console.log(people.completeName());
