export class Objects<T,U> {
  constructor(public name: T, public sharp : U)  {}
}

// const object = new Objects('Tesoura', true)
// const inArray = new Objects(['Faca','Tesoura'], true)
// const inArray3 = new Objects<object, boolean>({}, false)


export class Stack<T> {
  private counter = 0;
  private elements: {[k:number] : T} = {};

  push(elements: T): void {
    this.elements[this.counter] = elements;
    this.counter++
  }
  pop(): T | void {
    if(this.isEmpty()) return undefined

    this.counter--
    const elementRemoved = this.elements[this.counter]
    delete this.elements[this.counter]
    return elementRemoved
  }
  isEmpty(): boolean {
    return this.counter === 0
  }
  length() : number {
    return this.counter
  }
  showStack(): void {
    for(const key in this.elements) {
      console.log(this.elements[key])
    }
  }
}

const stack = new Stack<number>()
stack.push(1)
stack.push(2)
stack.push(3)

if(stack instanceof Stack) {
  stack.showStack()
}

while(!stack.isEmpty()) {
  console.log(stack.pop())
}
