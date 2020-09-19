const { Sequelize } = require('sequelize');
require('dotenv').config();

//Getting database connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    })

//Checking the database connection
try {
    sequelize.authenticate();
    console.log(`Database connected successfully`)
}
catch (error) {
    console.error('Error in database connection: ', error)
}

module.exports = sequelize