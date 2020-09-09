type Int<T,U> = T | U

export function unionObjects<T, U>(obj1: T, obj2: U): Int<T,U> {
  // return {
  //   ...obj1,
  //   ...obj2,
  // }
  return Object.assign({}, obj1, obj2)
}

const object = {key1: 'Value 1'}
const object2 = {key2: 'Value 2'}

const union = unionObjects(object,object2)
console.log(union)
