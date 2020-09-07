/**
 * Public - Acessado dentro e fora da classe e em todas as subclasses que extendeerem (posso omitir)
 * Private - Não posso mexer nele fora da classe
 * Protected - Posso mexer fora da classe através de modificador
 */
export class Company {
  // forma longa
  public readonly name: string;
  private readonly colaborators: Colaborator[] = [];
  protected readonly cnpj: string;

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

export class Colaborator {
  // Aqui o públic precisa ser passado!
  constructor(public readonly name: string, public readonly surname: string) {}
}

const company = new Company('Coca-Cola', '11.111.111/1111-11');
// company.name = 'Facebook'; // readonly
// console.log(company.name); // public, posso pegar

const colaborator1 = new Colaborator('Felipe', 'André');
const colaborator2 = new Colaborator('Maria', 'José');
const colaborator3 = new Colaborator('Douglas', 'D');

company.addColaborator(colaborator1);
company.addColaborator(colaborator2);
company.addColaborator(colaborator3);

console.log();
