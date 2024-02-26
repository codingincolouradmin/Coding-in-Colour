const express = require('express')
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

module.exports = usersRouter