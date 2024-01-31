const sequelize = require('../config/database')
const { Model, DataTypes } = require('sequelize')

class Note extends Model {}
Note.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
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
  timestamps: false,
  modelName: 'Note'
})

module.exports = Note