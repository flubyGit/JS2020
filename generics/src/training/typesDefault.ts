const salad: Required<Record<string,string>> = {
  name: 'Alface',
  color: 'green'
}

interface Fruits<S> {
  name: S
}


const fruits: Fruits<string> = {
  name: 'Fruta'
}

const other: Readonly<Pick<Fruits<string>, 'name'>> = {
  name: 'Outro objeto'
}
