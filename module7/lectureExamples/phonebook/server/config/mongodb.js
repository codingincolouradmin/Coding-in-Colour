/**
 * Handling getting our .env
 */
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env')})

/**
 * Necessary imports for connecting to our database
 */
const mongoose = require('mongoose')
mongoose.set("strictQuery", false)

/**
 * make and close connection functions
 */
const makeConnection = async () => {
  const databaseURL = process.env.NODE_ENV === 'test' ? process.env.MONGODB_TEST_URI : process.env.MONGODB_URI
  try {
    console.log(`connecting to... ${databaseURL}`)
    await mongoose
      .connect(databaseURL)
    console.log('successful connection to MongoDB')
  } catch (error) {
    console.log('error connecting to MongoDB: ', error)
  }
}

const closeConnection = async () => {
  try {
    await mongoose.connection.close()
  } catch (error) {
    console.log('error closing connection: ', error)
  }
}

module.exports = { makeConnection, closeConnection }
