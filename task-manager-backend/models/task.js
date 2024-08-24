const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

Task.belongsTo(User, { onDelete: 'CASCADE' });

module.exports = Task;
