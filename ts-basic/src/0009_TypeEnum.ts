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
console.log(EnumModify);

// Unir Enum

enum Client {
  name = 'Felipe',
}
enum Client {
  age = 20,
}

console.log(Client);

// Functions

function choiseColor(color: Colors): void {
  console.log(Colors[color]);
}
choiseColor(Colors.Gray);
