const express = require('express')
const basketRouter = express.Router()

/**
 * Import mongoose models
 */
const Basket = require('../models/basket')

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
 * @receives a POST request to the URL: http://localhost:3001/api/basket
 * @returns the newly created basket
 */
basketRouter.post('/', async (request, response) => {
  // Get fields
  const { name } = request.body
  // Error handling
  if (!name) {
    return response.status(400).send({
      error: 'missing content in body'
    })
  }
  // Create new basket and save it
  const basket = new Basket({
    name
  })
  const savedBasket = await basket.save()
  // Return the saved basket
  response.status(201).send(savedBasket)
})
module.exports = basketRouter