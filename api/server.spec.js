const server = require('./server');
const request = require('supertest');
const db = require('../database/dbConfig');

describe('users', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })
    it('post /', async () => {
        const res = await request(server)
            .post('/api/auth/register')
            .send({ username: "dad2", password: "test" });
        expect(res.status).toBe(201);
    });
        it('post /', async () => {
            const res = await request(server)
                .post('/api/auth/register')
                .send({ username: "dad2" });
            expect(res.status).toBe(500);
        });
    
    
});

describe('users', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })
    it('post /', async () => {
        const res = await request(server)
            .post('/api/auth/register')
            .send({ username: "dad2", password: "test" })
           const res2 = await
                request(server).post('/api/auth/login')
                .send({ username: "dad2", password: "test" })
            expect(res2.status).toBe(200)
    });
    it('post /', async () => {
        const res = await request(server)
            .post('/api/auth/register')
            .send({ username: "dad2", password: "test" })
           const res2 = await
                request(server).post('/api/auth/login')
                .send({ username: "dad2"})
            expect(res2.status).toBe(500)
    });
});

