/**
 *
 * Quando o valor é retornado como TRUE, podemos fazer
 * atribuição do parametro pra um tipo concreto.
 */

export function isNumber(value: unknown) : value is number {
  return typeof value === 'number'
}

console.log(isNumber(1))


export function sum<T>(...args: Array<T>) : number {
  const returns = args.reduce((ac, valueNow) => {
    if(isNumber(ac) && isNumber(valueNow)) {
      return ac + valueNow
    }
    return ac
  },0)

  return returns
}

console.log(sum(1,2,3))
console.log(sum([1,2,3,'a','b','c', 1]))
