const name = "Felipe";

function talkName() {
  // const name = "Vou pegar o nome do escopo";
  console.log(name);
}
// talkName(name);

function useTalkName() {
  // "Esse talkName ira pegar a variavel fora do escopo";
  talkName();
}
