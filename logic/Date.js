const threeHours = 60 * 60 * 3 * 1000;
const oneDay = 60 * 60 * 24 * 1000;
const data = new Date(0 + threeHours + oneDay);
// console.log(data.toString());

// const created_date = new Date(2019, 3, 20, 15, 14, 27); //ano, mes, dia, hora ,min, sec, ms
const dateFormated = new Date("2019-04-20 20:20:58");
// console.log(dateFormated.toString());

// Day

console.log("Dia", dateFormated.getDate());
console.log("Mês", dateFormated.getMonth()); // Mes começa do 0
console.log("Ano", dateFormated.getFullYear());
console.log("Hora", dateFormated.getHours());
console.log("Min", dateFormated.getMinutes());
console.log("Seg", dateFormated.getSeconds());
console.log("MS", dateFormated.getMilliseconds());
console.log("Dia da Semana", dateFormated.getDay()); // 0 é domingo

function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
  const day = zeroLeft(date.getDate());
  const month = zeroLeft(date.getMonth() + 1);
  const year = zeroLeft(date.getFullYear());
  const hour = zeroLeft(date.getHours());
  const min = zeroLeft(date.getMinutes());
  const seg = zeroLeft(date.getSeconds());

  return `${day}/${month}/${year} ${hour}:${min}:${seg}`;
}
const dateNow = new Date();
const res = formatDate(dateNow);
console.log(res);
