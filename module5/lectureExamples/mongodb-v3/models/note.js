const mongoose = require('../database')

// Note Schema
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
})

/**
 * Here we will implement a toJSON method
 * This is going to be applied when we use .json(...) on our response
 */
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// Export the above as 'Note' so its usable in endpoints
module.exports = mongoose.model('Note', noteSchema)