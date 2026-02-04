function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

const products = [
  new Product(1, 'iPhone 15 Pro Max', 35000000, 10, 'Smartphone', true),
  new Product(2, 'Samsung Galaxy S24 Ultra', 33000000, 5, 'Smartphone', true),
  new Product(3, 'Macbook Pro M3', 45000000, 8, 'Laptop', true),
  new Product(4, 'Dell XPS 15', 40000000, 12, 'Laptop', false),
  new Product(5, 'Airpods Pro 2', 6000000, 30, 'Accessories', true),
  new Product(6, 'Samsung Galaxy Buds 3', 5000000, 20, 'Accessories', true)
];


const hasExpensiveProduct = products.some(product => product.price > 30000000);

console.log('Có ít nhất 1 sản phẩm giá trên 30,000,000:', hasExpensiveProduct);
