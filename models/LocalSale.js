const { Sequelize } = require('sequelize')
const sequelize = require('../config')

const LocalSale = sequelize.define('LocalSale',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        saleDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        animalType: {
            type: Sequelize.STRING,
            allowNull: false
        },
        liter: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rate: {
            type: Sequelize.STRING,
            allowNull: false
        },
        totalAmount: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    }, {
    freezeTableName: true
})

module.exports = LocalSale