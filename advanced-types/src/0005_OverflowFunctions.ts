type Adder = {
  (x: number): number;
  (y: number, x: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args?.length > 0) return args.reduce((ac, value) => ac + value, 0) + x + (y || 0);

  return x + (y || 0);
};
class Add {
  constructor(public _name: string) {}

  get name(): string {
    return this._name;
  }
}
const add = new Add("map");

if (add instanceof Add && 0 in add) console.log(adder(1));
