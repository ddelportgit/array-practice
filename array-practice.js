const products = [
  { id: 1, name: "Laptop", price: 12000, inStock: true },
  { id: 2, name: "Mouse", price: 250, inStock: true },
  { id: 3, name: "Keyboard", price: 850, inStock: false },
  { id: 4, name: "Monitor", price: 4500, inStock: true },
  { id: 5, name: "Headphones", price: 1500, inStock: false },
];

// forEach() method

products.forEach((product) => console.log(product.name));

// map() method

const productNames = products.map((product) => product.name);

// filter() method

const inStock = products.filter((product) => product.inStock);

// filter() method #2

const lessthan2000 = products.filter((product) => product.price < 2000);

// find() method

const id4 = products.find((product) => product.id === 4);

// some() method

const moreThan10000 = products.some((product) => product.price > 10000);

// every() method

const allInStock = products.every((product) => product.inStock);
