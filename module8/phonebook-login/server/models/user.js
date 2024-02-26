const mongoose = require('mongoose')

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the password hash should not be returned
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('User', userSchema)