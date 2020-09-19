class ControlRemote {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Metódos de Instância
  incrementVolume() {
    this.volume += 2;
  }
  decrementVolume() {
    this.volume -= 2;
  }

  // Metódos staticos

  static change() {
    console.log("Static method");
  }
}

const controlRemote = new ControlRemote("LG");
controlRemote.incrementVolume();
controlRemote.incrementVolume();
controlRemote.incrementVolume();
controlRemote.incrementVolume();
controlRemote.incrementVolume();

ControlRemote.change();
console.log(controlRemote);

// outros exemplos de metodos staticos
// Math.random()
