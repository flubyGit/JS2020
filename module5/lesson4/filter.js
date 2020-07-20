/**
 * Filter -> sempre retornara o array com a msm quantidade de elementos ou menos
 */

const numbers = [1,3,5,7,9,11,13,15,17]
// Filtra o array por > 10
// const array10 = numbers.filter(num => num > 10)

function callbackFilter(value){
  return value > 10
  // if(value > 10)
  //   return true
  // else
  //   return
}
let numbersFiltered = numbers.filter(callbackFilter)
numbersFiltered = numbers.filter(value => {
  return value > 10
})
numbersFiltered = numbers.filter(value => value > 10)
// numbersFiltered = numbers.filter((value, index, array) => {
//   console.log(index, array)
//   return value > 10
// })

// console.log(numbersFiltered)

/**
 * Retorne as pessoas que tem o nome com 5 letras ou mais
 * Retorne as pessoas com mais de 50 anos
 * Retorne as pessoas que terminam com A
 */
const peoples = [
  {name: 'Luiz', age: 62},
  {name: 'Maria', age: 23},
  {name: 'Eduardo', age: 55},
  {name: 'Letícia', age: 19},
  {name: 'Rosana', age: 32},
  {name: 'Wallace', age: 47}
]
const filteredAge = peoples.filter(age => age > 50)
const lettersFive = peoples.filter(fiveLetters => fiveLetters.name.length >= 5)
const filteredTerminateA = peoples.filter(props => props.name.toLowerCase().endsWith('a'))

console.log(filteredTerminateA)
console.log(lettersFive)
console.log(filteredAge)


