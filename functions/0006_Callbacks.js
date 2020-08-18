function random(min = 1000, max = 3000) {
  const value = Math.floor(Math.random() * (max - min) + min);

  return value;
}

function f1(callback) {
  setTimeout(() => {
    console.log("f1");
    if (callback) callback();
  }, random());
}
function f2(callback) {
  setTimeout(() => {
    console.log("f2");
    if (callback) callback();
  }, random());
}
function f3(callback) {
  setTimeout(() => {
    console.log("f3");
    if (callback) callback();
  }, random());
}
f1(() => {
  f2(() => {
    f3(() => console.log("Last callback"));
  });
});
