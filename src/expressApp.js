import express from 'express';
import { engine } from 'express-handlebars';
import viewsRouter from './routes/views.router.js';

// Crea y configura la aplicación de Express (sin levantar el servidor)
export function createExpressApp() {
  const app = express();

  // Configuración de Handlebars
  app.engine('handlebars', engine());
  app.set('view engine', 'handlebars');
  app.set('views', './src/views');

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('./src/public'));

  // Rutas
  app.use('/', viewsRouter);

  return app;
}

// Export por defecto por conveniencia
const app = createExpressApp();
export default app;

