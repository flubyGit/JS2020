class Store {
  private readonly employees: Array<Employees> = [];
  constructor(
    protected _boss: string | null,
    protected name: string,
    protected state: boolean,
  ) {}

  public addEmployees(...employees: Employees[]): void {
    for (const employee of employees) {
      this.employees.unshift(employee);
    }
  }

  set boss(name: string) {
    this._boss = name;
  }

  get level(): string {
    return this.level;
  }
}
class Employees {
  constructor(public name: string, public level: string) {}
}

const store = new Store(null, 'Loja C&O', true);
const employeeNew = new Employees('Felipe', 'Júnior');
store.addEmployees(employeeNew);
store.boss = 'Patrício';
console.log(store);
