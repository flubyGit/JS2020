/**
 * Infos
 * Object.freeze te permite congelar completamente o array/objeto e não permite você adicionar,
 * remover ou alterar o counteúdo ali dentro. Isso dá segurança quando temos certeza do objeto,
 * ex: objeto pra enviar pro back-end, etc
 *
 * Object.defineProperty e Object.defineProperties te dá o mesmo comportamento em um, dois ou mais valores
 * te permitindo um dinamismo entre as informações que podem ser congeladas ou não
 */

function Product(name = "Felipe", price = 0, stock, sale = true) {
  this.sale = sale;

  Object.defineProperty(this, "stock", {
    enumerable: true, // Mostra a chave
    value: stock, // Valor
    writable: false, // Posso alterar?
    configurable: false, // Pode apagar,editar,configurar a chave?
  });
  Object.defineProperties(this, {
    name: {
      enumerable: true, // Mostra a chave
      value: name, // Valor
      writable: true, // Posso alterar?
      configurable: true, // Pode apagar,editar,configurar a chave?
    },
    price: {
      enumerable: true, // Mostra a chave
      value: price, // Valor
      writable: true, // Posso alterar?
      configurable: true, // Pode apagar,editar,configurar a chave?
    },
  });
}

const p1 = new Product("Camiseta", 20, 3, true);
// p1.stock = 10;
// delete p1.stock;
console.log(p1);

// console.log(Object.keys(p1));

// for (let key in p1) {
//   console.log(key);
// }
