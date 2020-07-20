/**
 * Concat -> Concatena valores - Aula 78
 */
const numbers = [1,2,3]
const numbers2 = [4,5,6]
let arrayTotal = numbers.concat(numbers2)
arrayTotal = numbers.concat(numbers2,[7,8,9], false, 'Felipe')

let spread = [...numbers,'Felipe',...numbers2, false,2,2.15,[],...[10,11,12]]
console.log(arrayTotal,spread)

