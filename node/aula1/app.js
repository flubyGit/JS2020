const path = require('path')
const mod1 = require('./mod1')
const axios = require('axios')

console.log(mod1)
console.log(mod1.surname)

const tech = require('./mod1').talkTech

console.log(tech())

const { Place, data, data2 } = require('./mod1')
const place = new Place()
console.log(place)

axios.get('https://www.google.com.br')
.then(res => console.log(res.data))
.catch(e => console.log(e))
// const { data, data2 } = require('./mod1')
// console.log(data,data2)
