/**
 * O tipo void é utilizado para informar que a função não tem um retorno.
 */
function noReturn(...args: Array<string>): void {
  console.log(args.join(' '));
}

const people = {
  name: 'Luiz',
  surname: 'Otávio',

  showName(): void {
    console.log(this.name.concat(this.surname))
  }
};
noReturn('Hi', 'People');
console.log(people.showName());
