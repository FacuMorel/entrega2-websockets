# Proyecto WebSockets con Handlebars

Este proyecto implementa un servidor Express con Handlebars y WebSockets usando Socket.io para la gestión de productos en tiempo real.

## Características

- ✅ Servidor Express con motor de plantillas Handlebars
- ✅ Integración de Socket.io para WebSockets
- ✅ Vista `home.handlebars` con lista de productos
- ✅ Vista `realTimeProducts.handlebars` con actualización en tiempo real
- ✅ Formulario para crear y eliminar productos mediante WebSockets
- ✅ Actualización automática de la lista cuando se crean o eliminan productos

## Instalación

1. Instalar dependencias:
```bash
npm install
```

## Uso

1. Iniciar el servidor:
```bash
npm start
```

O en modo desarrollo (con auto-reload):
```bash
npm run dev
```

2. Abrir en el navegador:
   - Home: http://localhost:8080
   - Productos en Tiempo Real: http://localhost:8080/realtimeproducts

## Estructura del Proyecto

```
src/
├── app.js                    # Servidor principal con Express y Socket.io
├── managers/
│   ├── ProductManager.js     # Clase para gestionar productos
│   └── ProductManagerSingleton.js  # Instancia compartida
├── routes/
│   └── views.router.js       # Rutas de las vistas
├── views/
│   ├── layouts/
│   │   └── main.handlebars   # Layout principal
│   ├── home.handlebars       # Vista home con lista de productos
│   └── realTimeProducts.handlebars  # Vista con WebSockets
└── public/                   # Archivos estáticos
```

## Funcionalidades

### Vista Home (`/`)
- Muestra la lista de todos los productos
- Actualización manual (recargar página)

### Vista RealTimeProducts (`/realtimeproducts`)
- Muestra la lista de productos
- Formulario para crear nuevos productos
- Botón para eliminar productos
- Actualización automática en tiempo real mediante WebSockets
- Todos los cambios se reflejan instantáneamente en todos los clientes conectados

## Tecnologías Utilizadas

- **Express**: Framework web para Node.js
- **Handlebars**: Motor de plantillas
- **Socket.io**: Biblioteca para WebSockets
- **Node.js**: Entorno de ejecución
