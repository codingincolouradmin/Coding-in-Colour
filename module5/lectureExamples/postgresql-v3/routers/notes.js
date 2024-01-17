const notesRouter = require('express').Router()
// We need to import the model we created, that is connected to the database via sequelize
const Note = require('../models/note')

/**
 * Completed -> GET
 * @receives request sent to address http://localhost:3001/api/notes
 * @returns our notes from our database as a JSON
 */
notesRouter.get('/', async (req, res) => {
  const notes = await Note.findAll()
  res.json(notes)
})


module.exports = notesRouter