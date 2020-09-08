/**
 * Static methods são metódos que não podem ser acessados no escopo global como um setter,
 * porém, eu posso acessar ele instanciando a classe diretamente.
 */

export class People {
  static defaultAge = 0;
  static defaultCPF = '000.000.000.00';

  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public cpf: string,
  ) {}

  method(): void {
    console.log(People.defaultAge, People.defaultCPF);
  }

  static createPerson(name: string, surname: string): People {
    return new People(name, surname, People.defaultAge, People.defaultCPF);
  }
}

new People('Felipe', 'André', 19, '443.231.819-51');
const people2 = People.createPerson('Felipe', 'André');

// console.log(people2, 'Pessoa');
console.log(people2.method, '?');
console.log(People.defaultAge, People.defaultCPF);
