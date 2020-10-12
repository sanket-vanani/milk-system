const sequelize = require('../config')
const { Sequelize } = require('sequelize')
const Customer = require('./Customer')
const Dairy = require('./Dairy')

const Payment = sequelize.define('Payment',
    {
        //serial id
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        amount: {
            type: Sequelize.STRING,
            allowNull: false
        },
        paymentDate: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    }, {
    freezeTableName: true
})

Customer.hasMany(Payment)
Payment.belongsTo(Customer)

Dairy.hasMany(Payment)
Payment.belongsTo(Dairy)


module.exports = Payment
