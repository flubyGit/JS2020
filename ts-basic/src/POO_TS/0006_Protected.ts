/**
 * Public - Acessado dentro e fora da classe(posso omitir)
 * Private - Não posso mexer ele fora da classe
 * Protected - Posso mexer na classe instanciada e em subclasses através de modificador
 */
export class Company {
  // forma longa
  public readonly name: string;
  protected readonly colaborators: Colaborator[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  public addColaborator(colaborator: Colaborator): void {
    this.colaborators.push(colaborator);
  }
  showColaborator(): void {
    for (const colaborators of this.colaborators) {
      console.log(colaborators);
    }
  }
}

export class Udemy extends Company {
  constructor() {
    super('Udemy', '11.111.111/1111-11');
  }
  popColaborator(): Colaborator | null {
    console.log(this.colaborators, 'Colaboradores');
    const colaborator = this.colaborators.pop();
    if (colaborator) return colaborator;

    return null;
  }
}

export class Colaborator {
  constructor(public readonly name: string, public readonly surname: string) {}
}
'';
const company = new Udemy();
// company.name = 'Facebook'; // readonly
// console.log(company.name); // public, posso pegar

const colaborator1 = new Colaborator('Felipe', 'André');
const colaborator2 = new Colaborator('Maria', 'José');
const colaborator3 = new Colaborator('Douglas', 'D');

company.addColaborator(colaborator1);
company.addColaborator(colaborator2);
company.addColaborator(colaborator3);

company.showColaborator();
company.popColaborator();
const colaboratorRemoved = company.popColaborator();
console.log(colaboratorRemoved, 'Removed');
console.log(company, 'Empresa Udemy');
