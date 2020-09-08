class Via {
  constructor(via) {
    this.via = via;
  }
}

class Planet extends Via {
  constructor(via, planet) {
    super(via);
    this.planet = planet;
  }
}

class Continent extends Planet {
  constructor(via, planet, name) {
    super(via, planet);
    this.name = name;
  }
}

class Country extends Continent {
  constructor(via, planet, name, country) {
    super(via, planet, name);
    this.country = country;
  }
}

class State extends Country {
  constructor(via, planet, name, country, state) {
    super(via, planet, name, country);
    this.state = state;
  }
}
class People extends State {
  constructor(via, planet, name, country, state, people_name) {
    super(via, planet, name, country, state);
    this.people_name = people_name;
  }

  get myName() {
    return this.people_name;
  }

  set myNameSet(value) {
    if (typeof value !== "string")
      return new TypeError("The other type is not string is invalid!");

    this.people_name = value;
  }
}

const p1 = new People(
  "Via Lactea",
  "Terra",
  "América",
  "Brasil",
  "SP",
  "Felipe"
);

console.log(p1);
