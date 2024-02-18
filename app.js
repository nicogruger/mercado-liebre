const express = require('express');
const path = require("path");
const app = express();

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
}); 


app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/index.html")
    res.sendFile(htmlPath)
  });
  