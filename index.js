const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

app.use(express.static('static'));

let products = [
  {
    id: 1,
    name: 'Xiaomi Redmi 15 Pro',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Apple iPhone X',
    brand: 'Apple',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Oppo Mi 11',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Apple',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Xiaomi Mi 9',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 6,
    name: 'Samsung Find X3',
    brand: 'Samsung',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple iPhone 15',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'iPhone 11',
    brand: 'Apple',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Samsung Max 15',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Oppo Mi 5',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'Samsung Pixel 5',
    brand: 'Samsung',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 7',
    brand: 'Xiaomi',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Samsung',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Apple iPhone 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus 12T',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 17,
    name: 'Oppo Reno 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'OnePlus',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Oppo Power 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

function sortProductsByRatings(prod1, prod2) {
  return prod2.rating - prod1.rating;
}
app.get('/products/sort/popularity', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts = products.sort(sortProductsByRatings);
  res.json({ products: sortedProducts });
});

function sortProductsByPriceDescending(prod1, prod2) {
  return prod2.price - prod1.price;
}

app.get('/products/sort/price-high-to-low', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByPriceDescending);
  res.json({ products: sortedProducts });
});

function sortProductsByPriceAscending(prod1, prod2) {
  return prod1.price - prod2.price;
}

app.get('/products/sort/price-low-to-high', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByPriceAscending);
  res.json({ products: sortedProducts });
});

function filterByRam(product, ram) {
  return product.ram === ram;
}
app.get('/products/filter/ram', (req, res) => {
  let ram = parseFloat(req.query.ram);
  let filterProducts = products.filter((product) => filterByRam(product, ram));
  res.json({ products: filterProducts });
});

function filterByRom(product, rom) {
  return product.rom === rom;
}

app.get('/products/filter/rom', (req, res) => {
  let rom = parseFloat(req.query.rom);
  let filterProductByRom = products.filter((product) =>
    filterByRom(product, rom)
  );
  res.json({ products: filterProductByRom });
});

function filterByBrand(product, brand) {
  return product.brand.toLowerCase() === brand.toLowerCase();
}
app.get('/products/filter/brand', (req, res) => {
  let brand = req.query.brand;
  let filterBrand = products.filter((product) => filterByBrand(product, brand));
  res.json({ products: filterBrand });
});

function filterByOs(product, os) {
  return product.os.toLowerCase() === os.toLowerCase();
}
app.get('/products/filter/os', (req, res) => {
  let os = req.query.os;
  let osFilter = products.filter((product) => filterByOs(product, os));
  res.json({ products: osFilter });
});

function filterByPrice(product, price) {
  return product.price <= price;
}
app.get('/products/filter/price', (req, res) => {
  let price = parseFloat(req.query.price);
  let priceFilter = products.filter((product) => filterByPrice(product, price));
  res.json({ products: priceFilter });
});

app.get('/products', (req, res) => {
  res.json({ products: products });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
