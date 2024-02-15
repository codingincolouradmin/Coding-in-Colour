/**
 * Import models needed for helper functions
 */
const Person = require('../models/person')
const { v4: uuidv4 } = require('uuid')

/**
 * Initial test collection
 */
const testPhonebook = [
  {
    name: 'John Skyner',
    number: '604-195-2321',
    favourite: true
  },
  {
    name: 'Eric Walker',
    number: '604-014-1096',
    favourite: false
  }
]

/**
 * Returns all entries from the DB collection
 */
const peopleInDb = async () => {
  const entries = await Person.find({})
  return entries.map(entry => entry.toJSON())
}

/**
 * Returns a particular person
 */
const findPerson = async (name) => {
  const entries = await Person.find({ name })
  return entries.map(entry => entry.toJSON())[0]
}

/**
 * Perform a bulk insert
 */
const insert = async () => {
  await Person.insertMany(testPhonebook)
}

/**
 * Clears the collection
 */
const clearData = async () => {
  await Person.deleteMany({})
}

module.exports = { testPhonebook, peopleInDb, findPerson, insert, clearData }