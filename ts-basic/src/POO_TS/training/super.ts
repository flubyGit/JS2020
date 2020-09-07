class Game {
  constructor(public name: string, protected company: string) {}

  getGame(): string {
    return this.name;
  }
  getCompany(): string {
    return this.company;
  }
}
class PeopleBuyGame extends Game {
  constructor(name: string, company: string, public name_people: string) {
    super(name, company);
  }
  getGame(): string {
    console.log(`Awnser 1: What the new game for the ${this.company}?`);
    console.log(`The game is: `);
    return super.getGame().concat(` - ${super.getCompany()}`);
  }
}

const i = new PeopleBuyGame('Assassins Creed', 'Ubisoft', 'Felipe');
console.log(i.getGame());
