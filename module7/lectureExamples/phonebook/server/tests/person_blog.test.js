/**
 * Necessary imports for running tests
 */
const supertest = require('supertest')
const server = require('../server')
const mongoose = require('mongoose')

/**
 * Helper functions
 */
const helper = require('./test_helper')

/**
 * Creates container to for testing endpoints
 */
const api = supertest(server)

/**
 * TEST SUITES
 */

// Runs before each test
beforeEach(async () => {
  // Clear data and load new entries for tests
  await helper.clearData()
  await helper.insert()
})

describe('GET tests', () => {
  test('we have two entries at the start', async () => {
    const initialSize = (await helper.peopleInDb()).length
    // Send GET request
    const response = await api.get('/api/phonebook')
    // Check if expected size
    expect(response.body).toHaveLength(initialSize)
  })

  test('getting a specific entry', async () => {
    const johnSkyner = await helper.findPerson('John Skyner')
    const id = johnSkyner.id
    // Send GET:id request
    const response = await api
      .get(`/api/phonebook/${id}`)
      .expect(200)
    // Check if same person
    const entryReceived = response.body
    expect(entryReceived).toEqual(johnSkyner)
  })
})

describe('POST test', () => {
  test('adding an entry', async () => {
    // Get initial size
    const initialSize = (await helper.peopleInDb()).length
    // Create entry to add
    const newEntry = { name: 'Eric Jandciu', number: '604-565-0192' }
    // Send POST request
    await api
      .post('/api/phonebook')
      .send(newEntry)
      .expect(201)
    // Check if person added
    const newSize = (await helper.peopleInDb()).length
    expect(newSize).toEqual(initialSize + 1)
    // Check if same person added
    const ericJandciu = await helper.findPerson('Eric Jandciu')
    expect(ericJandciu.name).toEqual(newEntry.name)
    expect(ericJandciu.number).toEqual(newEntry.number)
    expect(ericJandciu.favourite).toBe(false)
  })
})

describe('PUT tests', () => {
  test('favourite an entry', async () => {
    // Get person to favourite
    const ericWalker = await helper.findPerson('Eric Walker')
    const id = ericWalker.id
    // Send PUT request
    const response = await api
      .put(`/api/phonebook/${id}`)
      .expect(200)
    // Confirm change
    const updatedEntry = response.body
    expect(updatedEntry.favourite).toBe(true)
  })

  test('unfavourite an entry', async () => {
    // Get person to favourite
    const johnSkyner = await helper.findPerson('John Skyner')
    const id = johnSkyner.id
    // Send PUT request
    const response = await api
      .put(`/api/phonebook/${id}`)
      .expect(200)
    // Confirm change
    const updatedEntry = response.body
    expect(updatedEntry.favourite).toBe(false)
  })
})

describe('DELETE test', () => {
  test('delete an entry', async () => {
    // Get initial size
    const initialSize = (await helper.peopleInDb()).length
    // Get person to remove
    const ericWalker = await helper.findPerson('Eric Walker')
    const id = ericWalker.id
    // Send DELETE request
    await api
      .delete(`/api/phonebook/${id}`)
      .expect(200)
    // Check if person removed
    const newSize = (await helper.peopleInDb()).length
    expect(newSize).toEqual(initialSize - 1)
    // Check if other person remains
    const johnSkyner = await helper.findPerson('John Skyner')
    expect(johnSkyner.name).not.toEqual(ericWalker.name)
    expect(johnSkyner.number).not.toEqual(ericWalker.number)
    expect(johnSkyner.favourite).not.toEqual(ericWalker.favourite)
  })
})


// Runs after all tests
afterAll(async () => {
  server.close()
  await mongoose.connection.close()
})