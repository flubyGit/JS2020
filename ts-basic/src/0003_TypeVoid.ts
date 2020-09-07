/**
 * O tipo void é utilizado para informar que a função não tem um retorno.
 */
function noReturn(...args: Array<string>): void {
  console.log(args.join(' '));
}

noReturn('Luiz', 'Otávio');

const peoples = {
  name: 'Felipe',
  surname: 'André',
  showName(): void {
    console.log(this.name, this.surname);
  },
};

peoples.showName();
export { peoples };
