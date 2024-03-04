const bcrypt = require('bcryptjs')
const express = require('express')
const loginRouter = express.Router()

/**
 * Import mongoose model
 */
const Person = require('../models/person')

/**
 * @receives a POST request to the URL: http://localhost:3001/api/login
 * @returns the person one has logged in with
 */
loginRouter.post('/', async (request, response) => {
  // Get fields
  const { name, password } = request.body
  // Get user
  const person = await Person.findOne({ name })
  // Check if password is correct
  const passwordCorrect = person === null ? false : await bcrypt.compare(password, person.passwordHash)
  // Person check
  if (!passwordCorrect) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }
  // Return user information on success
  response.status(200).send(person)
})


module.exports = loginRouter