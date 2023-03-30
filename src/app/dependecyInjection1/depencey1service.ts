export class Dependecy1 {
  getProducts(): Product[] {
    return [
      { name: 'Keyboard', quantity: 10 },
      { name: 'mouse', quantity: 15 },
      { name: 'pencil', quantity: 20 },
    ];
  }
}

export class Product {
  name?: string;
  quantity?: number;
}
