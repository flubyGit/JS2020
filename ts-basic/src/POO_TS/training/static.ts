class App {
  static myName = 'Felipe';
  static tech: Array<string> = ['Javascript', 'Typescript'];

  static methodsByMyStatics(value: string): string {
    App.myName = value;

    return value;
  }
}
console.log(App.tech, 'Tech');
console.log(App.myName, 'Nome');
console.log(App.methodsByMyStatics('Cristiano'), 'Method static');
