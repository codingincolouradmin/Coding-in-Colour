const express = require('express')
const notesRouter = require('./routers/notes')
const middleware = require('./utils/middleware')
const cors = require('cors')
const app = express()

// Server setup
app.use(cors()) // ALlows our server to receive data from same localhost
app.use(express.json()) // Allows our server to accept JSON data

app.use(middleware.logger)          // Addled middleware to log requests
app.use('/api/notes', notesRouter)  // Add notes routes
app.use(middleware.unknownEndpoint) // Added middleware for unknown, notice the order?

// Starts our server at PORT 3001
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})