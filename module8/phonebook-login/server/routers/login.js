const bcrypt = require('bcryptjs')
const express = require('express')
const loginRouter = express.Router()

/**
 * Import mongoose model
 */
const User = require('../models/user')

/**
 * @receives a POST request to the URL: http://localhost:3001/api/login
 * @returns the user one has logged in with
 */
loginRouter.post('/', async (request, response) => {
  // Get fields
  const { username, password } = request.body
  // Error handling
  if (!username || !password) {
    return response.status(400).send({
      error: 'missing username or password'
    })
  }
  // Get user for check
  const user = await User.findOne({ username })
  const passwordCorrect = user === null
  ? false 
  : await bcrypt.compare(password, user.passwordHash)

  if (!passwordCorrect) {
    return response.status(400).send({
      error: 'invalid username or password'
    })
  }
  // Return user information on success
  response.status(200).send(user)
})

module.exports = loginRouter