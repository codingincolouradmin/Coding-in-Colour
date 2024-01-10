const express = require('express')
const cors = require('cors')
const app = express()

// Starting server data
let notes = [
  {
    id: 1,
    content: "I like mangoes ^^",
  },
  {
    id: 2,
    content: "I think apples are better! :( "
  }
]

// Server setup
app.use(cors()) // ALlows our server to receive data from same localhost
app.use(express.json()) // Allows our server to accept JSON data

// Generates an id for us
const generateId = () => {
  return notes.length + 1 // next id is just current length + 1
}

// Handle GET requests
app.get('/api/notes', (request, response) => {
  console.log('received request')
  response.json(notes)
})

// Handle POST requests
app.post('/api/notes', (request, response) => {
  const content = request.body.content
  const newNote = {
    id: generateId(),
    content: content
  }
  notes = notes.concat(newNote)
  response.json(newNote)
})

// Starts our server at PORT 3001
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})