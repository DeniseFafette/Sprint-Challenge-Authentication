const server = require('./server');
const request = require('supertest');
const db = require('../database/dbConfig');

beforeEach(() => {
    return db.migrate.rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});

describe('users', () => {
    it('post /', async () => {
        const res = await request(server)
            .post('/users')
            .send({ username: "dad", });
        expect(res.status).toBe(200);
    });
    it('get /', async () => {
        const res = await request(server).get('/users');
        expect(res.status).toBe(200);
        expect(res.body[1]).toEqual({
            "username": "dad",
        };
    });
});