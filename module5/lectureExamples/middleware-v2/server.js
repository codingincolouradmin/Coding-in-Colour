const express = require('express')
const cors = require('cors')
const app = express()

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

// Server setup
app.use(cors()) // ALlows our server to receive data from same localhost
app.use(express.json()) // Allows our server to accept JSON data

// Generates an id for us
const generateId = () => {
  return notes.length + 1 // next id is just current length + 1
}

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`)
  next() // Ensures we 'release' the request so it can continue
})

// Handle GET requests
app.get('/api/notes', (request, response) => {
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

// Middleware for unknown endpoint
// Any request that isn't caught by the above two, will 'fall' into this
app.use((req, res, next) => {
  console.log('Unknown endpoint')
  res.send({ message: 'unknown endpoint'})
})

// Starts our server at PORT 3001
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})