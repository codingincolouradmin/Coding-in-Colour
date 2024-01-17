const express = require('express')
const cors = require('cors')
const app = express()

// Import our connection
const { performConnection } = require('./database')

// Server setup
app.use(cors()) // Allows our server to receive data from same localhost -> front-end
app.use(express.json()) // Allows our server to accept JSON data

// Make connection to our database
performConnection()

// Start our server at PORT 3001
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})