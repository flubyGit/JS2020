export class People {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }
  getCpf(): string {
    return this.cpf;
  }
  getCompleteName(): string {
    return `${this.name} ${this.surname}`;
  }
}

export class Student extends People {
  getCompleteName(): string {
    return `Alterado no estudante`;
  }
}
export class Client extends People {
  getCompleteName(): string {
    return `Alterado no cliente`;
  }
}

const student = new Student('Felipe', 'André', 19, '441.231.342-81');
const client = new Client('Felipe', 'André', 19, '441.231.342-81');
const people = new People('Felipe', 'André', 19, '441.231.342-81');
console.log(
  student.getCompleteName(),
  client.getCompleteName(),
  people.getCompleteName(),
);
