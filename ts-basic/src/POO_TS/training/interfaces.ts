interface I_Name_Planets<S> {
  name: S;
}
interface I_Position_Planet<N> {
  position: N;
}
interface I_Active_In_System<B> {
  active: B;
}

interface I_Planets
  extends I_Name_Planets<string>,
    I_Position_Planet<number>,
    I_Active_In_System<boolean> {}

class SystemSolar implements I_Planets {
  constructor(
    public name: string,
    public position: number,
    public active: boolean,
  ) {}
}

const mercury = new SystemSolar('Mercúrio', 1, true);
const venus = new SystemSolar('Vênus', 2, true);
const earth = new SystemSolar('Terra', 3, true);
const pluto = new SystemSolar('Plutão', Math.floor(Math.random() * 10), false);

console.log(mercury, venus, earth, pluto);
