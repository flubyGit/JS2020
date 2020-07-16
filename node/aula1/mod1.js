const name = 'Felipe'
const surname = 'André'
const tech = 'Javascript'

const talkTech = () => tech
const talkName = () => name

module.exports.name = name
module.exports.surname = surname
module.exports.talkName = talkName

// exports.name = name
// exports.surname = surname
// exports.talkName = talkName

// module.exports = {
//   name,
//   surname,
//   talkName
// }

this.name = name
this.surname = surname
this.talkTech = talkTech
this.tech = tech


console.log(module.exports)
console.log(  exports)


const place = 'SP'
class Place {
  constructor(){
    this.place = place
  }
}
exports.Place = Place

// let data = '2020-02-12'
// let data2 = '2019-02-12'

// module.exports = {
//   data,
//   data2
// }
