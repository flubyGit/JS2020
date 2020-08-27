const paragrafs = document.querySelector(".paragrafs");
const ps = paragrafs.querySelectorAll("p");

// Minha Solução
const body = document.body;

body.style.background = "#f00";

for (let paragrafs of ps) {
  paragrafs = paragrafs.style.background = "blue";
  paragrafs = paragrafs.style.color = "#fff";
}

// Solução professor
const stylesBody = getComputedStyle(document.body);
const bg = stylesBody.background;
