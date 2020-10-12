const { Sequelize } = require('sequelize')
const sequelize = require('../config')
const Dairy = require('./Dairy')
const Customer = require('./Customer')

const LocalSale = sequelize.define('LocalSale',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        saleDate: {
            type: Sequelize.STRING,
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


Dairy.hasMany(LocalSale)
LocalSale.belongsTo(Dairy)

Customer.hasMany(LocalSale)
LocalSale.belongsTo(Customer)

module.exports = LocalSale