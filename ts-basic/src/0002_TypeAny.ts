/**
 * any é um tipo sem tipagem correta que pode ser qualquer tipo
 *
 * Utilize any em ultimo caso
 */
function showMessage(msg: any) {
  return msg;
}
// console.log(showMessage(1))
// console.log(showMessage(true))
// console.log(showMessage([1, 2]))
// console.log(showMessage([1, '2']))
// console.log(showMessage(['1', '2']))
// console.log(showMessage([{}]))
// console.log(showMessage({}))
// console.log(showMessage(null))
// console.log(showMessage(undefined))
