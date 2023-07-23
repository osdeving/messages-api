const { app, server } = require('../src/index');
const request = require('supertest');

describe('API Endpoints', () => {
    // GET /messages
    it('should get all messages', async () => {
        const res = await request(app).get('/messages');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    // POST /messages
    it('should create a new message', async () => {
        const res = await request(app)
            .post('/messages')
            .send({
                text: 'Test message'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.text).toEqual('Test message');
    });

    // GET /messages/:id
    it('should get a message by id', async () => {
        const res = await request(app).get('/messages/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.text).toEqual('Minha segunda mensagem');
    });

    // PUT /messages/:id
    it('should update a message', async () => {
        const res = await request(app)
            .put('/messages/1')
            .send({
                text: 'Updated test message'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.text).toEqual('Updated test message');
    });

    // DELETE /messages/:id
    it('should delete a message', async () => {
        const res = await request(app).delete('/messages/1');
        expect(res.statusCode).toEqual(204);
    });

    // PATCH /messages/:id
    it('should update a message with patch', async () => {
        const res = await request(app)
            .patch('/messages/1')
            .send({
                text: 'Patched test message'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.text).toEqual('Patched test message');
    });

    afterAll(done => {
        server.close(done);
    });
});


