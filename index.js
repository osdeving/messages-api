const express = require('express')
const app = express()


const messages = [
    "Minha primeira mensagem",
    "Minha segunda mensagem"
]

console.table(messages)


app.get('/hello', (req, resp) => resp.send('Hello, World!'))

app.listen('3000')
