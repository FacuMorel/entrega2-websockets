// Estado privado usando closure
let products = [];
let nextId = 1;

export function getProducts() {
  return products;
}

export function addProduct(productData) {
  const { title, description, code, price, status = true, stock, category, thumbnails = [] } = productData;

  // Validaciones
  if (!title || !description || !code || !price || !stock || !category) {
    throw new Error('Todos los campos son obligatorios');
  }

  // Verificar que el código no esté duplicado
  if (products.some(p => p.code === code)) {
    throw new Error('El código del producto ya existe');
  }

  const newProduct = {
    id: nextId++,
    title,
    description,
    code,
    price: Number(price),
    status: status === true || status === 'true',
    stock: Number(stock),
    category,
    thumbnails: Array.isArray(thumbnails) ? thumbnails : [thumbnails]
  };

  products.push(newProduct);
  return newProduct;
}

export function deleteProduct(productId) {
  const id = Number(productId);
  const index = products.findIndex(p => p.id === id);
  
  if (index === -1) {
    throw new Error('Producto no encontrado');
  }

  products.splice(index, 1);
  return true;
}

export function getProductById(id) {
  const product = products.find(p => p.id === Number(id));
  if (!product) {
    throw new Error('Producto no encontrado');
  }
  return product;
}
