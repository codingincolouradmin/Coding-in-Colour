const notesRouter = require('express').Router()

// Starting server data
let notes = [
  {
    id: 1,
    content: "I like apples ^^",
  },
  {
    id: 2,
    content: "I think mangoes are better! :( "
  }
]

// Generates an id for us
const generateId = () => {
  return notes.length + 1 // next id is just current length + 1
}

// Handle GET requests
notesRouter.get('/', (request, response) => {
  response.json(notes)
})

// Handle POST requests
notesRouter.post('/', (request, response) => {
  const content = request.body.content
  const newNote = {
    id: generateId(),
    content: content
  }
  notes = notes.concat(newNote)
  response.json(newNote)
})

module.exports = notesRouter