const MilkCollection = require('../models/MilkCollection')
const Customer = require('../models/Customer')
const dateFormat = require('dateformat')
const { Sequelize, Op } = require('sequelize');
exports.getMilkCollection = (req, res) => {

    const { addDate, timeslot, animalType } = req.body
    var search
    if (addDate != "" && timeslot != "" && animalType != "") {
        console.log("1")
        search = {
            DairyId: req.query.dairyid,
            addDate: addDate,
            timeslot: timeslot,
            animalType: animalType
        }
    }
    else {
        console.log("2")
        search = {
            DairyId: req.query.dairyid
        }
    }
    MilkCollection.findAll({
        where: search,
        include: {
            model: Customer
        },
        include: {
            model: Customer,
            attributes: ['customerName']
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
            console.log(error.message)
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err)
        })
}

exports.getLedger = (req, res) => {

    const { startDate, endDate, timeslot, startMemberId, endMemberId, animalType } = req.body
    var search
    if (startDate != "" && endDate != "" && startMemberId != "" && endMemberId != "") {
        console.log("1")
        if (timeslot == "" && animalType == "") {
            search = {
                DairyId: req.query.dairyid,
                addDate: {
                    [Op.between]: [startDate, endDate]
                },
                CustomerId: {
                    [Op.between]: [startMemberId, endMemberId]
                }
            }
        }
        else if (timeslot != "" && animalType == "") {
            search = {
                DairyId: req.query.dairyid,
                addDate: {
                    [Op.between]: [startDate, endDate]
                },
                CustomerId: {
                    [Op.between]: [startMemberId, endMemberId]
                },
                timeslot: timeslot
            }
        }
        else if (timeslot == "" && animalType != "") {
            search = {
                DairyId: req.query.dairyid,
                addDate: {
                    [Op.between]: [startDate, endDate]
                },
                CustomerId: {
                    [Op.between]: [startMemberId, endMemberId]
                },
                animalType: animalType
            }
        }
        else if (timeslot != "" && animalType != "") {
            search = {
                DairyId: req.query.dairyid,
                addDate: {
                    [Op.between]: [startDate, endDate]
                },
                CustomerId: {
                    [Op.between]: [startMemberId, endMemberId]
                },
                animalType: animalType,
                timeslot: timeslot
            }
        }
    }
    else {
        console.log("2")
        search = {
            DairyId: req.query.dairyid
        }
    }
    MilkCollection.findAll({
        where: search,
        include: {
            model: Customer
        },
        include: {
            model: Customer,
            attributes: ['customerName']
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
        .then((result) => {
            console.log("Auto id ", result.id)
            MilkCollection.findAll({
                where: {
                    id: result.id
                },
                attributes: {
                    exclude: ['updatedAt']
                },
                include: {
                    model: Customer,
                    attributes: ['customerName']
                }
            })
                .then(mk => {
                    let data = {
                        status: true,
                        message: "MilkCollection Added",
                        result: mk
                    }
                    return res.status(200).json(data)
                })
                .catch((error) => {
                    console.log(error.message)
                    let err = {
                        status: false,
                        message: error.message
                    }
                    return res.status(500).json(err)
                })
        })
        .catch((error) => {
            console.log(error.message)
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
        },
        attributes: {
            exclude: ['updatedAt']
        },
        include: {
            model: Customer,
            attributes: ['customerName']
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
        .then(result => {

            MilkCollection.findAll({
                where: {
                    id: id
                },
                attributes: {
                    exclude: ['updatedAt']
                },
                include: {
                    model: Customer,
                    attributes: ['customerName']
                }
            })
                .then(mk => {
                    var data = {
                        status: true,
                        message: result + " MilkCollection Updated",
                        result: mk
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