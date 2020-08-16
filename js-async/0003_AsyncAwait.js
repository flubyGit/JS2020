function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) - min)
}
function calm(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg === 'number') {
        reject(new Error('Error msg'))
      }
      resolve(msg.toUpperCase().concat(' - Passei na promise'))
    }, time)
  })
}

// calm('Phase 1', rand()).then((value) => {
//   console.log(value)
//   return calm('Phase 2', rand())
// }).then(response => {
//   console.log(response)
//   return calm('Phase 3', rand())
// }).then(res => {
//   return res
// }).then(res => {
//   console.log('Finished in phase'.concat(res))
// }).catch(e => console.log(e))


// Async e Await

async function execute() {
  try {
    const phase1 = calm('Phase 1', rand())
    setTimeout(() => {
      console.log('Essa promise estava Pendente', phase1)
    }, 1100)
    const phase2 = await calm('Phase 2', rand())
    console.log(phase2)
    const phase3 = await calm('Phase 3', rand())
    console.log(phase3)
    console.log('Terminamos')
  } catch (error) {
    console.log(new Error('Error!'))
  }
}
execute()
/**
 * Pending -> [Estado initial],
 * FullFilled -> [Resolvida],
 * Reject -> [Rejeitada]
 */