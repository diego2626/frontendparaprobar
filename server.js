import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Necesitas obtener el nombre del directorio en un módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir los archivos estáticos generados por Vue.js
app.use(express.static(path.join(__dirname, 'dist')));

// Rutas para manejar las solicitudes a tu aplicación
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Configurar el puerto dinámico de Azure
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});