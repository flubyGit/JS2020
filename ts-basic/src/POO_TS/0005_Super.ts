/**
 * Classe base/super/parent é a class Mãe de todas as filhas
 * People é a super classe
 * Aluno e Student é a sub classe
 */

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
  constructor(
    name: string,
    surname: string,
    age: number,
    cpf: string,
    public room: string,
  ) {
    super(name, surname, age, cpf);
  }

  getCompleteName(): string {
    console.log('Fazendo algo antes');
    const result = super.getCompleteName();

    return result;
  }
}
export class Client extends People {
  getCompleteName(): string {
    return `Alterado no cliente`;
  }
}

const student = new Student('Felipe', 'André', 19, '441.231.342-81', '0001');
const client = new Client('Felipe', 'André', 19, '441.231.342-81');
const people = new People('Felipe', 'André', 19, '441.231.342-81');
// console.log(
//   student.getCompleteName(),
//   client.getCompleteName(),
//   people.getCompleteName(),
// );

console.log(student);
