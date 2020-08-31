export function functionThis(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

functionThis.call(new Date(), 'Felipe', 19);
functionThis.apply(new Date(), ['Felipe', 19]);
