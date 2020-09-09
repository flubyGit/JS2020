const arrayNumbers: Array<number | string> = [1, 2, 3, 4, 5, 6, 7]
console.log(arrayNumbers)

type MyType = number

async function promiseAsync() {
  return 1
}

function otherPromise(): Promise<MyType> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

otherPromise()
  .then(res => res + 1)
  .catch(err => err)
promiseAsync()
  .then(res => res + 1)
  .catch(err => err)
