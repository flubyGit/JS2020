export function mapStrings(...args: Array<string>): string[] {
  return args.map((arg) => arg.toString().toUpperCase().trim());
}

console.log(mapStrings('Felipe', 'André'));

type ArrStr = Array<string>;
type Item = string;

type MapStringsToCallback = (item: Item) => Item;

export function mapCb(array: ArrStr, cb: MapStringsToCallback): ArrStr {
  const newArray: ArrStr = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const acbMapped = mapCb(abc, (item: Item) => item.toUpperCase());
console.log(abc);
console.log(acbMapped);
