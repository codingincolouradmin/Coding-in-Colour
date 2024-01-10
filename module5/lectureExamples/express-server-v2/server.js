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