/**
 * forEach - Aula 83
 */

const array = [100,200,300,400,500,600]

/**
 * For in - Pegar indices
 */
for(let value in array) {
  console.log(value)
}
/**
 * For of - Pegar valores
 */
for(let value of array){
  console.log(value)
}
/**
 * For of e in no forEach
 */
array.forEach((elem, index) => {
  console.log(elem,index)
})
