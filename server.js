const express = require('express');
const path = require('path');
const app = express();
const PORT = 3009;

// Servir archivos estáticos (CSS)
app.use(express.static(path.join(__dirname)));

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para la página de formulario
app.get('/formulario', (req, res) => {
  res.sendFile(path.join(__dirname, 'formulario.html'));
});

// Ruta para la página de información
app.get('/informacion', (req, res) => {
  res.sendFile(path.join(__dirname, 'informacion.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
