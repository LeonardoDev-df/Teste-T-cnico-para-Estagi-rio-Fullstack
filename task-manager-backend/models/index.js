const sequelize = require('../config/config');
const User = require('./user');
const Task = require('./task');

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Failed to sync database:', error);
  }
};

module.exports = {
  User,
  Task,
  initializeDatabase
};
