const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/inicio.html', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/inicio.html'))
})

app.get('/historia.html', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/historia.html'))
})

app.get('/contacto.html', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/contacto.html'))
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})