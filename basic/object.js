const peopleOne = {
  name: 'Felipe',
  surname: 'André',
  age: 19,
  talkName() {
    console.log(`O nome é ${this.name} e tem ${this.age} anos`)
  },
  incrementAge(){
    this.age++
  }
};

peopleOne.incrementAge()
peopleOne.talkName()
// console.log(peopleOne.name)
// console.log(peopleOne.surname)
// console.log(peopleOne.age)

function createObject(name, surname, age){
  return {
    name,
    surname,
    age
  }
}
createObject('Felipe','André', 19)