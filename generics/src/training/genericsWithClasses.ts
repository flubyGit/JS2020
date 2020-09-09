abstract class Base<S, B> {
  constructor(protected name: S, protected running: B, protected bg?: B) {}

  runningFn(value: S): void {
    this.name = value
  }
}

class ProgramsInMyMachine extends Base<string, boolean> {
    constructor(name: string, running: boolean, bg: boolean) {
      super(name, running, bg)
    }

  programFn(): void {
    this.runningFn(this.name)
  }
}

const program = new ProgramsInMyMachine('vs code', true, false)
program.runningFn('insomnia')
program.programFn()
console.log(program)


