import { test, expect } from '../../../src/api/fixtures/api.fixture';
import Ajv from 'ajv';
import Schema from '../../../src/api/schemas/user.schema.json';

const ajv = new Ajv();

test.describe('GET / users', () => {
    test('Get all users', async ({ users }) => {
        const response = await users.getAll();
        expect(response.status()).toBe(200);

        const json = await response.json();
        expect(Array.isArray(json)).toBeTruthy();
        const validate = ajv.compile(Schema);
        json.forEach((user: any) => {
            const valid = validate(user);
            expect(valid).toBe(true);
        });
    });

    test('Get user by ID', async ({ users }) => {
        const response = await users.getById(1);
        expect(response.status()).toBe(200);
        const json = await response.json();
        const validate = ajv.compile(Schema);
        const valid = validate(json);
        expect(valid).toBe(true);


    });


});