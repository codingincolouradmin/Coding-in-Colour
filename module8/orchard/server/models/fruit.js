const mongoose = require('mongoose')

// Fruit schema
const fruitSchema = new mongoose.Schema({
  name: String,
  sweet: Boolean,
})

fruitSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit