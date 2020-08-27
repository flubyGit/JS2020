try {
  // Executada sem errors
  try {
    console.log("Try 2");
  } catch (error) {
    console.log("Deu erro");
  } finally {
    console.log("FINALLY 1");
  }
} catch (error) {
  // Quando há errors
} finally {
  // Sempre sera executado
  console.log("FINALLY 2");
}

function showHour(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError("Esperando instancia de Date");
  }
  if (!date) {
    date = new Date();
  }
  return (retorna = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }));
}
try {
  const dateNow = new Date("01-01-1970 12:58:12");
  console.log(showHour(dateNow));
} catch (error) {
  console.log(error);
} finally {
  console.log("Tenha um bom dia");
}
