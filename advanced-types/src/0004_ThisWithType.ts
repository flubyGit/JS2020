export default class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  multi(n: number): this {
    this.number *= n;
    return this;
  }

  division(n: number): this {
    this.number /= n;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calc = new SubCalculator(10);
calc.add(5).multi(2).division(2).sub(5).pow(10);

if (calc instanceof SubCalculator) {
  console.log(calc);
}

// Builder - GoF

type Method = "get " | "post";

export class RequestBuilder {
  private method: Method | null = null;

  private url: string | null = null;

  setMethod(method: Method): this {
    this.method = method;

    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl("http://localhost:3333/").setMethod("post").send();

if (request instanceof RequestBuilder) {
  console.log(request);
}
