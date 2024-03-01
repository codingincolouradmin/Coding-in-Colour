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


module.exports = basketRouter