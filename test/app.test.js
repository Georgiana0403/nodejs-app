const request = require('supertest');
const app = require('../app'); // Adjust based on your app structure

describe('GET /', () => {
  it('should return the to-do list HTML page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('<h1>To-Do List</h1>');
  });
});