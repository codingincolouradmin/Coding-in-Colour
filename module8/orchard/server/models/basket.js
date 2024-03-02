const mongoose = require('mongoose')

// Basket schema
const basketSchema = new mongoose.Schema({
  name: String,
  fruits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Fruit'
    }
  ]
})

basketSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Basket = mongoose.model('Basket', basketSchema)

module.exports = Basket