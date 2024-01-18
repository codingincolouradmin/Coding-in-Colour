const mongoose = require('mongoose')

/**
 * See this reference for more practice/review
 * https://fullstackopen.com/en/part3/saving_data_to_mongo_db#connecting-the-backend-to-a-database
 *  */ 

// Database URL
const databaseURL = `mongodb+srv://aleem:test@classwork.ixaa2o1.mongodb.net/lecture120?retryWrites=true&w=majority`

// Perform a connection
mongoose
  .connect(databaseURL)
  .then(() => console.log('successfully connected to database...'))
  .catch(() => console.log('failed connecting to database...'))

/**
 * STEP 1: Create schema in our code for 'what' type of data we are storing
 * MongoDB rules: 1 schema per collection
 */
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
})
const Person = mongoose.model('Person', personSchema)
/**
 * Once we start adding 'people', we'll see the following
 * In our "lecture120" database, a "Person" collection, with "person" documents (two key-value pairs, name and age, each) 
 */

// Let's add a person to our database
// const person = new Person({ name: 'John Doe', age: 30 })
// person.save().then((result) => {
//   console.log(`added ${result.name} with age ${result.age} to database`)
// })

// Let's add multiple people
// Person.bulkSave([
//   { name: 'Jane Doe', age: 30 },
//   { name: 'Xavier Francois', age: 20 }
// ], {}).then((result) => {
//   console.log(`successfully did a bulk save: ${result}`)
// })

// const person1 = new Person({ name: 'Jane Doe', age: 30 })
// person1.save().then((result) => {
//   console.log(`added ${result.name} with age ${result.age} to database`)
// })

// const person2 = new Person({ name: 'Xavier Francois', age: 20 })
// person2.save().then((result) => {
//   console.log(`added ${result.name} with age ${result.age} to database`)
// })