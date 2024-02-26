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

module.exports = usersRouter