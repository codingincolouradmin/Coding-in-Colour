const notesRouter = require('express').Router()
const Note = require('../models/note')

/**
 * GET request
 * @receives a request sent to the address http://localhost:3001/api/notes
 * @returns the data we have as a JSON
 */
notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({}) // We use the mongoose model to READ data from our collection
  response.json(notes) // The .json() performs the data processing as defined in the models/note.js
})

/**
 * POST request
 * @receives a request sent to the address http://localhost:3001/api/notes, with some data
 * @returns the newly created resource
 */
notesRouter.post('/', async (request, response) => {
  const content = request.body.content

  // We use the mongoose model to CREATE data in our database
  const newNote = new Note({
    content,
    important: false
  })
  const savedNote = await newNote.save()
  response.status(201).json(savedNote)
})

module.exports = notesRouter