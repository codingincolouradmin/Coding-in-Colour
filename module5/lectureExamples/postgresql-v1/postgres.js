const { Sequelize, DataTypes } = require('sequelize')
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

/**
 * STEP 1: Create a Note toble in our database
 * First I need to define the data itself with a model that's being stored in the table (Sequelize)
 */
const Note = sequelize.define('Note', {
  content: DataTypes.STRING,
  important: DataTypes.BOOLEAN
})
Note
  .sync()
  .then(() => {
    console.log('Notes table created')
  })
  .catch((error) => {
    console.log('Error creating table: ', error)
  })