function ValidCPF(cpf) {
  Object.defineProperty(this, "cpfClear", {
    enumerable: true,
    get: function () {
      return cpf.replace(/\D+/g, "");
    },
  });
}
ValidCPF.prototype.valid = function () {
  if (typeof this.cpfClear === "undefined") return;
  if (this.cpfClear.length !== 11) return;
  if (this.isSequence()) return false;
  const cpfParse = this.cpfClear.slice(0, -2);
  const digit1 = this.createDigit(cpfParse);
  const digit2 = this.createDigit(cpfParse + digit1);
  const newCpf = cpfParse + digit1 + digit2;

  return newCpf === this.cpfClear;
};
ValidCPF.prototype.createDigit = function (cpfParse) {
  const convertInArray = Array.from(cpfParse);
  let regress = convertInArray.length + 1;
  const total = convertInArray.reduce((ac, value) => {
    ac += regress * Number(value);
    regress--;
    return ac;
  }, 0);

  const digit = 11 - (total % 11);
  return digit > 9 ? "0" : String(digit);
};
ValidCPF.prototype.isSequence = function () {
  const { cpfClear } = this;
  const sequence = cpfClear[0].repeat(cpfClear.length);
  return sequence === cpfClear;
};
const cpf = new ValidCPF("111.111.111-11");

if (cpf.valid()) console.log("CPF Válido");
else console.log("CPF Inválido");
