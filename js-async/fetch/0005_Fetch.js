fetch('https://swapi.dev/api/people/1')
  .then(res => {
    if (res.status !== 200) {
      throw new Error('Error!')
    }
    return res.json()
  }).then(html => console.log(html))
  .catch((e) => {
    console.error(e)
  });


// Async Await com Fetch
async function loadPlanets(id) {
  const url = `https://swapi.dev/api/planets/${id}`
  try {
    await fetch(url).then(res => {
      const { status } = res
      if (status !== 200) throw new Error('Error')
      return res.json()
    })
  } catch (error) {
    console.error(error)
  }
}

loadPlanets(2)
fetch('https://api.github.com/users/flubyGit').then(data => {
  if (data.statusText === 'Bad Request') {
    throw new Error('Error')
  }
  else
    return data.json()
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err, 'Erros')
})
