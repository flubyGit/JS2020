export class Cart {
  private readonly products: Product[] = [];

  insertProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }
  quantityProduct(): number {
    return this.products.length;
  }
  valueTotal(): number {
    return this.products.reduce((ac, value) => Math.round(ac + value.price), 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product = new Product('Shirt', 49.9);
const product1 = new Product('Pen', 19.9);

const cart = new Cart();
cart.insertProduct(product);
cart.insertProduct(product1);
cart.insertProduct(product1);
console.log(cart);
console.log(cart.valueTotal());
console.log(cart.quantityProduct());
