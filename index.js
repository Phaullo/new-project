const express = require('express');
const app = express()
const port = 3000

const usuarios = ['Ana', 'Joao', 'Maria']
// funcao get, espera 2 parametros (1= CAMINHO, 2= Funcao a ser executada)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/usaurio', (req, res) => {
  console.log("Acessou a rota de usuarios", usuarios);
  console.log('REQ:', req.query.inicial,usuarios.includes(req.query.inicial)); // query traz o que tiver depois da interrogação
  let filtrado = usuarios.includes(req.query.inicial);
  res.status(200).send(`Tem usuario: ${filtrado}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})