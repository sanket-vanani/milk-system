const sequelize = require('../config')
const { Sequelize } = require('sequelize')

const Dairy = sequelize.define('Dairy',
    {
        //serial id
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        //user name
        userName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        //password
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //center name
        centerName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //Dairy Name
        dairyName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //Dairy Address
        dairyAddress: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        //Phone number
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    }, {
    freezeTableName: true
})

module.exports = Dairy

