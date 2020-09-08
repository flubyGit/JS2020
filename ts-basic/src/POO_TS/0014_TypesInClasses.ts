type TypePeople = {
  name: string;
  surname: string;
};
type TypeCompleteName = {
  completeName(): string;
};

export class People implements TypePeople, TypeCompleteName {
  constructor(public name: string, public surname: string) {}

  public completeName(): string {
    return `${this.name} ${this.surname}`;
  }
}

const people = new People('Felipe', 'André');
console.log(people.completeName());
