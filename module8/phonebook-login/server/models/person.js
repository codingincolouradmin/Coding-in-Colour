const mongoose = require('mongoose')

// Person Schema
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  favourite: Boolean
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)