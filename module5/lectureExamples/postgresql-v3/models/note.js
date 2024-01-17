// Import our sequelize connection, so we can make our model
const { sequelize } = require('../database')
const { DataTypes, Model } = require('sequelize')

// Define our Note Model
class Note extends Model {}
Note.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  important: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize,
  underscored: false,
  timestamps: true,
  modelName: 'Note'
})

module.exports = Note