/**
 * My Filter
 */

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean

export default function filters<T>(
  array: T[],
  callbackfn: FilterCallback<T>
): T[] {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrayFilteredOriiginal = array.filter(value => value < 5)
console.log(arrayFilteredOriiginal)

const filter = filters(array, value => value < 5)
