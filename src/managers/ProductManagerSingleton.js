import * as productManagerFunctions from './ProductManager.js';

// Objeto con las funciones para mantener compatibilidad con el código existente
const productManager = {
  getProducts: productManagerFunctions.getProducts,
  addProduct: productManagerFunctions.addProduct,
  deleteProduct: productManagerFunctions.deleteProduct,
  getProductById: productManagerFunctions.getProductById
};

export default productManager;
