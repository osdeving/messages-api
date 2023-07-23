#!/bin/bash

# Variáveis
APP_HOST="http://127.0.0.1"
APP_PORT=3000

# Função auxiliar para imprimir com cores
print_in_green () {
    printf "\e[32m$1\e[0m\n"
}

# GET /messages
print_in_green "GET /messages"
curl -s "$APP_HOST:$APP_PORT/messages" | jq

# GET /messages/:id
print_in_green "\nGET /messages/0"
curl -s "$APP_HOST:$APP_PORT/messages/0" | jq

# POST /messages
print_in_green "\nPOST /messages"
curl -s -X POST -H "Content-Type: application/json" -d '{"text": "Nova mensagem"}' "$APP_HOST:$APP_PORT/messages" | jq

# PUT /messages/:id
print_in_green "\nPUT /messages/0"
curl -s -X PUT -H "Content-Type: application/json" -d '{"text": "Mensagem atualizada"}' "$APP_HOST:$APP_PORT/messages/0" | jq

# DELETE /messages/:id
print_in_green "\nDELETE /messages/0"
curl -s -X DELETE "$APP_HOST:$APP_PORT/messages/0" | jq
