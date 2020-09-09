type Lunch<T,U,V> = {
  lunch: T,
  country: U,
  people_eat: V
}

type LaunchProps = Lunch<string,string,boolean>

function peopleEat(props: LaunchProps): LaunchProps {
  return props
}

const hungry = peopleEat({
  country: 'Brasil',
  lunch: 'Abacaxi',
  people_eat: true
})

console.log(hungry)
