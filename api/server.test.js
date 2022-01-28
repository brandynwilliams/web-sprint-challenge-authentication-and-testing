const request = require('supertest');
const db = require('../data/dbConfig');
const server = require('./server');

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

test('is the correct environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

describe('[POST] /register', () => {
  test('responds with error when no username is present', async () => {
    const res = await request(server).post('/api/auth/register').send({
      username: '', 
      password: 'abcd',
    })
    expect(res.body).toMatchObject({message: 'Username and Password are Required'})
  })
   
  test('responds with error when no password is present', async () => {
    const res = await request(server).post('/api/auth/register').send({
      username: 'bill', 
      password: '',
    })
    expect(res.body).toMatchObject({message: 'Username and Password are Required'})
})
})

describe('[POST] /login', () => {
  test('responds with error when no username present', async () => {
    const res = await request(server).post('/login').send({
      username: '', 
      password: 'abcd'
    })
    expect(res.status).toBe(404)
  })
  test('responds with error when no password present', async () => {
    const res = await request(server).post('/api/auth/login').send({
      username: 'bill', 
      password: '',
    })
    expect(res.body).toMatchObject({message: 'Username and Password are Required'})
  })
})