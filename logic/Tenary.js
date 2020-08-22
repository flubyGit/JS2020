const pointsUser = 1000;
const lvlUser = pointsUser >= 1000 ? "Usuário Vip" : "Usuário normal";
// condicao ? valor true : valor false

const res =
  lvlUser === "Usuário Vip" && pointsUser >= 1000
    ? "Ok, ele passou"
    : "Ele não passou";

console.log(res);
