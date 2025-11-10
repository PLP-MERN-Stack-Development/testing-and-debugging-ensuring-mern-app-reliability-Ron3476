const request = require('supertest');
const app = require('../../src/app');

// If your integration tests need real DB operations, use the setupTestDb helper.
// For this demo the server uses in-memory array so DB isn't necessary.
describe('POST /api/users', () => {
  it('creates a user when username provided', async () => {
    const res = await request(app).post('/api/users').send({ username: 'ron' });
    expect(res.statusCode).toBe(201);
    expect(res.body.username).toBe('ron');
    expect(res.body.id).toBeDefined();
  });

  it('returns 400 when missing username', async () => {
    const res = await request(app).post('/api/users').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch(/username/);
  });
});
