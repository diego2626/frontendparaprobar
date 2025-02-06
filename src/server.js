const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos de la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Redirigir todas las rutas a 'index.html' (para Vue Router en modo history)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Configurar el puerto en el que debe correr
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
