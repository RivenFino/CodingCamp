const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
  ];
  
  const sampleProducts2 = [
    { id: 1, name: 'Ak-47', category: 'Rifle', price: 100000 },
    { id: 2, name: 'Mp-5', category: 'SMG', price: 50000 },
    { id: 3, name: 'Glock', category: 'Pistol', price: 7000 },
    { id: 4, name: 'Carambit', category: 'Mele', price: 300 },
    { id: 5, name: 'Mk 2', category: 'Granade', price: 50000 },
  ];
  
  function getProductsByCategory(products, category) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
     */
    return products.filter(product => product.category === category);
  }
  
  function findProductById(products, id) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
     */
    return products.find((product) => product.id === id);
  }
  
  function calculateTotalPrice(products) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk menghitung total harga semua produk.
     */
    return products.reduce((acc, product) => acc + product.price, 0);
  }
  
  function applyDiscount(products, discount) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan array baru,
     * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
     */
    return products.map((product) => ({...product, price: product.price - (product.price * discount /100)}));
  }
  
  console.log(getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
  console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
  console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
  console.log(findProductById(sampleProducts2, 3)); // Should return the product with id 3 :v
  