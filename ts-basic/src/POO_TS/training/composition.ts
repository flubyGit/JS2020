/**
 * Quando uma classe é instanciada dentro da outra
 */

class Dev {
  constructor(public name: string, private readonly _tech = new Tech()) {}

  programmingTsNow(value: string): void {
    this._tech?.learnTS(value);
  }
  programmingJSNow(value: string): void {
    this._tech?.learnJS(value);
  }

  get getter() {
    return this._tech;
  }
}
class Tech {
  learnJS(value: string): string {
    console.log(value, '2');

    return value;
  }
  learnTS(value: string): string {
    return value;
  }
}

const tech = new Dev('Felipe');

tech.programmingJSNow('Javascript');
setTimeout(() => {
  tech.programmingTsNow('Typescript');
}, 3000);
