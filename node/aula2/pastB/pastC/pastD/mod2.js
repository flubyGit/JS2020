// module.exports = (x,y) => {
//   return x * y
// }
module.exports = class Dog {
  constructor(dog) {
    this.dog = dog
  }
  latir(){
    console.log(`${this.dog} latindo. au au`)
  }
}
