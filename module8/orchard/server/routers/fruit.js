const express = require('express')
const fruitRouter = express.Router()

/**
 * Import mongoose models
 */
const Basket = require('../models/basket')
const Fruit = require('../models/fruit')

/**
 * @receives a GET request to the URL: http://localhost:3001/api/fruit/about
 * @returns a basic message
 */
fruitRouter.get('/about', async (request, response) => {
  response.json({
    message: 'First endpoint for fruits router'
  })
})

/**
 * @receives a request to the URL: http://localhost:3001/api/fruit
 * @returns bulk fruits list as a JSON
 */
fruitRouter.get('/', async (request, response) => {
  const fruits = await Fruit.find({})
  response.json(fruits)
})

/**
 * @receives a GET:id request to the URL: http://localhost:3001/api/fruit/:id
 * @returns a specific fruit 
 */
fruitRouter.get('/:id', async (request, response) => {
  const id = request.params.id
  const fruit = await Fruit.findById(id)
  response.json(fruit)
})

/**
 * @receives a POST request to the URL: http://localhost:3001/api/fruit/:id
 * Note: The :id required is the id of the BASKET the fruit should belong to
 * @returns the newly created fruit
 */
fruitRouter.post('/:id', async (request, response) => {
  // Get fields
  const basketId = request.params.id
  const { name, sweet } = request.body
  // Error handling
  if (!name || sweet === undefined) {
    return response.status(400).send({
      error: 'missing content in body'
    })
  }
  // Get basket
  const basket = await Basket.findById(basketId)
  if (!basket) {
    return response.status(400).send({
      error: 'no such basket exists to add the fruit to'
    })
  }
  // Create the fruit and save it 
  const fruit = new Fruit({
    name, sweet
  })
  const savedFruit = await fruit.save()
  // Add the fruit to the basket, and save that!
  basket.fruits = basket.fruits.concat(savedFruit._id)
  await basket.save()
  // Return the saved fruit
  return response.status(201).json(savedFruit)
})


module.exports = fruitRouter