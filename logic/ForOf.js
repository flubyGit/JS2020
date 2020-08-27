const string = "Julia Souza";
const fruits = ["Maça", "Pera", "Banana"];
const people = { name: "Julia", age: 21 };

// For - Array ou string
// For in - string, array, obj
// For of - iteraveis, array, strings

for (let i = 0; i < string.length; i++) {
  console.log(i, string[i], "length e letra");
}
for (let name in string) {
  console.log(name, string[name]);
}
for (let name of string) {
  console.log(name, "Letters");
}
for (let name of fruits) {
  console.log(name, "Fruits");
}
for (let i in people) {
  console.log(i, people[i]);
}
// for (let key of people) {
//   console.log(key); //Is not iterable
// }
fruits.forEach((el, index, array) => {
  console.log(el, index, array);
});
