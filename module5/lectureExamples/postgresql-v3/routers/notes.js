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

/**
 * TODO -> GET:id
 * @receives request sent to address http://localhost:3001/api/notes/:id
 * @returns the specific note matching by id
 */

/**
 * TODO -> PUT:id (toggles the important field to its opposite)
 * @receives request sent to address http://localhost:3001/api/notes/:id
 * @returns the updated note
 */

/**
 * TODO -> DELETE:id 
 * @receives request sent to address http://localhost:3001/api/notes/:id
 * @returns status code 200
 */

module.exports = notesRouter