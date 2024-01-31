/**
 * I put this here, so when I run the server, I can access the .env
 */
require('dotenv').config()  

const express = require('express')  // We import the express application
const morgan = require('morgan') // For logging middleware
const cors = require('cors') // Necessary for localhost
const app = express() // Creates an express application in app

/**
 * Import routers and middleware
 */
const notesRouter = require('./routers/notes')

/**
 * Initial application setup
 * We need to use cors so we can connect to a localhost later
 * We need express.json so we can receive requests with JSON data attached
 */
app.use(cors())
app.use(express.json())

/**
 * Adding middleware and routers
 */
app.use(morgan('dev'))
app.use('/api/notes', notesRouter)

const PORT = 3002
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = server