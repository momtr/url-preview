const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
    it('responds with html message', done => {
        request(app)
            .get('/')
            .expect(200, done)
    });
});