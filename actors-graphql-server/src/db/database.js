const { Sequelize } = require('sequelize');

// Initialize a new Sequelize instance for SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite' // Path to the SQLite database file
});

// Test the database connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

testConnection();

module.exports = sequelize;