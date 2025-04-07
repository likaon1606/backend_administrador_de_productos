import express from "express";   // Usar `import` para módulos en lugar de `require`

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.listen(4000, () => {
  console.log("REST API en el puerto 4000");
});
