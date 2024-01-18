const mongoose = require('../database')

// Note Schema
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
})

// Export the above as 'Note' so its usable in endpoints
module.exports = mongoose.model('Note', noteSchema)