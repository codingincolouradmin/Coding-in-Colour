const logger = ((req, res, next) => {
  console.log(`Incoming request: ${req.method} sent to http://localhost:3001${req.url}`)
  next() // Ensures we 'release' the request so it can continue
})

const unknownEndpoint = ((req, res, next) => {
  console.log('Unknown endpoint')
  res.send({ message: 'unknown endpoint'})
})

module.exports = {
  logger,
  unknownEndpoint
}