type TypePeople = {
  name: string;
  surname: string;
};
type TypeCompleteName = {
  completeName(): string;
};

type Intersection = TypePeople & TypeCompleteName;

export class People implements Intersection {
  constructor(public name: string, public surname: string) {}

  public completeName(): string {
    return `${this.name} ${this.surname}`;
  }
}

const people = new People('Felipe', 'André');
console.log(people.completeName());
