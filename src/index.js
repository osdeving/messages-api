const express = require('express')
const app = express()

require('dotenv').config()

const APP_PORT = process.env.APP_PORT ?? 3000
const APP_HOST = process.env.APP_HOST ?? 'http://127.0.0.1'

const messages = [
    { id: 0, text: "Minha primeira mensagem" },
    { id: 1, text: "Minha segunda mensagem" }
]

app.use(express.json());

// Message controller
const messageController = {
    validateId: (req, resp, next) => {
        const id = req.params.id;
        if (id >= 0 && id < messages.length) {
            next();
        } else {
            resp.status(404).send({ error: `A mensagem com id ${id} não foi encontrada` });
        }
    },

    validateMessage: (req, resp, next) => {
        if (typeof req.body.text !== 'string') {
            resp.status(400).send({ error: "Invalid message format" });
        } else {
            next();
        }
    }
}

// Middleware for ID validation
app.use(['/messages/:id', '/messages/:id/*'], messageController.validateId);

// Middleware for message validation
app.post('/messages', messageController.validateMessage);
app.put('/messages/:id', messageController.validateMessage);

app.get('/hello', (req, resp) => resp.send('Hello, World!'));

// GET
app.get('/messages', (req, resp) => {
    resp.status(200).send(messages);
})

// GET by ID
app.get('/messages/:id', (req, resp) => {
    resp.status(200).send(messages[req.params.id]);
})

// POST
app.post('/messages', (req, resp) => {
    const message = { id: messages.length, text: req.body.text };

    messages.push(message);

    resp.setHeader('Location', `${APP_HOST}:${APP_PORT}/messages/${message.id}`);
    resp.status(201).json(message);
})

// PUT
app.put('/messages/:id', (req, resp) => {
    messages[req.params.id].text = req.body.text;
    resp.status(200).send(messages[req.params.id]);
})

// DELETE
app.delete('/messages/:id', (req, resp) => {
    messages.splice(req.params.id, 1);
    resp.status(204).send();
})

// PATCH
app.patch('/messages/:id', (req, resp) => {
    messages[req.params.id].text = req.body.text;
    resp.status(200).send(messages[req.params.id]);
})

let server = app.listen(APP_PORT, () => console.info(`App rodando em ${APP_HOST}:${APP_PORT}`));

module.exports = {app, server}