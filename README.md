# Messages API

Essa é uma API simples de mensagens construído com Node.js e Express. As mensagens são armazenadas em memória, portanto, não persistem quando o servidor é desligado.

## Índice

1. [Iniciando o servidor](#iniciando-o-servidor)
2. [Endpoints](#endpoints)
    - [GET /messages](#get-messages)
    - [GET /messages/:id](#get-messages-id)
    - [POST /messages](#post-messages)
    - [PUT /messages/:id](#put-messages-id)
    - [DELETE /messages/:id](#delete-messages-id)

## Iniciando o servidor

Para iniciar o servidor, execute:

```bash
npm start
```

É possível rodar testes dos endpoints com

```bash
npm test
```

Isso inicia o servidor na porta 3000 por padrão. A porta pode ser configurada configurando a variável de ambiente `APP_PORT`.

Também tem um arquivo api_test.sh para fazer chamadas com curl de forma automática. Chame da seguinte forma:

```bash
chmod +x api_test.sh
./api_test.sh
```


## Endpoints

### GET /messages

Retorna todas as mensagens. Exemplo de resposta:

```json
[
    {
        "id": 0,
        "text": "Minha primeira mensagem"
    },
    {
        "id": 1,
        "text": "Minha segunda mensagem"
    }
]
```

### GET /messages/:id
Retorna a mensagem com o ID especificado. Exemplo de resposta:

```json
{
    "id": 0,
    "text": "Minha primeira mensagem"
}
```

### POST /messages
Adiciona uma nova mensagem. Exemplo de corpo de solicitação:

```json
{
    "text": "Minha terceira mensagem"
}
```

### PUT /messages/:id
Atualiza a mensagem com o ID especificado. Exemplo de corpo de solicitação:

```json
{
    "text": "Minha mensagem atualizada"
}
```

### DELETE /messages/:id
Remove a mensagem com o ID especificado. Este endpoint não tem corpo de resposta.
