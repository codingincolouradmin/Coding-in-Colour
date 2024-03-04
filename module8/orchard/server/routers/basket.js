const express = require('express')
const basketRouter = express.Router()

/**
 * Import mongoose models
 */
const Person = require('../models/person')
const Basket = require('../models/basket')
const Fruit = require('../models/fruit')

/**
 * @receives a GET request to the URL: http://localhost:3001/api/basket/about
 * @returns a basic message
 */
basketRouter.get('/about', async (request, response) => {
  response.json({
    message: 'First endpoint for baskets router'
  })
})

/**
 * @receives a request to the URL: http://localhost:3001/api/basket
 * @returns bulk baskets list as a JSON
 */
basketRouter.get('/', async (request, response) => {
  const baskets = await Basket.find({})
  response.json(baskets)
})

/**
 * @receives a GET:id request to the URL: http://localhost:3001/api/basket/:id
 * @returns a specific basket 
 */
basketRouter.get('/:id', async (request, response) => {
  const id = request.params.id
  const basket = await Basket.findById(id)
  response.json(basket)
})

/**
 * @receives a POST request to the URL: http://localhost:3001/api/basket/:id
 * Note: The :id required is the id of the PERSON the basket should belong to
 * @returns the newly created basket
 */
basketRouter.post('/', async (request, response) => {
  // Get fields
  const personId = request.params.id
  const { name } = request.body
  // Error handling
  if (!name) {
    return response.status(400).send({
      error: 'missing content in body'
    })
  }
  // Get person
  const person = await Person.findById(personId)
  if (!person) {
    return response.status(400).send({
      error: 'no such person exists to add the basket to'
    })
  }
  // Create new basket and save it
  const basket = new Basket({
    name
  })
  const savedBasket = await basket.save()
  // Add the basket to the person and save that
  person.baskets = person.baskets.concat(savedBasket._id)
  await person.save()
  // Return the saved basket
  response.status(201).send(savedBasket)
})

/**
 * @receives a DELETE request to the URL: http://localhost:3001/api/basket/:id
 * Note: The :id required is the id of the BASKET we want to delete
 * You should pass the person id in the request body
 * @returns an appropriate status code
 */
basketRouter.delete('/:id', async (request, response) => {
  // Get fields
  const basketId = request.params.id
  const { personId } = request.body
  // Check if the person exists
  const person = await Person.findById(personId)
  if (!person) {
    return response.status(400).send({
      error: 'no such person exists to remove the basket from'
    })
  }
  // Remove the basket from the person who owns it
  person.baskets = person.baskets.filter(id => id.toJSON() !== basketId)
  await person.save()
  // Remove the fruits
  const fruitIds = (await Basket.findById(basketId)).fruits.map(id => id.toJSON())
  await Promise.all(fruitIds.map(id => Fruit.findByIdAndDelete(id)))
  // Remove the basket
  await Basket.findByIdAndDelete(basketId)
  // Return response
  response.status(204).send()
})


module.exports = basketRouter