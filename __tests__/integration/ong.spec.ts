import request from 'supertest'
import app from '../../src/app'
import connection from '../../src/config/database'

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'AACD',
        email: 'contato@aacd.com.br',
        whatsapp: '13981279147',
        city: 'Rio do Sul',
        uf: 'SC'
      })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})
