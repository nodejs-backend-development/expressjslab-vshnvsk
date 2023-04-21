const request = require('supertest');
const app = require('../app');
const { getRequest, postRequest } = require('../clients/httpClient');

require('dotenv').config();

jest.mock('../clients/httpClient.js');

const todos = {
    id: 1234,
    user_id: 1099700,
    title: 'YU',
    due_on: null,
    status: 'pending',
};

describe('GET /todos/:user_id', () => {
    it('return todos with id', async () => {
        getRequest.mockReturnValue([todos]);
        const res = await request(app).get(`/todos/${todos.user_id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body).toStrictEqual([todos]);

        expect(getRequest).toHaveBeenCalledTimes(1);
        expect(getRequest).toHaveBeenCalledWith(
            'https://gorest.co.in/public/v2/users/1099700/todos',
        );
    });
});

describe('POST /todos/:user_id/new', () => {
    it('add a todos', async () => {
        const todosPost = {
            user_id: 1099700,
            name: 'Name',
            email: 'email@gmail.com',
            status: 'active',
        };

        postRequest.mockReturnValue(todosPost);
        const res = await request(app).post(`/todos/${todosPost.user_id}/new`).send(todosPost);
        expect(res.statusCode).toBe(201);
        expect(res.body).toStrictEqual(todosPost);

        expect(postRequest).toHaveBeenCalledTimes(1);
        expect(postRequest).toHaveBeenCalledWith(
            `https://gorest.co.in/public/v2/users/${todosPost.user_id}/todos`,
            'POST',
            todosPost,
        );
    });

    it('add a todos', async () => {
        const res = await request(app).post('/todos/1099700/new').send({});
        expect(res.statusCode).toBe(400);
    });
});
