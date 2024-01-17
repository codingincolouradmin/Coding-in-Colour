const { Sequelize } = require('sequelize')
const pg = require('pg')

// Database URL -> external URL
const databaseURL = 'postgres://aleem:HIgRmAyY4igxssOodOrmFc5ZPb5bhgMD@dpg-cmk47eqcn0vc73dmne8g-a.oregon-postgres.render.com/lecture119'

// Perform the connection through sequelize
const sequelize = new Sequelize(databaseURL, {
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

// Authentication function
const connect = async () => {
  try {
    await sequelize.authenticate()
    console.log('We have successfully connected to database...')
  } catch (error) {
    console.log('Unable to connect to database...')
  }
}

connect()