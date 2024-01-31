/**
 * Necessary imports, make sure you have these packages installed
 */
const supertest = require('supertest')
const sequelize = require('../config/database') // Provide a path to your config.js or database.js file, wherever you export that sequelize
const helper = require('./test_helper')
const server = require('../server') // Provide a path to your server.js file, or wherever you are starting your server and add your endpoints via router
const api = supertest(server) // Creates a test api that will send requests where we want them to be sent

/**
 * Imports that give us access to sequelize methods on our test models
 */
const Note = require('../models/testNote') // Provide the path to your test currency model

/**
 * Runs before each test
 */
beforeEach(async () => {
  // Clear our testNotes table
  await helper.clearData()
  // Put some notes into our testNotes table
  await Note.bulkCreate(helper.initialNotes)
})

describe('GET tests', () => {
  /**
   * Check that we have 2 notes at the start (GET)
   */
  test('GET - we have 2 notes at the start', async () => {
    const response = await api.get('/api/notes')
    expect(response.body).toHaveLength(2)
  })

  /**
   * Check that we get a specific note (GET:id)
   */
  test('GET:id - getting a specific note', async () => {
    const firstNote = helper.initialNotes[0]
    const id = firstNote.id

    // Verify that we get the same note
    const response = await api
      .get(`/api/notes/${id}`)
      .expect(200)
    const noteReceived = response.body

    // Compare the notes
    expect(firstNote).toEqual(noteReceived)
  })
})

describe('POST tests', () => {
  /**
   * Add a note, and verify that the note is added
   */
  test('POST - adding a note', async () => {
    // Create our note
    const newNote = {
      content: 'Hello',
      important: true
    }
    
    // Send it to the endpoint and get the note back that we added
    const response = await api
      .post('/api/notes')
      .send(newNote)
      .expect(201)
    const noteReceived = response.body

    // Compare the length of the database (TODO)
    // Check if the note we added is the same as the one we get back
    expect(newNote.content).toEqual(noteReceived.content)
    expect(newNote.important).toEqual(noteReceived.important)
  })
})

/**
 * Runs after all our tests
 */
afterAll(async () => {
  // Closes connection after all tests run
  server.close()
  await sequelize.close()
})
