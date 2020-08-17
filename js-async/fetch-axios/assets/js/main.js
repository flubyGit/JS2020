// fetch('https://api.github.com/users/rocketseat')
//   .then(res => res.json()).then(json => loadElementsInScreen(json))

// Axios

axios('https://api.github.com/users/rocketseat')
  .then(response => loadElementsInScreen(response.data))
  .catch(res => console.log(res))

function loadElementsInScreen(json) {
  console.log(json)
  const table = document.createElement('table');
  const tr = document.createElement('tr');
  let td_bio = document.createElement('td');
  let td_name = document.createElement('td')
  let td_email = document.createElement('td')
  td_bio.innerHTML = json.bio
  td_name.innerHTML = json.name
  td_email.innerHTML = json.email
  tr.appendChild(td_bio)
  tr.appendChild(td_name)
  tr.appendChild(td_email)
  table.appendChild(tr);

  table.appendChild(tr)
  const result = document.querySelector('.resultado')
  result.appendChild(table)
}
