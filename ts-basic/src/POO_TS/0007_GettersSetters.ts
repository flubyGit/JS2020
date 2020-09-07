/**
 * Getters - Obter um valor atraves de uma função
 * Setters - Atualizar um valor através de uma função
 */

export class People {
  constructor(
    private name: string,
    private surname: string,
    private age: number,
    private _cpf: string,
  ) {}

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const people = new People('Felipe', 'André', 19, '056.050.730-52');
console.log(people);
people.cpf = '175.112.325-53';
console.log(people.cpf);
