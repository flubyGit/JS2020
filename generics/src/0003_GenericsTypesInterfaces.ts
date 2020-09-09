interface PeopleProtocol<T = string, U = number> {
  name: T;
  surname: T;
  age: U
}

type FeaturesTelephone<T=string, U = boolean> = {
  model: T,
  active: U
}

const people: PeopleProtocol<string, number> = {
  name: 'Luiz',
  surname: 'Miranda',
  age: 38
}

const student: PeopleProtocol = {
  name: 'Luiz',
  surname: 'Otávio',
  age: 25
}

const telephone: FeaturesTelephone<string,boolean> = {
  model: 'LG',
  active: true
}
