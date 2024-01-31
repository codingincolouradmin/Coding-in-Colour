/**
 * Getting the .env here is more tricky
 * If I run from inside of config, the .env exists one level outside, hence I use a path...
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Necessary imports
const { Sequelize } = require('sequelize')
const pg = require('pg') 

// Get databaseURL
const databaseURL = `postgres://${process.env.username}:${process.env.password}@${process.env.dbURL}/${process.env.dbName}`
// Setup sequelize for connecting to our database
const sequelize = new Sequelize(databaseURL, {
  port: 5432,
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

// Test connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Successfully connected to database ${process.env.dbName}`)
  } catch (error) {
    console.log(`Error connecting to ${process.env.dbName}`)
    console.log(error)
  }
}

testConnection()

module.exports = sequelize