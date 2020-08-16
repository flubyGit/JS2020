function generateRandomNumber(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) - min)
}

function calm(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('Cai no Erro')
        return
      }
      console.log(msg.toUpperCase(), '- Passei na Promise')
      resolve()
    }, time)
  })
}
// calm('Mensagem', generateRandomNumber(1, 4))

// Promise.all, Promise.race, Promise.resolve, Promise.reject

const promises = [
  calm('Promise 1', generateRandomNumber(1, 5)),
  calm('Promise 2', generateRandomNumber(1, 5)),
  calm('Promise 3', generateRandomNumber(1, 5)),
  calm(100, generateRandomNumber(1, 5))
];

// Resolve todas as promessas na ordem do array
// Promise.all(promises).then(response => {
//   console.log(response, 'Resposta')
// }).catch(err => console.log(err))

// Promise.race - Resolve todas as promessas da mais rapida a mais devagar

// Promise.race(promises).then(response => {
//   console.log(response, 'race')
// }).catch(err => console.log(err))


function downloadPage() {
  let cache = false;

  if (cache) {
    return Promise.resolve(new Error('Página em cache'))
  }
  else
    return calm('Baixei a página', 2000);
}
downloadPage().then((data) => console.log(data)).catch((e) => console.log('Error download page'))
