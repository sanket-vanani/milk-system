const sequelize = require('../config')
const { Sequelize } = require('sequelize')

const MilkCollection = sequelize.define('MilkCollection',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        memberID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        liter: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        fat: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        snf: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rate: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        amount: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        addDate: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        timeslot: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        animalType: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    }, {
    freezeTableName: true
})

module.exports = MilkCollection