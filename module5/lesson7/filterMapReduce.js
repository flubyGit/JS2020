/**
 * Retorne a soma do dobro de todos os pares
 * -> Filtrar pares
 * -> Dobrar valores
 * -> Reduzir (somar tudo)
 */

let numbers = [1,3,5,7,9,11,13,15,17,18,20]
const filtered = numbers.filter(filter => filter % 2 === 0).map(map => map*2).reduce((ac,value) => ac + value)


console.log(filtered)