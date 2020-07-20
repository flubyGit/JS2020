/**
 * Revisão arrays - Aula 76
 */

const nomes = ['Eduardo','Maria','Joana']
const newArr = nomes
const spread = [...nomes]

nomes[2] = 'João'
newArr.pop()
// const names = new Array('Maria','Joana')
// console.log(names)


// Tamanho
const length = nomes.length
console.log(length)

// Remover
nomes.pop() // Final do Array
// delete nomes[2]
nomes.shift() // Começo do Array

// Adicionar
nomes.push('João') // Final do array
nomes.push('Wallace')
nomes.push('Rosana')
nomes.unshift('Pedro') // Começo do Array
console.log(nomes)

// Fatiar

const slice = nomes.slice(1,3) // Do índice ate o indice final
console.log(slice)

// "Converte" str em array
const name = 'Felipe André'
const namess = name.split(' ')
console.log(namess)

// "converte" array em str

const convert = namess.join(' ')
console.log(convert)