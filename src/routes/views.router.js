import express from 'express';
import productManager from '../managers/ProductManagerSingleton.js';

const router = express.Router();

// Ruta home
router.get('/', (req, res) => {
  const products = productManager.getProducts();
  res.render('home', { products, title: 'Home' });
});

// Ruta realtimeproducts
router.get('/realtimeproducts', (req, res) => {
  const products = productManager.getProducts();
  res.render('realTimeProducts', { products, title: 'Productos en Tiempo Real' });
});

export default router;
