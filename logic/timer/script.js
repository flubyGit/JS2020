function wrapper() {
  function getTimeFromSeconds(sec) {
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  }
  const clock = document.querySelector(".clock");

  let seconds = 0;
  let timer;

  function startClock() {
    timer = setInterval(() => {
      seconds++;
      clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }

  document.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("reset")) {
      clearInterval(timer);
      clock.classList.remove("paused");
      clock.innerHTML = "00:00:00";
      seconds = 0;
    }
    if (el.classList.contains("start")) {
      clock.classList.remove("paused");
      clearInterval(timer);
      startClock();
    }
    if (el.classList.contains("pause")) {
      clearInterval(timer);
      clock.classList.add("paused");
    }
  });
}
wrapper();
