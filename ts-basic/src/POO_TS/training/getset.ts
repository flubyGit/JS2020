class Telephone {
  constructor(public _model: string, public name: string) {}

  get model(): string {
    return this._model;
  }
  set model(value: string) {
    this._model = value;
  }
}

export class User extends Telephone {
  constructor(_model: string, name: string, public username: string) {
    super(_model, name);
  }

  get model(): string {
    return this._model;
  }
  set model(value: string) {
    this._model = value;
  }
}

export class Salesman extends User {
  constructor(
    _model: string,
    name: string,
    username: string,
    public _name_vendor: string,
  ) {
    super(_model, name, username);
  }

  get name_vendor(): string {
    return this._name_vendor;
  }

  set name_vendor(value: string) {
    this._name_vendor = `${value.toLowerCase().trim()}`;
  }
}

const salesman = new Salesman('Samsung', 'Celular', 'Júlio', 'Mateus');

salesman.name_vendor = 'Mateus                    ';

console.log(salesman);
