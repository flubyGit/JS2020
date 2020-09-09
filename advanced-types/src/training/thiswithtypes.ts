/**
 * Podemos tipar o this para encadear cadeias de funções.
 */

export default abstract class Computer {
  abstract status: boolean = true;

  abstract flag: boolean = false;
}

type Flag = true;

class StatusDeveloper extends Computer {
  constructor(public status: boolean, public flag: boolean = true) {
    super();
  }

  startDigitation(flag: Flag): this {
    console.log("Comecei a digitar");

    this.flag = flag;
    return this;
  }

  statusDigitation(status: boolean): this {
    console.log("Estou digitando");

    this.status = status;
    return this;
  }

  stopDigitation(): this {
    console.log("Parei de digitar");

    this.flag = !this.flag;
    return this;
  }
}
const developer = new StatusDeveloper(true);

developer.startDigitation(true).statusDigitation(true).stopDigitation();
if (developer instanceof StatusDeveloper) console.log(developer);
