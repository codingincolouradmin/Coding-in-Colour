const express = require('express')
const middleware = require('./utils/middleware')
const cors = require('cors')
const app = express()

// Import our connection
const { authenticateConnection } = require('./database')

// Import our Routers
const notesRouter = require('./routers/notes')

// Server setup
app.use(cors()) // Allows our server to receive data from same localhost -> front-end
app.use(express.json()) // Allows our server to accept JSON data

// authenticate the connection to our database
authenticateConnection()

app.use(middleware.logger)          // Added middleware to log requests
app.use('/api/notes', notesRouter)
app.use(middleware.unknownEndpoint) // Added middleware for unknown, notice the order?

// Start our server at PORT 3001
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})