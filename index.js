const express = require('express')
const app = express()

const APP_PORT = process.env.APP_PORT ?? 3000
const APP_HOST = process.env.APP_HOST ?? 'https://127.0.0.1'

const messages = [
    "Minha primeira mensagem",
    "Minha segunda mensagem"
]

console.table(messages)


app.get('/hello', (req, resp) => resp.send('Hello, World!'))

app.listen('3000', () => console.info(`App rodando em ${APP_HOST}:${APP_PORT}`))
