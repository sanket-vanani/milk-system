const sequelize = require('../config')
const { Sequelize } = require('sequelize')

const Customer = sequelize.define('Customer',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        customerName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        fatherName: {
            type: Sequelize.STRING
        },
        accountNumber: {
            type: Sequelize.STRING,
        },
        IFSCCode: {
            type: Sequelize.STRING
        },
        bankName: {
            type: Sequelize.STRING
        },
        villageName: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.TEXT
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    }, {
    //Enforcing to set table name same as model name
    freezeTableName: true
})
module.exports = Customer