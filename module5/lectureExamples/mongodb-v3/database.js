const mongoose = require('mongoose')

// Database URL
const databaseURL = `mongodb+srv://aleem:test@classwork.ixaa2o1.mongodb.net/lecture120?retryWrites=true&w=majority`

// Perform a connection to our database
mongoose
  .connect(databaseURL)
  .then(() => console.log('successfull connection to database...'))
  .catch((error) => console.log(`failed connecting due to error: ${error}`))

module.exports = mongoose