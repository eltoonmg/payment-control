const request = require('supertest')
const { expect } = require('chai')

describe('Mutation - Login', () => {

    it('Deve realizar login com sucesso quando informo credecnciais válidas', async () => {
        const resposta = await request('http://localhost:4000')
            .post('/graphql')
            .send({ 

    }