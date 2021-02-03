const sequelize = require('../config')
const { Sequelize } = require('sequelize')
const Customer = require('./Customer')
const Dairy = require('./Dairy')

const MilkCollection = sequelize.define('MilkCollection',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
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
        liter_pd: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        fat_pd: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        gov_pd: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        total_rate_with_pd: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    }, {
    freezeTableName: true
})


Customer.hasMany(MilkCollection)
MilkCollection.belongsTo(Customer)

Dairy.hasMany(MilkCollection)
MilkCollection.belongsTo(Dairy)

module.exports = MilkCollection