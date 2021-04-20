const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Estas en inicio')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/producto', (req, res) => {
    res.send('estas en producto')
  })

  app.get('/contactos', (req, res) => {
    res.send('Estas en contactos')
  })

  app.get('/historia', (req, res) => {
    res.send('historia')
  })

