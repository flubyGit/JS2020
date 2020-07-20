/**
 * Reduce - Aula 81
 */
/**
 * Somar todos os valores (Reduce)
 */
let numbers = [1,3,5,7,9,11,13,15,17,18,20]

// const total = numbers.reduce((acum,value,index,array) => {
//   if(value % 2 === 0) acum.push(value)
//   return acum
// }, [])
const total = numbers.reduce((acum,value,index,array) => {
  acum += value
  return acum
})
console.log(total)

/**
 * Retorna a mais velha
 */
const peoples = [
  {name: 'Luiz', age: 62},
  {name: 'Maria', age: 23},
  {name: 'Eduardo', age: 63},
  {name: 'Letícia', age: 19},
  {name: 'Rosana', age: 32},
  {name: 'Wallace', age: 47}
]
const res = peoples.reduce((acum,value) => {
  if(acum.age > value.age) return acum
  return value
}, 0)

console.log(res)