const express = require('express')
const notesRouter = express.Router()

/**
 * Import Note model, and with it, connection to the database via sequelize
 * Accomodate either connecting to the Notes table or the testNotes table
 */
const Note = process.env.NODE_ENV === "test" ? require('../models/testNote') : require('../models/Note')
// For generating ids
const { v4: uuidv4 } = require('uuid')

/**
 * @receives a GET request sent to http://localhost:3002/api/notes
 * @returns a JSON of our notes from the Notes table in our database
 */
notesRouter.get('/', async (request, response) => {
  const notes = await Note.findAll()
  response.json(notes)
})

/**
 * @receives a GET request sent to http://localhost:3002/api/notes:id
 * @returns a note from the Note table in our database with matching id
 */
notesRouter.get('/:id', async (request, response) => {
  // Get params
  const id = request.params.id
  // find specific note and return it
  const note = await Note.findByPk(id)
  response.json(note)
})

/**
 * @receives a POST request sent to http://localhost:3002/api/notes
 * @returns the newly created note
 */
notesRouter.post('/', async (request, response) => {
  // Get body & fields
  const body = request.body
  const content = body.content
  const important = body.important
  // Error handling?
  // Create new note
  const newNote = {
    id: uuidv4(),
    content,
    important
  }
  // Update Notes table and return new creation
  const dbResponse = await Note.create(newNote)
  response.status(201).send(dbResponse)
})

/**
 * @receives a DELETE request sent to http://localhost:3002/api/notes/:id
 * @returns a success status code of 201
 */
notesRouter.delete('/:id', async (request, response) => {
  // Get params
  const id = request.params.id
  // Perform deletion
  await Note.destroy({
    where: { id }
  })
  response.status(201).send()
})

module.exports = notesRouter