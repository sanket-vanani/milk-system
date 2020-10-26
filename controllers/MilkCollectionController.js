const MilkCollection = require('../models/MilkCollection')
const Customer = require('../models/Customer')
const { Sequelize } = require('sequelize');
exports.getMilkCollection = (req, res) => {
    MilkCollection.findAll({
        where: {
            DairyId: req.query.dairyid
        },
        include: {
            model: Customer
        },
        include: {
            model: Customer,
            attributes: ['customerName']
        }
    })
        .then(MilkCollection => {
            // console.log("Customer Name", MilkCollection[0].Customer.customerName)
            if (MilkCollection.length > 0) {
                var data = {
                    status: true,
                    message: "Milk Collection Founded",
                    result: MilkCollection
                }
                return res.status(200).json(data)
            }
            else {
                var data = {
                    status: true,
                    message: "Milk Collection Not Founded",
                    result: MilkCollection
                }
                return res.status(200).json(data)
            }

        })
        .catch(error => {
            console.log(error.message)
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err)
        })
}

exports.addMilkCollection = (req, res) => {
    var data = req.body
    MilkCollection.create(data)
        .then((MilkCollection) => {
            console.log("Auto id ", MilkCollection.id)
            let obj = []
            obj.push(MilkCollection)
            let data = {
                status: true,
                message: "MilkCollection Added",
                result: obj
            }
            return res.status(200).json(data)
        })
        .catch((error) => {
            console.log(error)
            let err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err)
        })
}

exports.getMilkCollectionById = (req, res) => {
    const id = req.params.id
    MilkCollection.findAll({
        where: {
            id: id
        }
    })
        .then(MilkCollection => {
            if (MilkCollection.length > 0) {
                var data = {
                    status: true,
                    message: "Milk Collection Founded",
                    result: MilkCollection
                }
                return res.status(200).json(data)
            }
            else {
                var data = {
                    status: true,
                    message: "Milk Collection Not Founded",
                    result: MilkCollection
                }
                return res.status(200).json(data)
            }

        })
        .catch(error => {
            console.log(error)
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err)
        })
}

exports.editMilkCollection = (req, res) => {
    const id = req.params.id
    var obj = req.body
    MilkCollection.update(obj, {
        where: {
            id: id
        }
    })
        .then(MilkCollection => {
            var data = {
                status: true,
                message: MilkCollection + " MilkCollection Updated"
            }
            return res.status(200).json(data);
        })
        .catch(error => {
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err);
        })
}

exports.removeMilkCollection = (req, res) => {
    const id = req.params.id
    MilkCollection.destroy({
        where: {
            id: id
        }
    })
        .then(MilkCollection => {
            if (MilkCollection != undefined) {
                var data = {
                    status: true,
                    message: MilkCollection + " MilkCollection Deleted"
                }
                return res.status(200).json(data)
            }
        })
        .catch(error => {
            console.log(error)
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err)
        })
}