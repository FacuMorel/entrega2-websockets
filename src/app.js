import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './expressApp.js';
import productManager from './managers/ProductManagerSingleton.js';

const httpServer = createServer(app);
const io = new Server(httpServer);

// WebSocket connection
io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  // Enviar lista inicial de productos
  socket.emit('products', productManager.getProducts());

  // Escuchar creación de producto
  socket.on('createProduct', (productData) => {
    try {
      const newProduct = productManager.addProduct(productData);
      io.emit('productCreated', newProduct);
      io.emit('products', productManager.getProducts());
    } catch (error) {
      socket.emit('error', { message: error.message });
    }
  });

  // Escuchar eliminación de producto
  socket.on('deleteProduct', (productId) => {
    try {
      productManager.deleteProduct(productId);
      io.emit('productDeleted', productId);
      io.emit('products', productManager.getProducts());
    } catch (error) {
      socket.emit('error', { message: error.message });
    }
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

const PORT = 8080;

httpServer.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
