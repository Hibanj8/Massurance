import { POST } from '../../../src/app/api/contact/route';
jest.mock('../../../src/app/api/contact', () => ({
  POST: jest.fn(),
}));

describe('POST /api/contact', () => {
  it('should create a new contact', async () => {
    const req = { json: jest.fn().mockResolvedValueOnce({ name: 'John Doe', email: 'john@example.com', phone: '1234567890', message: 'Hello' }) };
    const res = {};

    const result = await POST(req, res);

    expect(result.statusCode).toEqual(201);
    expect(result.body).toEqual({ message: 'Contact créé avec succès' });
  });

  it('should handle errors', async () => {
    const req = { json: jest.fn().mockRejectedValueOnce(new Error('Invalid input')) };
    const res = {};

    const result = await POST(req, res);

    expect(result.statusCode).toEqual(400);
    expect(result.body.message).toEqual('Invalid input');
  });
});
