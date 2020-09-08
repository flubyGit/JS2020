/**
 * As classes se conversam, porém, uma não depende da outra diretamente.
 * Uma caneta não precisa ter um autor e um autor não depende da caneta.
 */
export class Writer {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  set tool(tool: Tool | null) {
    this._tool = tool;
  }
  get tool(): Tool | null {
    return this._tool;
  }

  get name(): string {
    return this._name;
  }

  writer(): void {
    if (this._tool === null) {
      console.log('No tool');
      return;
    }
    return this._tool.writer();
  }
}
export abstract class Tool {
  constructor(private _name: string) {}

  abstract writer(): void;

  get name(): string {
    return this._name;
  }
}
export class Pen extends Tool {
  writer(): void {
    console.log(`${this.name} is writing`);
  }
}
export class TypeWriter extends Tool {
  writer(): void {
    console.log(`${this.name} is typing...`);
  }
}

const writer = new Writer('Cristina');
const pen = new Pen('Bic');
const typeWriter = new TypeWriter('Machine');

writer.tool = typeWriter;
writer.tool = pen;
writer.writer();
