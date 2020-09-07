// My training

class Country {
  protected country: string;

  constructor(country: string) {
    this.country = country;
  }
}

class Soccer extends Country {
  public player: string;
  public readonly age: number;
  private sex: string;

  constructor(country: string, player: string, age: number, sex: string) {
    super(country);
    this.player = player;
    this.age = age;
    this.sex = sex;
  }

  getCountry() {
    return this.country;
  }
  getSexPlayer() {
    return this.sex;
  }
}

class Team extends Soccer {
  private readonly team: string;
  public year_foundation: number;

  constructor(
    country: string,
    player: string,
    age: number,
    sex: string,
    team: string,
    year_foundation: number,
  ) {
    super(country, player, age, sex);
    this.team = team;
    this.year_foundation = year_foundation;
  }
}

const player = new Team(
  'Brazil',
  'Ronaldinho',
  38,
  'M',
  'Barcelona',
  Math.floor(Math.random() * 100) + 1,
);

player.year_foundation = 2012;
console.log(player.getCountry());
console.log(player.getSexPlayer());

console.log(player);
