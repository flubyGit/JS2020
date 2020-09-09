interface Props {
  name: string;
  cpf: string;
  age?: number;
}
const people: Props = {
  name: "Felipe",
  cpf: "111.111.111.111",
  age: 18,
};

type PropsValue = typeof people;
type PropsKeys = keyof Props;

const people2: PropsValue = {
  name: "Felipe",
  cpf: "111.111.111.111",
  age: 18,
};
