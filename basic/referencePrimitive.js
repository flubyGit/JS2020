/**
 * Primitivos (imutaveis) - string,number,boolean,undefined,null
 */

/**
 * Referência (mutável) - array, object, function
 */

let a = [1,2,3]

let b = a
let c = [...a] // Independete, não aponta para o local de memoria
console.log(a,b) // [1,2,3] [1,2,3]

a.push(4)

// console.log(a, b) // [1,2,3,4] [1,2,3,4] - Aponta para o mesmo local de memória

a.pop() // [1,2,3] [1,2,3] - Aponta para o mesmo local de memória
// console.log(a, b)

c.unshift('Mais umm')
a.unshift('Não irei colocar na variavel C')

// console.log(a,b,c)

const people = {
  name: 'Gui',
  surname: 'Miranda'
}
const newPeople = {...people}