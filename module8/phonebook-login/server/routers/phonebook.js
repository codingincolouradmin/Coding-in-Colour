const express = require('express')
const phonebookRouter = express.Router()

/**
 * Import mongoose model
 */
const Person = require('../models/person')

/**
 * @receives a GET request to the URL: http://localhost:3001/api/phonebook/about
 * @returns a basic message
 */
phonebookRouter.get('/about', async (request, response) => {
  response.json({
    message: 'First endpoint for persons router'
  })
})

/**
 * @receives a request to the URL: http://localhost:3001/api/phonebook
 * @returns bulk persons list as a JSON
 */
phonebookRouter.get('/', async (request, response) => {
  const phonebook = await Person.find({})
  response.json(phonebook)
})

/**
 * @receives a GET:id request to the URL: http://localhost:3001/api/phonebook/:id
 * @returns a specific person (entry)
 */
phonebookRouter.get('/:id', async (request, response) => {
  const id = request.params.id
  const entry = await Person.findById(id)
  response.json(entry)
})

/**
 * @receives a POST request to the URL: http://localhost:3001/api/phonebook
 * @returns the newly created person (entry)
 */
phonebookRouter.post('/', async (request, response) => {
  // Get body & fields
  const body = request.body
  const name = body.name
  const number = body.number
  // Error handling
  if (!body || !name || !number) {
    return response.status(400).send({
      error: 'missing content in body'
    })
  }
  // Create new entry
  const entry = new Person({
    name,
    number,
    favourite: false
  })
  // Update phonebook and return resource
  const dbResponse = await entry.save()
  response.status(201).send(dbResponse)
})

/**
 * @receives a PUT request to the URL: http://localhost:3001/api/phonebook/:id
 * @returns an appropriate status code
 */
phonebookRouter.put('/:id', async (request, response) => {
  const id = request.params.id
  // Update existing entry
  const entry = await Person.findById(id)
  const dbResponse = await Person.findByIdAndUpdate(id, { favourite: !entry.favourite }, { new: true })
  response.status(200).send(dbResponse)
})

/**
 * @receives a DELETE request to the URL: http://localhost:3001/api/phonebook/:id
 * @returns an appropriate status code
 */
phonebookRouter.delete('/:id', async (request, response) => {
  const id = request.params.id
  // Delete entry
  await Person.findByIdAndDelete(id)
  response.status(200).send()
})

module.exports = phonebookRouter