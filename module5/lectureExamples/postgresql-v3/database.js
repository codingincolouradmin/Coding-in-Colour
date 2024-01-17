const { Sequelize } = require('sequelize')
const pg = require('pg')

// Database URL -> external URL
const databaseURL = 'postgres://aleem:HIgRmAyY4igxssOodOrmFc5ZPb5bhgMD@dpg-cmk47eqcn0vc73dmne8g-a.oregon-postgres.render.com/lecture119'

// Setup sequelize for connecting to our database
const sequelize = new Sequelize(databaseURL, {
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

// This authentication authenticates connection, export this
const authenticateConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('We have successfully connected to database...')
  } catch (error) {
    console.log('Unable to connect to database...')
  }
}

module.exports = { sequelize, authenticateConnection }