const { Sequelize } = require('sequelize')
const sequelize = require('../config')

const Admin = sequelize.define('Admin',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    }, {
    freezeTableName: true
})

module.exports = Admin