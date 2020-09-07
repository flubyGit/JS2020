enum Colors {
  Red, // 0
  Blue, // 1
  Yellow, // 2
  Gray,
}
// console.log(Colors);
console.log(Colors[3]);

enum EnumModify {
  Number = 100,
  Num, // agora o indice é 101
  Nuns,
}
// console.log(EnumModify);

// Unir Enum

enum Client {
  name = 'Felipe',
}
enum Client {
  age = 20,
}

// console.log(Client);

// Functions

function choiseColor(color: Colors): void {
  // console.log(Colors[color]);
}
choiseColor(Colors.Gray);

// Aula 2

enum Colors_ {
  RED, // 0
  BLUE, // 1
  YELLOW, // 2
}
enum Enumerated {
  RED = 10,
  BLUE = 100,
  YELLOW = 200,
  PURPLE = 'purple',
  GREEN = 201,
}
enum Enumerated {
  BLACK = '#000',
}

function choises(colors: Colors_): void {
  console.log(Colors_[colors]);
}

console.log(Colors_.YELLOW);
console.log(Colors_[0]);

console.log(Enumerated[10]);
console.log(Enumerated.PURPLE);
console.log(Enumerated);
