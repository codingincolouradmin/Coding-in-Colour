/**
 * Necessary imports and setup for connecting to our database and populating it with data
 */
const { makeConnection, closeConnection } = require('./mongodb')
const Person = require('../models/person')
let phonebook = 
[
  { name: 'Arto Hellas', number: '604-234-2195', favourite: true },
  { name: 'Johann Velo', number: '604-220-6792', favourite: false },
  { name: 'Isaiah Wood', number: '604-778-2012', favourite: false }
]

/**
 * make connection and add values internally, then close
 */
makeConnection()
  .then(() => {
    Person
      .insertMany(phonebook)
      .then(() => {
        console.log('successful bulk insertion')
        closeConnection()
      })
      .catch((error) => {
        console.log('error performing bulk insertion ', error)
        closeConnection()
      })
  })