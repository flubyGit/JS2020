/**
 * Quando uma classe precisa obrigatóriamente de outra.
 * Ex: Class People precisa de uma Class Heart, pois uma pessoa não vive sem coração.
 * Ex: Class Car precisa de uma class Motor, pois um carro precisa de um motor pra funcionar.
 */

export class Car {
  private readonly motor = new Motor();
  on(): void {
    this.motor.on();
  }
  stop(): void {
    this.motor.stop();
  }
  running(): void {
    this.motor.running();
  }
  off(): void {
    this.motor.off();
  }
}

export class Motor {
  on(): void {
    console.log('Motor on');
  }
  stop(): void {
    console.log('Stop');
  }
  running(): void {
    console.log('Running');
  }
  off(): void {
    console.log('Off car');
  }
}

const car = new Car();
car.off();
car.on();
car.running();
car.stop();
