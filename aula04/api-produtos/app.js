const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/produtos', (req, res)=> {
  res.send('LISTAR PRODUTOS!')

})

app.get('/produtos/:id', (req, res)=> {
    const id = req.params.id;
    res.send('Buscar Produto com id '+id);

})

app.post('/produtos', (req,res) => {
  res.send('Inserir Produto!')
})

app.put('/produtos/:id', (req, res) => {
    res.send('Atualizar Produto com id '+id);

})

app.delete('/produtos/:id', (req, res) => {
    res.send('Deletar Produto com id '+id);
   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})