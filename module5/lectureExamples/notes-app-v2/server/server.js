const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors()) // ALlows our server to receive data from same localhost
app.use(express.json()) // Allows our server to accept JSON data

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})