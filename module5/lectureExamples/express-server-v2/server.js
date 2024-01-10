const express = require('express')
const cors = require('cors')
const app = express()

// Starting server data
let notes = [
  {
    id: 5632,
    content: "I like mangoes ^^",
  },
  {
    id: 1123,
    content: "I think apples are better! :( "
  }
]

// Server setup
app.use(cors()) // ALlows our server to receive data from same localhost
app.use(express.json()) // Allows our server to accept JSON data

// Generates an id for us
const generateId = () => {
  return Number((Math.random() * 10000).toFixed(0))
}

/**
 * TODO:
 * Implement an /about endpoint, that just returns what this server is all about -> notes!
 */

// Handle GET requests
app.get('/api/notes', (request, response) => {
  console.log('received GET request')
  response.json(notes)
})

/**
 * TODO: 
 * Implement the callback version of this
 */
// Handle GET:id request
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  let desiredNote = null;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      desiredNote = notes[i]
    }
  }
  if (desiredNote == null) {
    return response.status(404).send({ error: 'note not found!'})
  }
  response.json(desiredNote)
})

/**
 * TODO
 * Adding error handling that returns { error: 'content missing' } if the body is missing
 */
// Handle POST requests
app.post('/api/notes', (request, response) => {
  console.log('received POST request')
  const content = request.body.content
  const newNote = {
    id: generateId(),
    content: content
  }
  notes = notes.concat(newNote)
  response.json(newNote)
})

/**
 * TODO
 * Implementing the DELETE:id endpoint
 * Adding error handling for the case where the note does not exist (id not found)
 */

// Starts our server at PORT 3001
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})