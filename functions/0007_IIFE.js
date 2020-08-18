// IIFE - Immediatly invoked funcion expression
function whatever() {
  console.log(129182918);
}
whatever();

(function (age, weight, height) {
  console.log(age, weight, height);
  const name = "Felipe";
  console.log("Executado imediatamente e nao toca escopo global");

  function talk(surname = "Berrnado") {
    return surname;
  }
  function talkSurname() {
    console.log(talk());
  }
  talkSurname();
})(15, 50, 1.87);
