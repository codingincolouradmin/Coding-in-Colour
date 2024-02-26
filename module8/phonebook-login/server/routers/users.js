const express = require('express')
const bcrypt = require('bcryptjs')
const usersRouter = express.Router()

/**
 * Import mongoose model
 */
const User = require('../models/user')

/**
 * @receives a GET request to the URL: http://localhost:3001/api/users/about
 * @returns a basic message
 */
usersRouter.get('/about', async (request, response) => {
  response.json({
    message: 'First endpoint for persons router'
  })
})

/**
 * @receives a request to the URL: http://localhost:3001/api/users
 * @returns bulk users list as a JSON
 */
usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users)
})

/**
 * @receives a GET:id request to the URL: http://localhost:3001/api/users/:id
 * @returns a specific user 
 */
usersRouter.get('/:id', async (request, response) => {
  const id = request.params.id
  const user = await User.findById(id)
  response.json(user)
})

/**
 * @receives a POST request to the URL: http://localhost:3001/api/user
 * @returns the newly created user
 */
usersRouter.post('/', async (request, response) => {
  // fields
  const { username, password } = request.body
  // Error handling
  if (!username || !password) {
    return response.status(400).send({
      error: 'missing username or password'
    })
  }
  // Check if user already exists
  const duplicateCount = await User.countDocuments({ username }).exec()
  if (duplicateCount !== 0) {
    return response.status(400).send({
      error: 'username not available'
    })
  }
  // Create the user
  const passwordHash = await bcrypt.hash(password, 10)
  const user = new User({
    username, passwordHash
  })
  // Save user and return user
  const savedUser = await user.save()
  response.status(201).send(savedUser)
})

/**
 * @receives a DELETE request to the URL: http://localhost:3001/api/user/:id
 * @returns an appropriate status code
 */
usersRouter.delete('/:id', async (request, response) => {
  const id = request.params.id
  // Delete entry
  await User.findByIdAndDelete(id)
  response.status(200).send()
})

module.exports = usersRouter