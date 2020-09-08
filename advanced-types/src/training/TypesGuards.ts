/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
type IntersectionTypes = Array<string>;
type IntersectionStringOrNull = string | null;

interface IProps {
  name: IntersectionStringOrNull;
  names: IntersectionTypes;
}

class Eletronic implements IProps {
  constructor(
    public _name: IntersectionStringOrNull,
    public _names: IntersectionTypes
  ) {}

  get name(): IntersectionStringOrNull {
    console.log(this._name);

    return this._name;
  }

  set names(value: IntersectionTypes) {
    this._names = value?.filter(name => name.trim());
  }
}

const eletronic = new Eletronic("Play 4", []);
eletronic.names = ["Gameboy"];

if (eletronic instanceof Eletronic && 0 in eletronic._names) {
  console.log(eletronic);
}

/**
 * eletronic é uma instancia do função constrututora (classe) Eletronic
 * 0 in eletronic._names se refere ao indice do Gameboy.
 *
 * const ['Gameboy'] = Indice 0;
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/in
 */
