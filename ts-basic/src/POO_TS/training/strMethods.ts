class Computer {
  public _name: string;
  public readonly value: number = 1500;

  constructor(_name: string, value: number) {
    this.value = value;
    this._name = _name;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    const generation: string = value === 'i3' ? 'i3' : '';
    this._name = value
      .replace(generation, 'i7')
      .trim()
      .toLowerCase()
      .concat(' new generation');
  }
}

const computer = new Computer('i3', 2000);
computer.name = '';
console.log(computer, 'Computador');
