function showHour(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError("Esperando instancia de Date");
  }
  if (!date) {
    date = new Date();
  }
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

// setInterval(() => {
//   console.log(showHour());
// }, 3000);

const timer = setInterval(() => {
  console.log(showHour());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
  setTimeout(() => {
    console.log("10 segundos se passaram");
  }, 2000);
}, 10000);
