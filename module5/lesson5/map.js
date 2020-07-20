/**
 * Map - Irá alterar o array original com os valores alterados // Aula 80
 */

 /**
  * Dobre os números
  */
let numbers = [1,3,5,7,9,11,13,15,17]
const foldValues = numbers.map(nums => nums * 2)
console.log(numbers, foldValues)


/**
 * Para cada elemento:
 * Retorne apenas uma string com o nome da pessoa
 * Remova apenas a chave "name" do objeto
 * Adicione uma chave id em cada objeto
 */
const peoples = [
  {name: 'Luiz', age: 62},
  {name: 'Maria', age: 23},
  {name: 'Eduardo', age: 55},
  {name: 'Letícia', age: 19},
  {name: 'Rosana', age: 32},
  {name: 'Wallace', age: 47}
]

const filteredNames = peoples.map(elem => elem.name)
const removedName = peoples.map(elem => ({age: elem.age}))
const addId = peoples.map((elem,index) => {
  return {
    ...elem,
    id: index + 1
  }
})

console.log(addId)
