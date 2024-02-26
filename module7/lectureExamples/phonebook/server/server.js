/**
 * Import environmental variables
 */
require('dotenv').config()

/**
 * Necessary imports for starting a server
 */
const express = require('express')
const cors = require('cors')
const app = express()                       // Creates an express server in app

/**
 * Connect to database
 */
const db = require('./config/mongodb')
db.makeConnection()

/**
 * Import routers and middleware
 */
const morgan = require('morgan')
const phonebookRouter = require('./routers/phonebook')

/**
 * Initial server setup
 * We need to use cors so we can receive requests from localhost
 * We need express.json so we can receive requests with JSON data
 */
app.use(cors())
app.use(express.json())

/**
 * Adding middleware and routes
 */
app.use(morgan('dev'))
app.use('/api/phonebook', phonebookRouter)

/**
 * Listen to server
 */
const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`)
})

module.exports = server               // Useful later, for backend testing