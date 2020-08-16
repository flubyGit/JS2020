// Metodo Antigo
function generateRandomNumber(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) - min)
}

function calm(msg, time, callback) {
  setTimeout(() => {
    // console.log(msg)
    if (callback) callback()
  }, time)
}

calm('One', generateRandomNumber(1, 3), () => {
  calm('Two', generateRandomNumber(1, 3), () => {
    calm('Three', generateRandomNumber(1, 3), null)
  })
})

// Promises

function promises(msg, tmp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') reject(new Error('Error'));
      resolve(msg)
    }, tmp)
  })
}
promises('Connection BD', generateRandomNumber(1, 4)).then((response) => {
  console.log(response, '1')
  return promises('Finding data in base', generateRandomNumber(1, 4)).then((response) => {
    console.log(response, '2')
    return promises(true, generateRandomNumber(1, 3)).then(response => {
      console.log(response, '3')
    }).then(() => {
      console.log('Show data in screen')
    })
  }).catch((e) => {
    console.log('Error', e)
  })
})