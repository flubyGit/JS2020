const imports = "Import";
const exports = "Export";
const age = 30;

const defaultConst = "Constant padrão";

export const inline = "Export inline";

function sum(x, y) {
  return x + y;
}
export default function exportInline() {}

export class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

// export default arrow = (x, z) => z * x; // vai dar erro pq tenho dois exports default

export {
  // defaultConst as default,
  imports,
  exports,
  age,
  sum as funcSum,
};
